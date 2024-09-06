import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import { Form } from "./components/Form/Form";
import { MuiForm } from "./components/MuiForm/MuiForm";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>open modal </button>
      {showModal ? <Modal onModalClose={closeModal} /> : null}
      <Form />
      <MuiForm />
    </div>
  );
}

export default App;
