import { useState } from "react";
import { getRecomendation } from "../../Recomendations/service";
import Modal from "../Modals/Modal";
import "./buttoms.css";

export default function EditBtn({ loadrecomendations, recomendationId }) {
  const [openModal, setOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [editRecomendation, setEditRecomendation] = useState({});

  const handleEdit = async () => {
    const res = await getRecomendation(recomendationId);
    const {
      counterindication,
      instructions,
      studies,
      studyLink,
      tags,
      title,
      why,
      _id,
    } = res.data;
    setEditRecomendation({
      counterindication,
      instructions,
      studies,
      studyLink,
      tags,
      title,
      why,
      _id,
    });
    setOpenModal(true);
    setOpenForm(true);
  };

  return (
    <>
      <button
        className="icon-btn left-btn hover-btn"
        onClick={() => handleEdit()}
      >
        ✎
      </button>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          setEditRecomendation={editRecomendation}
          loadrecomendations={loadrecomendations}
          openForm={openForm}
        />
      )}
    </>
  );
}
