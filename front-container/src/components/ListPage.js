import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SocketContext } from "./SocketProvider";
import addNotification, { Notifications } from "react-push-notification";

const MFE1_AppointmentList = React.lazy(() => import("MFE1/AppointmentList"));
const MFE1_AppointContext = React.lazy(() => import("MFE1/AppointContext"));
const MFE1_AppointSocket = React.lazy(() => import("MFE1/AppointSocket"));

const MFE2_ReminderList = React.lazy(() => import("MFE2/ReminderList"));
const MFE2_ReminderContext = React.lazy(() => import("MFE2/RemindContext"));
const MFE2_ReminderSocket = React.lazy(() => import("MFE2/RemindSocket"));

const ListPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  const { socket } = React.useContext(SocketContext);

  useEffect(() => {
    getAccessTokenSilently().then((bearerToken) => {
      localStorage.setItem("token", bearerToken);
    });

    socket.on("msgToClient", (message) => {
      addNotification({
        title: "Success",
        message: message.value,
        theme: "light",
      });
    });
  }, []);

  return (
    <div>
      <React.Suspense fallback="Loading Button">
        <Notifications />

        <MFE1_AppointSocket>
          <MFE1_AppointContext>
            <MFE1_AppointmentList />
          </MFE1_AppointContext>
        </MFE1_AppointSocket>

        <MFE2_ReminderSocket>
          <MFE2_ReminderContext>
            <MFE2_ReminderList />
          </MFE2_ReminderContext>
        </MFE2_ReminderSocket>
      </React.Suspense>
    </div>
  );
};

export default ListPage;
