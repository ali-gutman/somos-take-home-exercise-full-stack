import "./modal.css";
import Form from "../../Recomendations/Form";
import { useState } from "react";
import AlertDelete from "../../Recomendations/AlertDelete";

const Modal = (props) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="darkBG" onClick={() => props.setOpenModal(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{title}</h5>
          </div>
          <button
            className="icon-btn right-btn hover-btn"
            onClick={() => props.setOpenModal(false)}
          >
            ×
          </button>

          <div className="modalContent">
            {props.openForm ? (
              <Form
                setOpenModal={props.setOpenModal}
                loadrecomendations={props.loadrecomendations}
                setEditRecomendation={props.setEditRecomendation}
                setTitle={setTitle}
              />
            ) : props.openAlert ? (
              <AlertDelete
                setOpenModal={props.setOpenModal}
                loadrecomendations={props.loadrecomendations}
                setTitle={setTitle}
                recomendationId={props.recomendationId}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
