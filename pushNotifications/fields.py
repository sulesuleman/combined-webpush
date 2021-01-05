import inspect
import json
import os.path

from django.contrib.postgres import forms
from django.forms.widgets import Textarea
from jsonschema import validate, exceptions as jsonschema_exceptions

from django.core import exceptions
from django.contrib.postgres.fields import JSONField


__all__ = ['JSONSchemaField']


class JSONSchemaWidget(Textarea):
    def __init__(self, schema_data, *args):
        self._schema_data = schema_data
        super().__init__(*args)

    def render(self, name, value, attrs=None, renderer=None):
        html = super().render(name, value, attrs)
        html += "<div class=\"json_schema\">"\
            "<a href=\"\" class=\"json_schema_toggle\">Schema...</a>"\
            "<pre class=\"json_schema_value\">%s</pre></div>" % \
            json.dumps(self._schema_data,
                       indent=2, sort_keys=True)
        return html

    class Media:
        css = {
            'all': ('admin/core/css/jsonschema.css',)
        }
        js = ('admin/core/js/jsonschema_widget.js',)


class JSONSchemaFormField(forms.JSONField):
    def __init__(self, *args, **kwargs):
        self._schema_data = kwargs.pop('schema_data', None)
        kwargs['widget'] = JSONSchemaWidget(self._schema_data)
        super().__init__(*args, **kwargs)


class JSONSchemaField(JSONField):

    def __init__(self, *args, **kwargs):
        self.schema = kwargs.pop('schemas', None)
        super().__init__(*args, **kwargs)

    @property
    def _schema_data(self):
        model_file = inspect.getfile(self.model)
        dirname = os.path.dirname(model_file)
        # schemas file related to model.py path
        p = os.path.join(dirname, self.schema)
        with open(p, 'r') as file:
            return json.loads(file.read())

    def formfield(self, **kwargs):
        defaults = {
            'form_class': JSONSchemaFormField,
            'schema_data': self._schema_data
        }
        defaults.update(kwargs)
        return super().formfield(**defaults)

    def _validate_schema(self, value):
        """JSON schemas validation."""

        # Disable schemas validation in datamigrations
        # We can't get path to json schemas via `inspect`
        if self.model.__module__ == '__fake__':
            return True
        try:
            status = validate(value, self._schema_data)
        except jsonschema_exceptions.ValidationError as e:
            raise exceptions.ValidationError(e.message, code='invalid')
        return status

    def validate(self, value, model_instance):
        super().validate(value, model_instance)
        self._validate_schema(value)

    def pre_save(self, model_instance, add):
        value = super().pre_save(model_instance, add)
        if value and not self.null:
            self._validate_schema(value)
        return value
