import Recomendations from '../Recomendations';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
      <Recomendations
          image='https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FUIdzkZyhTela5Kd1FZWC%2Fpub%2FC5MskRsbfDc8yvIewd0u.jpg'
          title='Evita cenar Pesado'
          instructions='Hacer cenas ligeras puede ayudar a que concilies el sueño más rápido, sentirte más ligero por la mañana y mejorar tu digestión.'
          why='Cenar pesado puede interferir con un descanso reparador y puede ocasionar malestares gastrointestinales durante la noche.'
          tags='Sueño, Digestion'
          counterindication='No se recomienda a personas con condiciones previas de bajo peso y/o consumo bajo de calorías.'
          studies='Efectos del horario de la cena en la distribución de las etapas del sueño y el espectro de potencia del EEG en voluntarios sanos.'
          studyLink='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8131073/'
        />
      <Recomendations
          image="https://res.cloudinary.com/glide/image/fetch/f_auto,w_525,h_525,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FUIdzkZyhTela5Kd1FZWC%2Fpub%2FsFqXMGcEjcj03fch7Yg6.jpg"
          title='Toma baños de sol'
          instructions='Es Importante tomar 15 minutos de sol al día, con la luz directa del sol. Descubre brazos y piernas, protege tu cara con bloqueador.'
          why='Exponerte al sol es necesario para mantener niveles adecuados de vitamina D en sangre, esto te ayudara a reducir inflamación, mejorar la absorción de calcio, mejora y fortalece la función del sistema inmune, músculos y de la glucosa (azúcar en sangre). 

          También los niveles adecuados de vitamina D son indispensables para mantén una buena salud mental y estado de ánimo. 

          Además el tomar baños de sol por las mañanas ayudar a activar tu ciclo circadiano permitiendo que en la noche puedas tener una buena calidad de sueño. '
          tags='Sueño, Mente, Animo, Inmunidad, Post-Covid'
          counterindication='Contraindicación: no hacerlo si hay alguna condición de la piel. '
          studies='La exposición solar insuficiente se ha convertido en un verdadero problema de salud pública.'
          studyLink='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7400257/'
        />
      </div>
    </>
  );
}

export default App;
