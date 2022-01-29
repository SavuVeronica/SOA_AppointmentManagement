import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AppointmentListContext } from "../contexts/AppointmentListContext";

const AddForm = (props) => {
  const { addAppointment, closeDialogAdd } = React.useContext(
    AppointmentListContext
  );

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addAppointment(description, date, hour);
    closeDialogAdd();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
        Add appointment
      </Button>
    </Form>
  );
};

export default AddForm;
