import React from 'react'
import './recomendations.css'

export default function Recomendations(props) {
    return (
        <div className='recomendations-container'>
            <div className='recomendations-container-title'> 
                <img className='img' src={props.image} alt="" />
                <p className='title'>{props.title}</p>
            </div> 
            <div className="section">
                <p className="title">Más información</p>
                <p className='instructions'>{props.instructions}.</p>
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
        
            <div className='section'>
                <p className='title'>Estudios</p>
                <div className="studies">
                    <p className="study-title">{props.studies}</p>
                    <a className='study-link' href={props.studyLink}>Ver Estudio</a>
                </div>
            </div> 
        </div>
    )
}
