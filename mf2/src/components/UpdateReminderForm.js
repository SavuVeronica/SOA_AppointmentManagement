import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ReminderListContext } from "../contexts/ReminderListContext";

const UpdateReminderForm = () => {
  const {
    selectedRemind,
    updateReminder,
    closeDialogUpdateRemind,
    setSelectedRemind,
  } = React.useContext(ReminderListContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateReminder(
      selectedRemind._id,
      selectedRemind.title,
      selectedRemind.date,
      selectedRemind.hour
    );
    closeDialogUpdateRemind();
  };

  const updateTitle = (newTitle) => {
    setSelectedRemind({
      _id: selectedRemind._id,
      title: newTitle,
      date: selectedRemind.date,
      hour: selectedRemind.hour,
    });
  };

  const updateDate = (newDate) => {
    setSelectedRemind({
      _id: selectedRemind._id,
      title: selectedRemind.title,
      date: newDate,
      hour: selectedRemind.hour,
    });
  };

  const updateHour = (newHour) => {
    setSelectedRemind({
      _id: selectedRemind._id,
      title: selectedRemind.title,
      date: selectedRemind.date,
      hour: newHour,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Title"
          required
          value={selectedRemind.title}
          onChange={(e) => updateTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Date (DD.MM.YYYY)"
          required
          value={selectedRemind.date}
          onChange={(e) => updateDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Hour (HH:MM)"
          required
          value={selectedRemind.hour}
          onChange={(e) => updateHour(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Update reminder
      </Button>
    </Form>
  );
};

export default UpdateReminderForm;
