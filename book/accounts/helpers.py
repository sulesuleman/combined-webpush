import os
import base64
import requests
import environ

env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)

from app.settings.base import *
from django.core.files.temp import NamedTemporaryFile
from jinja2 import Environment, FileSystemLoader


PATH = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_ENVIRONMENT = Environment(
    autoescape=False,
    loader=FileSystemLoader(os.path.join(PATH, 'templates/websites')),
    trim_blocks=False)


def to_base64(data):
    return base64.b64encode(data.encode('UTF-8')).decode('UTF-8')


def from_base64(data):
    return base64.b64decode(data.encode('UTF-8')).decode('UTF-8')


def render_template(template_name, context):
    return TEMPLATE_ENVIRONMENT.get_template(template_name).render(context)


def set_website_manifest_json(website):
    """
    Setting website sdk #Todo need to look into it later and remove unneccasery data.
    :param website:
    :return:
    """
    context = {
        'short_name': website.title.split(' ')[0],
        'name': website.title,
        'description': website.title,
        'icon_192_url': website.logo128.url,
        'icon_512_url': website.logo128_2x.url
    }
    data = render_template('manifest.json', context=context)
    tempfile = NamedTemporaryFile(delete=True)
    tempfile.write(str.encode(data))
    website.manifest_json.save(
        'websites/' + to_base64(str(website.id)) + '/manifest.json',
        tempfile
    )
    tempfile.close()


def set_website_sdk_js(website):
    """
    Setting website sdk #Todo need to look into it later and remove unneccasery data.
    :param website:
    :return:
    """
    file = open(os.path.join(PROJECT_DIR, 'websites', 'templates', 'websites', 'prompt_component.css'), 'r')
    prompt_component_css = file.read()
    file.close()
    file = open(os.path.join(PROJECT_DIR, 'websites', 'templates', 'websites', 'prompt_materialized.css'), 'r')
    prompt_materialized_css = file.read()
    file.close()
    context = {
        'website_key': website.website_key,
        'desktop_prompt': website.desktopprompt.serialized,
        'mobile_prompt': website.mobileprompt.serialized,
        'gdpr_prompt': website.gdprprompt.serialized,
        'server_logging': 1 if website.server_logging else 0,
        'console_logging': 1 if website.console_logging else 0,
        'service_worker_path': website.service_worker_path,
        'vapid_public_key': website.vapid_key_pair.get('public_key'),
        'branding': 1 if website.branding else 0,
        'page_tracking': 1 if website.page_tracking else 0,
        'sdk_auth_key': website.sdk_auth_key,
        'logo32': website.logo32.url,
        'API_SERVER': env('API_SERVER'),
        'prompt_materialized_css': prompt_materialized_css,
        'prompt_component_css': prompt_component_css
    }

    context['gdpr_prompt']['enabled'] = 1 if context['gdpr_prompt']['enabled'] else 0
    context['mobile_prompt']['enabled'] = 1 if context['mobile_prompt']['enabled'] else 0
    context['desktop_prompt']['enabled'] = 1 if context['desktop_prompt']['enabled'] else 0
    context['desktop_prompt']['position'] = website.desktopprompt.position
    context['mobile_prompt']['position'] = website.mobileprompt.position
    context['gdpr_prompt']['position'] = website.gdprprompt.position

    data = render_template('sdk.min.js', context=context)
    tempfile = NamedTemporaryFile(delete=True)
    tempfile.write(str.encode(data))
    website.sdk_js.save(
        'websites/' + to_base64(str(website.id)) + '/sdk.min.js',
        tempfile
    )
    tempfile.close()


def set_website_service_worker_js(website):
    """
    Setting website service worker #Todo need to look into it later and remove unneccasery data.
    :param website:
    :return:
    """
    data = render_template('sw.js', context={
        'API_SERVER': env('API_SERVER'),
    })
    tempfile = NamedTemporaryFile()
    tempfile.write(str.encode(data))
    website.service_worker_js.save(
        'websites/' + to_base64(str(website.id)) + '/sw-cw.js',
        tempfile
    )
    tempfile.close()


def set_all_integration_files(website):
    set_website_service_worker_js(website)
    set_website_manifest_json(website)
    set_website_sdk_js(website)


def verify_service_worker_url(url):
    try:
        request = requests.get(url)
    except Exception as e:
        return False
    else:
        return False \
            if request.status_code != 200\
            else False \
            if 'Chirpyweb' not in request.text\
            else True


def get_sdk_css():
    sdk_path = os.path.join(PROJECT_DIR, 'app', 'static', 'css', 'sdk.css')
    with open(sdk_path, 'r') as sdk_file:
        css = sdk_file.read()
        sdk_file.close()
        return css


