var CoreSDK = function(config) {
    var core = this;
    var cookie_client = new CookieClient();
    var network_client = new NetworkClient();
    var prompt_client = new PromptClient();
    var shopify_client = new ShopifyClient();

    core.server_log = function(msg, type='log'){
        if (config.server_logging){
            var req = new XMLHttpRequest();
            req.open("GET", config.urls.server_logging + "?msg=" + msg + "&type=" + type, true);
            req.send();
        }
    }

    core.console_log = function(msg, type='log', ex=''){
        if (config.console_logging){
            if (type == 'log'){
                console.log(msg);
            }else{
                console.error(msg, ex);
            }
        }
    }

    core.log = function(msg){
        core.console_log(msg);
        core.server_log(msg);
    }

    core.error = function(msg, ex){
        core.console_log(msg, 'error', ex);
        core.server_log(msg, 'error', ex);
    }

    core.urlBase64ToUint8Array = function(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    core.get_cw_subscriber_id = function(){
        return cookie_client.get("cw_subscriber_id");
        // ToDo handle the issue of cookie deletion
    }

    core.track_last_seen = function(){
        if (!config.page_traking){
            core.log("Tracking disabled!");
            return
        }
        var cw_subscriber_id = core.get_cw_subscriber_id()
        if (cw_subscriber_id == null || cw_subscriber_id == ''){
            core.error("Last Seen Tracking exit! Subscriber Id not found!")
            return
        }
        network_client.makePOST(
            config.urls.event_tracking,
            {"subscriber": cw_subscriber_id,
             "category": "last-seen", "value": window.location.href.slice(0,199)},
             config.sdk_auth_key
        ).then(function(res){
            core.log("Last Seen Event Submitted ");
        }).catch(function(err){
            core.error("Last Seen Error: " + err)
        })
    }

    core.track_page = function(){
        if (!config.page_traking){
            core.log("Tracking disabled!");
            return
        }
        var cw_subscriber_id = core.get_cw_subscriber_id()
        if (cw_subscriber_id == null || cw_subscriber_id == ''){
            core.error("Page Tracking exit! Subscriber Id not found!")
            return
        }
        network_client.makePOST(
            config.urls.event_tracking,
            {"subscriber": cw_subscriber_id,
             "category": "page-viewed-url", "value": window.location.href.slice(0,199)},
             config.sdk_auth_key
        ).then(function(res){
            core.log("Page Viewing Url Event Submitted ");
        }).catch(function(err){
            core.error("Event Submission Error: " + err);
        })
    }

    core.returning_subscriber = function(){
        core.log("Returning Subscriber");
        core.track_last_seen();
        core.track_page();
    }

    core.new_subscriber = function(registration=null){
        core.log("You are Subscribed");
        if (registration){
            core.send_welcome_notification(registration);
        }
        core.track_page();
        core.track_last_seen();
    }

    core.permissionDenied = function(e){
        core.log("Permission Denied: " + e);
        cookie_client.del("cw_subscriber_id");
        cookie_client.set("cw_permission_denied", "yes", 7);
    }

    core.permissionAllowed = function(registration, subscription){
        core.log("Permission Allowed")
        network_client.makePOST(
            config.urls.add_subscription,
            {"subscription_info": JSON.stringify(subscription)},
            config.sdk_auth_key
        ).then(function (res){
            cookie_client.set("cw_subscriber_id", res.id, 365*3);
            cookie_client.del("cw_permission_denied");
            core.new_subscriber(registration);
        }).catch(function (err){
            core.error(err);
        })
    }

    core.handle_cw_subscriber_id_cookie_missing = function(){

    }

    core.show_gdpr_prompt = function(allow_func, deny_func){
        // ToDo decide which prompt will have to shown in sub categories
        // ToDo Need to take care of this later
    }

    core.show_mobile_prompt = function(allow_func, deny_func){
        core.log("Showing Mobile Prompt !")
        var body = document.getElementsByTagName('body')[0];
        if (!config.mobile_prompt.enabled){
            allow_func();
        } else{
            var mobile_prompt_container = document.createElement('div');
            mobile_prompt_container.id = 'chirpyweb-container';
            mobile_prompt_container.classList.add('chirpyweb-warpper');
            mobile_prompt_container.style = 'height:95vh';
            prompt_client.mobile(
                mobile_prompt_container,
                allow_func, deny_func,
                config.mobile_prompt.position
            );
            allow_btns = document.getElementsByClassName('chirpyweb-allow-btn');
            for (let i = 0; i < allow_btns.length; i++) {
              btn = allow_btns[i];
              btn.onclick = core.prompt_allowed;
            }
            deny_btns = document.getElementsByClassName('chirpyweb-deny-btn');
            for (let i = 0; i < deny_btns.length; i++) {
              btn = deny_btns[i];
              btn.onclick = core.prompt_denied;
            }
            body.appendChild(mobile_prompt_container);
        }

    }

    core.show_desktop_prompt = function(allow_func, deny_func){
        core.log("Showing Desktop Prompt !")
        if (!config.desktop_prompt.enabled){
            allow_func();
        }else {
            var body = document.getElementsByTagName('body')[0];
            var desktop_prompt_container = document.createElement('div');
            desktop_prompt_container.id = 'chirpyweb-container';
            desktop_prompt_container.classList.add('chirpyweb-warpper');
            prompt_client.desktop(
                desktop_prompt_container,
                allow_func, deny_func,
                config.desktop_prompt.position
            )
            body.appendChild(desktop_prompt_container);
            allow_btns = document.getElementsByClassName('chirpyweb-allow-btn');
            for (let i = 0; i < allow_btns.length; i++) {
                btn = allow_btns[i];
                btn.onclick = core.prompt_allowed;
            }
            deny_btns = document.getElementsByClassName('chirpyweb-deny-btn');
            for (let i = 0; i < deny_btns.length; i++) {
                btn = deny_btns[i];
                btn.onclick = core.prompt_denied;
            }
        }
    }

    core.prompt_allowed = function(){
        core.log("Custom Prompt Allowed");
        var element = document.getElementById("chirpyweb-container");
        element.parentNode.removeChild(element);
        core.initialise();
    }

    core.prompt_denied = function(){
        core.log("Custom Prompt Denied");
        var element = document.getElementById("chirpyweb-container");
        element.parentNode.removeChild(element);
        cookie_client.set("cw_prompt_denied", "yes", 7);
    }

    core.show_prompt = function(){
        already_subscribed = core.get_cw_subscriber_id();
        if (already_subscribed){
            core.log("Subscriber Id Exists!");
            core.initialise();
            return;
        }
        core.log("Showing Prompt !")
        prompt_client.add_prompt_sdk_css();
        allow_func = core.prompt_allowed;
        deny_func = core.prompt_denied;
        if(core.isMobile){
            core.show_mobile_prompt(allow_func, deny_func);
        }else if(core.isTablet){
            core.show_desktop_prompt(allow_func, deny_func);
        }else if(core.isDesktop){
            core.show_desktop_prompt(allow_func, deny_func);
        }else{
            core.show_desktop_prompt(allow_func, deny_func)
        }
        // ToDo Need to take care of GDPR later
    }

    core.initialise = function(){
        if (core.service_worker_supported){
            if(core.push_manager_supported){
                core.registerServiceWorker().then(function (registration){
                    core.log("Going to ask permission")
                    core.askPermission().then(function (results){
                        var cw_subscriber_id = core.get_cw_subscriber_id()
                        if (cw_subscriber_id != null && cw_subscriber_id != ''){
                            core.returning_subscriber();
                            return
                        }
                        core.log("Getting subscription")
                        core.subscribeUserToPush().then(function (subscription){
                            core.permissionAllowed(registration, subscription);
                        })
                    }).catch(function (e){
                        core.permissionDenied(e);
                    })
                }).catch(function (e){
                    core.error("Service Worker Error: " + e);
                })
            }else{
                core.log("Push Manager Not Supported");
            }
        }else{
            core.log("Service Worker not supported")
        }
    }

    core.send_welcome_notification = function(registration){
        fetch(
            config.urls.base_url +
            '/stats/service-worker/?action=receive_push' +
            '&version=sdk.min.js' +
            '&push_id=' + config.welcome_push.id +
            '&account_id=' + config.account_id +
            '&type=welcome' +
            '&subscriber_id=' + core.get_cw_subscriber_id()
        ).then(function(response){
            if (response.status != 200){
                core.error("Welcome push receive registration error!");
            }
        })
        var data = {
            actions: {
                action: "OK",
                title: "OK"
            },
            actions_links: {
                OK: config.welcome_push.url
            },
            id: config.welcome_push.id,
            subscriber_id: core.get_cw_subscriber_id(),
            account_id: config.account_id,
            type: 'welcome',
            link: config.welcome_push.url
        }
        var options = {
            body: config.welcome_push.message,
            icon: config.welcome_push.icon_url,
            requireInteraction: true,
            data: JSON.stringify(data)
        };
        if (config.welcome_push.image) {
            options.image = config.welcome_push.image;
        }
        return registration.showNotification(config.welcome_push.title, options);
    }

    core.registerServiceWorker = function() {
        return navigator.serviceWorker.register(config.service_worker_path).then(function(registration) {
            core.log('Service worker successfully registered.');
            return registration;
        }).catch(function(err) {
            core.error('Unable to register service worker.', err);
        });
    }

    core.askPermission = function() {
        return new Promise(function(resolve, reject) {
            const permissionResult = Notification.requestPermission(function(result) {
                resolve(result);
            });
            if (permissionResult) {
                permissionResult.then(resolve, reject);
            }
        }).then(function(permissionResult) {
            if (permissionResult !== 'granted') {
              throw new Error('We weren\'t granted permission.');
            }
        });
    }

    core.subscribeUserToPush = function() {
        return navigator.serviceWorker.register(config.service_worker_path).then(function(registration) {
            const subscribeOptions = {
              userVisibleOnly: true,
              applicationServerKey: core.urlBase64ToUint8Array(config.vapid_public_key)
            };
            return registration.pushManager.subscribe(subscribeOptions);
        }).then(function(pushSubscription) {
            core.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
            return pushSubscription;
        });
    }

    core.show_floating_labels = function(){
        var body = document.getElementsByTagName('body')[0];
        shopify_client.add_shopify_sdk_css();
        shopify_client.show_price_drop(body);
        shopify_client.show_back_in_stock(body);
    }

    core.push_manager_supported = ('PushManager' in window);
    core.service_worker_supported = ('serviceWorker' in navigator);
    core.isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent ||
        navigator.vendor || window.opera).substr(0, 4));
    core.isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent);
    core.isDesktop = !core.isMobile && !core.isTablet;
    core.isGdpr = false //ToDo we can take care of this later
};

