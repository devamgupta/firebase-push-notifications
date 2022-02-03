import React, {useState, useEffect} from 'react'
// import toast, { Toaster } from 'react-hot-toast';
import { onMessageListener, requestForToken } from './firebase';

import './Notification.css';

const Notification = () => {
    const initialNotification = {title: '', body: ''};
    const [notification, setNotification] = useState(initialNotification);
    const [showNotification, setShowNotification] = useState(false);

    // const notify = () =>  toast(<ToastDisplay/>);
    // function ToastDisplay() {
    //     return (
    //         <div className='toast'>
    //             <p><b>{notification?.title}</b></p>
    //             <p>{notification?.body}</p>
    //         </div>
    //     );
    // };

    // useEffect(() => {
    //     if (notification?.title || notification?.body) {
    //         notify()
    //     }
    // }, [notification])

    useEffect(() => {
        if (notification?.title || notification?.body) {
            setShowNotification(true);
            setTimeout(
                () => {
                    setNotification(initialNotification);
                    setShowNotification(false);
                },
                3000
            )
        }
    }, [notification])

    useEffect(() => {
        requestForToken();
    }, [])

    onMessageListener()
    .then((payload) => {

        console.log("onMessageListener payload -> ", payload)
        setNotification({
            title: payload?.notification?.title,
            body: payload?.notification?.body
        })
    })
    .catch((err) => console.log('failed: ', err));

  return (
        <>
            {/* <Toaster /> */}
            {
                showNotification &&
                <div className='notification'>
                    <h3>You have a notification..</h3>
                    <p><b>Title: <span className='content'>{notification?.title}</span></b></p>
                    <p><b>Body:</b> <span className='content'>{notification?.body}</span></p>
                </div>

            }
        </>
        
  )
}

export default Notification
