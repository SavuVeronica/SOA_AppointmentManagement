import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Card, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AddReminderForm from "./components/AddReminderForm";
import UpdateReminderForm from "./components/UpdateReminderForm";
import { ReminderListContext } from "./contexts/ReminderListContext";
import "./ReminderList.css";

const ReminderList = () => {
  const {
    reminders,
    showAddRemind,
    showUpdateRemind,
    fetchData,
    deleteReminder,
    getToken,
    openDialogAddRemind,
    closeDialogAddRemind,
    openDialogUpdateRemind,
    closeDialogUpdateRemind,
  } = React.useContext(ReminderListContext);

  useEffect(() => {
    getToken();
    fetchData();
  });

  const renderCard = (card, index) => {
    return (
      <Card key={card._id} className="box">
        <Card.Img
          className="image"
          variant="top"
          src="https://decaok.org/wp-content/uploads/2018/12/Important-Date.png"
        />
        <Card.Body className="content">
          <Card.Title className="title">{card.title}</Card.Title>
          <Card.Text className="text">
            {card.date} - {card.hour}
          </Card.Text>

          <Card.Footer className="footer">
            <Button
              className="button"
              variant="success"
              type="submit"
              onClick={() => {
                openDialogUpdateRemind(card);
              }}
            >
              Update
            </Button>
            <Button
              className="button"
              variant="danger"
              type="submit"
              onClick={() => {
                deleteReminder(card._id, card.title);
              }}
            >
              Delete
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="front2">
      <div>
        <h1>Your Reminders</h1>
        <Button variant="primary" type="submit" onClick={openDialogAddRemind}>
          Add reminder
        </Button>
      </div>
      <div className="grid">{reminders.map(renderCard)}</div>

      <Modal show={showAddRemind} onHide={closeDialogAddRemind}>
        <Modal.Header closeButton>
          <Modal.Title>Add Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddReminderForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialogAddRemind}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateRemind} onHide={closeDialogUpdateRemind}>
        <Modal.Header closeButton>
          <Modal.Title>Update Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateReminderForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialogUpdateRemind}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReminderList;
