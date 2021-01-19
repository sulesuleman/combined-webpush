/**
 * Chirpyweb worker 4.0
 */

var cw_sw_stats_url = '{{API_SERVER}}/stats/service-worker/';

self.addEventListener('install', function (event) {
    console.log('[ChirpyWeb SW] ServiceWorker installed');
    //Automatically take over the previous worker.
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
    console.log('[ChirpyWeb SW] ServiceWorker running');
});

self.addEventListener('push', function (event) {
    console.log('[Chirpyweb SW] push received');

    var payload = '';
    try {
        payload = event.data.json().data || '';
    }
    catch (e) {
        console.log('[Chirpyweb SW] payload is empty');
    }

    if (payload) {
        var force_update = false;
        if (payload['service_action']) {
            if (payload['service_action'] == 'force_update') {
                force_update = true;
            }
        }

        if (payload['actions']) {
            payload['actions'] = JSON.parse(payload['actions']);
        }
        if (payload['actions_links']) {
            payload['actions_links'] = JSON.parse(payload['actions_links']);
        }

        var push = {
            id: payload['push_id'],
            link: payload['link'],
            image: payload['image'],
            actions: payload['actions'],
            actions_links: payload['actions_links'],
            account_id: payload['account_id'],
            type: payload['type'],
            subscriber_id: payload['subscriber_id']
        };

        event.waitUntil(
            fetch(
                cw_sw_stats_url +
                '?action=receive_push' +
                '&version=4' +
                '&push_id=' + payload['push_id'] +
                '&account_id=' + payload['account_id'] +
                '&type=' + payload['type'] +
                '&subscriber_id=' + payload['subscriber_id']
            ).then(
                // fulfilled
                function (response) {
                    if (response.status !== 200) {
                        console.log('[Chirpyweb SW] receive push error: ' + response.status);
                        throw new Error();
                    }

                    return response.json().then(function (data) {
                        return showNotification(
                            payload['title'],
                            payload['description'],
                            payload['icon'], push
                          );
                    });
                },
                // rejected
                function () {
                    checkUpdate(force_update);
                }
            ).then(function () {
                checkUpdate(force_update);
            }).catch(function () {
                checkUpdate(force_update);
            })
        );
    }
})
function checkUpdate(force_update) {

    if (force_update && self.registration) {
        self.registration.update();
    }
}

function showNotification(title, message, icon, push) {
    var options = {
        body: message,
        icon: icon,
        requireInteraction: true,
        data: JSON.stringify(push)
    };
    if (push.image) {
        options.image = push.image;
    }
    if (push.actions) {
        options.actions = push.actions;
    }

    return self.registration.showNotification(title, options);
}

self.addEventListener('notificationclick', function (event) {
    console.log('[Chirpyweb SW] push opened');
    var push = JSON.parse(event.notification.data);

    if (push.actions_links && event.action && push.actions_links[event.action]) {
        push.link = push.actions_links[event.action];
    }

    fetch(
        cw_sw_stats_url +
        '?action=open_push' +
        '&version=4' +
        '&push_id=' + push.id +
        '&account_id=' + push.account_id +
        '&type=' + push.type +
        '&subscriber_id=' + push.subscriber_id
    ).then(
        function (response) {
            if (response.status !== 200) {
                console.log('[Chirpyweb SW] open push error: ' + response.status);
                throw new Error();
            }
        }
    );

    // Android doest close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();
    event.waitUntil(
        clients.openWindow(push.link)
    );
});

self.addEventListener('notificationclose', function (event) {
    console.log('[Chirpyweb SW] push closed');
    var push = JSON.parse(event.notification.data);

    fetch(
        cw_sw_stats_url +
        '?action=close_push' +
        '&version=4' +
        '&push_id=' + push.id +
        '&account_id=' + push.account_id +
        '&type=' + push.type +
        '&subscriber_id=' + push.subscriber_id
    ).then(
        function (response) {
            if (response.status !== 200) {
                console.log('[Chirpyweb SW] close push error: ' + response.status);
                throw new Error();
            }
        }
    );
});