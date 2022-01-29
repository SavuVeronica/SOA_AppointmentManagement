import React from "react";
import AppointmentList from "./AppointmentList";
import AppointContextProvider from "./contexts/AppointmentListContext";
import SocketProvider from "./contexts/SocketProvider";

function App() {
  return (
    <div>
      <h1>MFE1</h1>
      <SocketProvider>
      <AppointContextProvider>
        <AppointmentList />
      </AppointContextProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
