import { useState } from "react";
import Modal from "../Modals/Modal";
import "./buttoms.css";

export default function DeleteBtn({ loadrecomendations, recomendationId }) {
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleDelete = async () => {
    setOpenModal(true);
    setOpenAlert(true);
  };

  return (
    <>
      <button className="icon-btn right-btn hover-btn" onClick={handleDelete}>
        ×
      </button>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          loadrecomendations={loadrecomendations}
          openAlert={openAlert}
          recomendationId={recomendationId}
        />
      )}
    </>
  );
}
