import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AppointmentListContext } from "../contexts/AppointmentListContext";

const UpdateAppointForm = () => {
  const {
    selectedAppoint,
    updateAppointment,
    closeDialogUpdateAppoint,
    setSelectedAppoint
  } = React.useContext(AppointmentListContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateAppointment(
      selectedAppoint._id,
      selectedAppoint.title,
      selectedAppoint.date,
      selectedAppoint.hour
    );
    closeDialogUpdateAppoint();
  };

  const updateDescription = (newDescr) => {
    setSelectedAppoint({
      _id: selectedAppoint._id,
      title: newDescr,
      date: selectedAppoint.date,
      hour: selectedAppoint.hour,
    });
  };

  const updateDate = (newDate) => {
    setSelectedAppoint({
      _id: selectedAppoint._id,
      title: selectedAppoint.title,
      date: newDate,
      hour: selectedAppoint.hour,
    });
  };

  const updateHour = (newHour) => {
    setSelectedAppoint({
      _id: selectedAppoint._id,
      title: selectedAppoint.title,
      date: selectedAppoint.date,
      hour: newHour,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Description"
          required
          value={selectedAppoint.description}
          onChange={(e) => updateDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Date (DD.MM.YYYY)"
          required
          value={selectedAppoint.date}
          onChange={(e) => updateDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Hour (HH:MM)"
          required
          value={selectedAppoint.hour}
          onChange={(e) => updateHour(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Update appointment
      </Button>
    </Form>
  );
};

export default UpdateAppointForm;
