// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: PROJECT_ID.firebaseapp.com,
    databaseURL: https://PROJECT_ID.firebaseio.com,
    projectId: PROJECT_ID,
    storageBucket: PROJECT_ID.appspot.com,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
});

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message -> ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
