import { useEffect } from "react";
import { deleteRecomendation } from "./service";

export default function AlertDelete(props) {
  const deleteItem = async () => {
    await deleteRecomendation(props.recomendationId);
    props.loadrecomendations();
    props.setOpenModal(false);
  };

  useEffect(() => {
    props.setTitle("Eliminar Recomendacion");
  }, [props]);

  return (
    <div>
        <button
            className="btn secondary-btn hover-btn"
            onClick={() => props.setOpenModal(false)}
          >
            Salir
          </button>
        <button className="btn action-btn hover-btn" onClick={props.recomendationId && deleteItem}>
        Continuar y Eliminar
        </button>
    </div>
  );
}
