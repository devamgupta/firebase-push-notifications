const { initializeApp } = require('firebase-admin/app');
const { getMessaging } = require('firebase-admin/messaging')
initializeApp();


// -----------------IMPORTANT------------------------
// Set the environment variable GOOGLE_APPLICATION_CREDENTIALS
// to the file path of the JSON file that contains your service account key. 

// Run this command in the terminal
// export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"

// This variable only applies to the current shell session,
// so if open a new session, set the variable again.

// --------------------------------------------------


// This registration token comes from the client FCM SDKs.
const registrationToken = REGISTRATION_TOKEN;
// Send a message to the device corresponding to the provided
// registration token.

const sendMessage = (message) => {
    message.token = registrationToken;
    getMessaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });
}

module.exports = { sendMessage }