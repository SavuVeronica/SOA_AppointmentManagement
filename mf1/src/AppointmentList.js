import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Card, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./AppointmentList.css";
import AddForm from "./components/AddForm";
import UpdateAppointForm from "./components/UpdateAppointForm";
import { AppointmentListContext } from "./contexts/AppointmentListContext";

const AppointmentList = () => {
  const {
    appointments,
    showAddAppoint,
    showUpdateAppoint,
    fetchData,
    deleteAppointment,
    getToken,
    openDialogAdd,
    closeDialogAdd,
    openDialogUpdateAppoint,
    closeDialogUpdateApoint,
  } = React.useContext(AppointmentListContext);

  useEffect(() => {
    getToken();
    fetchData();
  });

  const renderCard = (card) => {
    return (
      <Card key={card._id} className="box">
        <Card.Img
          className="image"
          variant="top"
          src="https://icon-library.com/images/mark-your-calendar-icon/mark-your-calendar-icon-2.jpg"
        />
        <Card.Body className="content">
          <Card.Title className="title">{card.description}</Card.Title>
          <Card.Text className="text">
            {card.date} - {card.hour}
          </Card.Text>

          <Card.Footer className="footer">
            <Button
              className="button"
              variant="success"
              type="submit"
              onClick={() => {
                openDialogUpdateAppoint(card);
              }}
            >
              Update
            </Button>

            <Button
              variant="danger"
              type="submit"
              onClick={() => {
                deleteAppointment(card._id, card.description);
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
    <div className="front1">
      <div>
        <h1>Your Appointments</h1>
        <Button variant="primary" type="submit" onClick={openDialogAdd}>
          Add appointment
        </Button>
      </div>
      <div className="grid">{appointments.map(renderCard)}</div>

      <Modal show={showAddAppoint} onHide={closeDialogAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialogAdd}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateAppoint} onHide={closeDialogUpdateApoint}>
        <Modal.Header closeButton>
          <Modal.Title>Update Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateAppointForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialogUpdateApoint}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AppointmentList;
