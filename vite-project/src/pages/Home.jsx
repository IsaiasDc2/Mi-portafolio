import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <div className="home-contenido">

        <span className="saludo">
          👋 Hola, soy
        </span>


        <h1>
          Isaias Duran
        </h1>


        <h2>
          Desarrollador Full Stack Junior
        </h2>


        <p>
          Soy Técnico en Informática Profesional y Personal, actualmente
          estudiante de Análisis de Sistemas y Desarrollo de Software.

          Desarrollo aplicaciones web modernas utilizando React, JavaScript,
          HTML, CSS y otras tecnologías, enfocándome en crear soluciones
          eficientes, funcionales y con una buena experiencia de usuario.
        </p>


        <div className="tecnologias">

          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Python</span>

        </div>



        <div className="botones">

          <Link to="/sobre-mi" className="btn">
            Conocer perfil
          </Link>


          <Link to="/Repo" className="btn btn-secundario">
            Ver proyectos
          </Link>


          <Link to="/contacto" className="btn btn-secundario">
            Contactarme
          </Link>

        </div>


      </div>

    </section>
  );
}

export default Home;