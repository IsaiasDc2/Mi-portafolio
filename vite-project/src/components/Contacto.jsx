import React, { useState } from "react";
import "./Contacto.css";

import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";


function Contacto() {

  const [enviado, setEnviado] = useState(false);


  function handleSubmit(e) {

    e.preventDefault();

    setEnviado(true);

    e.target.reset();

  }


  return (

    <section className="contacto">


      <div className="contacto-container">


        <div className="contacto-info">

          <span className="tag">
            CONTACTO
          </span>


          <h1>
            Construyamos algo
            <span> juntos</span>
          </h1>


          <p>
            Estoy disponible para proyectos, colaboraciones o nuevas
            oportunidades laborales.
          </p>


          <div className="datos-contacto">

            <div>
              <FaMapMarkerAlt />
              <span>
                Ubicación
                <small>Argentina</small>
              </span>
            </div>


            <div>
              <FaGithub />
              <span>
                GitHub
                <small>github.com/IsaiasDc2</small>
              </span>
            </div>


            <div>
                <FaLinkedin />

            <span>
                LinkedIn
            <small>
            <a
                href="https://www.linkedin.com/in/isaias-duran-671347421/"
                target="_blank"
                rel="noopener noreferrer"
            >
            linkedin.com/in/isaias-duran-671347421
            </a>
            </small>
            </span>

        </div>

          </div>

        </div>



        <form 
          className="formulario"
          onSubmit={handleSubmit}
        >

          <h2>
            Envíame un mensaje
          </h2>


          <div className="grupo">

            <input
              type="text"
              placeholder="Nombre completo"
              required
              minLength="3"
            />

          </div>



          <div className="grupo">

            <input
              type="email"
              placeholder="Correo electrónico"
              required
            />

          </div>



          <div className="grupo">

            <input
              type="text"
              placeholder="Asunto"
              required
              minLength="5"
            />

          </div>



          <div className="grupo">

            <textarea
              placeholder="Escribe tu mensaje..."
              rows="5"
              required
              minLength="10"
            ></textarea>

          </div>



          <button type="submit">
            Enviar mensaje →
          </button>



          {
            enviado && (

              <p className="mensaje-exito">
                ✅ Mensaje enviado correctamente. Me pondré en contacto contigo pronto.
              </p>

            )
          }



        </form>


      </div>


    </section>

  );
}


export default Contacto;