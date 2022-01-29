import "./App.css";
import React from "react";
import ReminderList from "./ReminderList";
import RemindContextProvider from "./contexts/ReminderListContext";
import SocketProvider from "./contexts/SocketProvider";

function App() {
  return (
    <div>
      <h1>MFE2</h1>
      <div>
        <React.Suspense fallback="Loading Button">
        <SocketProvider>
          <RemindContextProvider>
            <ReminderList />
          </RemindContextProvider>
          </SocketProvider>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
