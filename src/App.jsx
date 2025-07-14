import  notif  from './notifications';
import { useState } from 'react';
import './App.css';


const NotificationsApp = ({ notifications, setNotification, children }) => {
  return (
    <div className="notif-container">
      {children}
      <button className="remove-all-btn"
      onClick={() => {
        const updatedAllNotifs =  [];
        setNotification(updatedAllNotifs);
      }}
      >Remove All</button>
      <ul className="notifs">
        {notifications.map((notification) => (
          <li className="notif" key={notification.id}>
            <p className="notif-name">{notification.name}</p>
            <p className="notif-message">{notification.message}</p>
            <button
              className="remove-btn"
              onClick={() => {
                const updatedNotifs = notifications.filter(
                  (n) => n.id !== notification.id
                );
                setNotification(updatedNotifs);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}




function App() {
  const [notifications, setNotification] = useState(notif);

  const numberOfNotif = notifications.filter(notification => notification.id).length;

return (
  <>
  <NotificationsApp notifications={notifications} setNotification={setNotification}>
  <h1>Notification</h1>
  <h3>You have: {numberOfNotif} Notifications</h3>
  
  </NotificationsApp>
  </>
)
}

export default App
