import { useState } from "react";
import Modal from "../Modals/Modal";
import "./buttoms.css";

const AddButtom = ({ loadrecomendations }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <button
        className="floating-btn hover-btn btn action-btn"
        onClick={() => {
          setOpenModal(true);
          setOpenForm(true);
        }}
      >
        +
      </button>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          loadrecomendations={loadrecomendations}
          openForm={openForm}
        />
      )}
    </>
  );
};
export default AddButtom;
