import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ReminderListContext } from "../contexts/ReminderListContext";

const AddReminderForm = () => {
  const { addReminder, closeDialogAddRemind } =
    React.useContext(ReminderListContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addReminder(title, date, hour);
    closeDialogAddRemind();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Date (DD.MM.YYYY)"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Hour (HH:MM)"
          required
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Add reminder
      </Button>
    </Form>
  );
};

export default AddReminderForm;
