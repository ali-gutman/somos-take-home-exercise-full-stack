import { useEffect } from "react";
import Input from "../IUE/Form/Input";
import Textarea from "../IUE/Form/Textarea";
import * as recomendationService from "./service";

const Form = (props) => {
  async function handledSumit(e) {
    e.preventDefault();

    const {
      title,
      instructions,
      why,
      tags,
      counterindication,
      studies,
      studyLink,
    } = e.target.elements;

    const newR = {
      title: title.value,
      instructions: instructions.value,
      why: why.value,
      tags: tags.value,
      counterindication: counterindication.value,
      studies: studies.value,
      studyLink: studyLink.value,
    };

    !props.setEditRecomendation
      ? await recomendationService.createRecomendation(newR)
      : await recomendationService.updatedRecomendation(
          props.setEditRecomendation._id,
          newR
        );
    props.loadrecomendations();
    props.setOpenModal(false);
  }

  useEffect(() => {
    props.setTitle("Recomendaciones");
  }, [props]);

  return (
    <form onSubmit={handledSumit} className="add-form">
      <Input
        label={"Recomendacion:"}
        name={"title"}
        placeholder={"Su Recomendación"}
        value={
          props.setEditRecomendation ? props.setEditRecomendation.title : ""
        }
      />
      <Textarea
        label={"Más información:"}
        name={"instructions"}
        placeholder={"Su Texto"}
        value={
          props.setEditRecomendation
            ? props.setEditRecomendation.instructions
            : ""
        }
      />
      <Textarea
        label={"Por qué ayuda:"}
        name={"why"}
        placeholder={"Su Texto"}
        value={props.setEditRecomendation ? props.setEditRecomendation.why : ""}
      />
      <Input
        label={"Te ayuda con:"}
        name={"tags"}
        placeholder={"Su Texto"}
        value={
          props.setEditRecomendation ? props.setEditRecomendation.tags : ""
        }
      />
      <Textarea
        label={"Contraindicaciones:"}
        name={"counterindication"}
        placeholder={"Su Texto"}
        value={
          props.setEditRecomendation
            ? props.setEditRecomendation.counterindication
            : ""
        }
      />
      <Textarea
        label={"Estudios:"}
        name={"studies"}
        placeholder={"Su Texto"}
        value={
          props.setEditRecomendation ? props.setEditRecomendation.studies : ""
        }
      />
      <Input
        label={"Link del Estudio:"}
        name={"studyLink"}
        placeholder={"Su Link"}
        value={
          props.setEditRecomendation ? props.setEditRecomendation.studyLink : ""
        }
      />

      <div className="modalActions">
        <div className="actionsContainer">
          <button
            className="btn secondary-btn hover-btn"
            onClick={() => props.setOpenModal(false)}
          >
            Salir
          </button>
          <button className="btn action-btn hover-btn">
            {props.setEditRecomendation
              ? "Editar recomendación"
              : "Agregar Recomendación"}
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
