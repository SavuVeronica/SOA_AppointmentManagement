import React from "react";
import { createContext, useState } from "react";
import { SocketContext } from "./SocketProvider";

export const AppointmentListContext = createContext();

const AppointContextProvider = (props) => {
  const [appointments, setAppointments] = useState([]);
  const [token, setToken] = useState([]);
  const [showAddAppoint, setShowAddAppoint] = useState(false);
  const [showUpdateAppoint, setShowUpdateAppoint] = useState(false);
  const [selectedAppoint, setSelectedAppoint] = useState({});

  const { socket } = React.useContext(SocketContext);

  const fetchData = () => {
    return fetch("http://localhost:4000/appointments")
      .then((data) => data.json())
      .then(
        (data) => {
          setAppointments(data);
        },
        (error) => console.log(error)
      );
  };

  const openDialogAdd = () => {
    setShowAddAppoint(true);
  };
  const closeDialogAdd = () => {
    setShowAddAppoint(false);
  };

  const openDialogUpdateAppoint = (item) => {
    setSelectedAppoint(item);
    setShowUpdateAppoint(true);
  };

  const closeDialogUpdateAppoint = () => {
    setShowUpdateAppoint(false);
  };

  const addAppointment = (description, date, hour) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        date: date,
        hour: hour,
      }),
    };
    fetch("http://localhost:4000/appointments", requestOptions).then(() => {
      fetchData();
      socket.emit("msgToServer", {
        value:
          "Appointment " + description + " is created! A reminder was added.",
      });
    });
  };

  const updateAppointment = (id, description, date, hour) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        date: date,
        hour: hour,
      }),
    };
    fetch("http://localhost:4000/appointments/" + id, requestOptions).then(
      () => {
        fetchData();
        socket.emit("msgToServer", {
          value:
            "Appointment " + description + " and its reminder are updated!",
        });
      }
    );
  };

  const deleteAppointment = (id, description) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    fetch("http://localhost:4000/appointments/" + id, requestOptions).then(
      () => {
        fetchData();
        socket.emit("msgToServer", {
          value: "Appointment " + description + " is deleted!",
        });
      }
    );
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
    <AppointmentListContext.Provider
      value={{
        appointments,
        token,
        showAddAppoint,
        showUpdateAppoint,
        selectedAppoint,
        setSelectedAppoint,
        fetchData,
        addAppointment,
        updateAppointment,
        deleteAppointment,
        getToken,
        openDialogAdd,
        closeDialogAdd,
        openDialogUpdateAppoint,
        closeDialogUpdateAppoint,
      }}
    >
      {props.children}
    </AppointmentListContext.Provider>
  );
};

export default AppointContextProvider;
