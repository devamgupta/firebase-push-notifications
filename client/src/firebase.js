// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: PROJECT_ID.firebaseapp.com,
    projectId: PROJECT_ID,
    storageBucket: PROJECT_ID.appspot.com,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

const VAPID_KEY = VAPID_KEY;
// requesting for token
export const requestForToken = async () => {
    console.log('Retrieved Message : ', messaging);
    return await getToken(messaging, {vapidKey: VAPID_KEY})
    .then(currentToken => {
        if (currentToken) {
            console.log('Current Token : < '+currentToken+' >');
        } else {
            console.log('No token find.');
        }
    })
    .catch(error => {
        console.log('Error retrieving token : ', error);
    })
}


export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
        console.log("onMessage payload -> ", payload)
        resolve(payload);
    });
});

// onMessage(messaging, (payload) => {
//     console.log("onMessage payload -> ", payload)
// })
