import React from "react";
import { createContext, useState } from "react";
import { SocketContext } from "./SocketProvider";

export const ReminderListContext = createContext();

const RemindContextProvider = (props) => {
  const [reminders, setReminders] = useState([]);
  const [token, setToken] = useState([]);
  const [showAddRemind, setShowAddRemind] = useState(false);
  const [showUpdateRemind, setShowUpdateRemind] = useState(false);
  const [selectedRemind, setSelectedRemind] = useState({});

  const { socket } = React.useContext(SocketContext);

  const fetchData = () => {
    return fetch("http://localhost:4001/reminders")
      .then((data) => data.json())
      .then(
        (data) => {
          setReminders(data);
        },
        (error) => console.log(error)
      );
  };

  const openDialogAddRemind = () => {
    setShowAddRemind(true);
  };

  const closeDialogAddRemind = () => {
    setShowAddRemind(false);
  };

  const openDialogUpdateRemind = (item) => {
    setSelectedRemind(item);
    setShowUpdateRemind(true);
  };

  const closeDialogUpdateRemind = () => {
    setShowUpdateRemind(false);
  };

  const addReminder = (title, date, hour) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        date: date,
        hour: hour,
      }),
    };
    fetch("http://localhost:4001/reminders", requestOptions).then(() => {
      fetchData();
      socket.emit("msgToServer", {
        value: "Reminder " + title + " is created!",
      });
    });
  };

  const updateReminder = (id, title, date, hour) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        date: date,
        hour: hour,
      }),
    };
    fetch("http://localhost:4001/reminders/" + id, requestOptions).then(() => {
      fetchData();
      socket.emit("msgToServer", {
        value: "Reminder " + title + " is updated!",
      });
    });
  };

  const deleteReminder = (id, title) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    fetch("http://localhost:4001/reminders/" + id, requestOptions).then(() => {
      fetchData();
      socket.emit("msgToServer", {
        value: "Reminder " + title + " is deleted!",
      });
    });
  };

  const getToken = () => {
    try {
      const token = localStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReminderListContext.Provider
      value={{
        reminders,
        token,
        showAddRemind,
        showUpdateRemind,
        selectedRemind,
        setSelectedRemind,
        fetchData,
        addReminder,
        updateReminder,
        deleteReminder,
        getToken,
        openDialogAddRemind,
        closeDialogAddRemind,
        openDialogUpdateRemind,
        closeDialogUpdateRemind,
      }}
    >
      {props.children}
    </ReminderListContext.Provider>
  );
};

export default RemindContextProvider;
