import React, { useState } from "react";
import Modal from "./components/Modal/modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <Modal.Header title="TYTUL" toggle={toggleModal} />
        <Modal.Content>
          <p>Kontent </p>
        </Modal.Content>
        <Modal.Footer callToActionLabel="Confirm" toggle={toggleModal} />
      </Modal>
    </div>
  );
};

export default App;