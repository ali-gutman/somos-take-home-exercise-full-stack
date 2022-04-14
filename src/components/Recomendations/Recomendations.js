import DeleteBtn from "../IUE/Buttoms/DeleteBtn";
import EditBtn from "../IUE/Buttoms/EditBtn";
import "./recomendations.css";

export default function Recomendations(props) {
  return (
    <div className="recomendations-container">
      <div className="recomendations-container-title">
        {props.id ? (
          <EditBtn
            loadrecomendations={props.loadrecomendations}
            recomendationId={props.id}
          />
        ) : (
          ""
        )}
        {props.id ? (
          <DeleteBtn
            loadrecomendations={props.loadrecomendations}
            recomendationId={props.id}
          />
        ) : (
          ""
        )}

        <img
          className="img"
          src={
            props.image
              ? props.image
              : "https://res.cloudinary.com/glide/image/fetch/f_auto,w_525,h_525,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FUIdzkZyhTela5Kd1FZWC%2Fpub%2FsFqXMGcEjcj03fch7Yg6.jpg"
          }
          alt=""
        />
        <p className="title">{props.title}</p>
      </div>
      <div className="section">
        <p className="title">Más información</p>
        <p className="instructions">{props.instructions}.</p>
      </div>

      <div className="section">
        <p className="title">Por qué ayuda</p>
        <p className="why">{props.why}</p>
      </div>

      <div className="section">
        <p className="title">Te ayuda con:</p>
        <p className="tags">{props.tags}</p>
      </div>

      <div className="section">
        <p className="title">Contraindicaciones</p>
        <p className="counterindication">{props.counterindication}</p>
      </div>

      <div className="section">
        <p className="title">Estudios</p>
        <div className="studies">
          <p className="study-title">{props.studies}</p>
          <a className="study-link" href={props.studyLink}>
            Ver Estudio
          </a>
        </div>
      </div>
    </div>
  );
}
