import './App.css';
import React from 'react';
import Notification from './Notification';
import ServerComponent from './ServerComponent';


function App() {
  return (
    <div className="App">
      <h2>Firebase push notifications</h2>
      <Notification />
      <ServerComponent />
    </div>
  );
}

export default App;
