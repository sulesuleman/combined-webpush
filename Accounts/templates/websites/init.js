{% if not is_shopify %}
window.addEventListener('load', function() {
{% endif %}
    try {
      var pushMonkeyConfig = {
        website_key: "{{website_key}}",
        sdk_auth_key: "{{sdk_auth_key}}",
        welcome_push: {
            id: {{welcome_playbook.id}},
            enabled: {{welcome_playbook.enabled}},
            title: "{{welcome_playbook.notification_title}}",
            message: "{{welcome_playbook.notification_message}}",
            url: "{{welcome_playbook.notification_url}}",
            icon_url: "{{welcome_playbook.notification_icon.url}}",
            image: "{{welcome_playbook_image_url}}"
        },

        gdpr_prompt : {
            enabled: {{gdpr_prompt.enabled}},
            position: "{{gdpr_prompt.position}}",
        },

        mobile_prompt : {
            enabled: {{mobile_prompt.enabled}},
            position: "{{mobile_prompt.position}}",
        },

        desktop_prompt : {
            enabled: {{desktop_prompt.enabled}},
            position: "{{desktop_prompt.position}}",
        },

        server_logging : {{server_logging}},
        console_logging : {{console_logging}},
        logo32: "{{logo32}}",

        branding: {{branding}},
        page_tracking: {{page_tracking}},

        service_worker_path : "{{service_worker_path}}",
        vapid_public_key: "{{vapid_public_key}}",

        urls: {
            base_url: "{{API_SERVER}}",
            server_logging: "{{API_SERVER}}/logging/sdk/",
            add_subscription: "{{API_SERVER}}/subscribers/sdk/create/",
            event_tracking: "{{API_SERVER}}/tracking/event/",
        }
      };
      (function(config) {

        if ("object" !== typeof config) {
          console.log("Push Monkey: Missing configuration.");
        } else {

          window._coreSdk = new CoreSDK(config);
          window._coreSdk.show_prompt();
        }
      })(pushMonkeyConfig);

    } catch(err) {

      console.log(err);
    }
{% if not is_shopify %}
});
{% endif %}
