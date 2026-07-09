import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">

      <div className="f-link">

        <Link to="/">
          <FaHome /> Inicio
        </Link>


        <Link to="/sobre-mi">
          <FaUser /> Sobre mí
        </Link>


        <Link to="/repo">
          <FaFolderOpen /> Proyectos
        </Link>


        <Link to="/contacto">
          <FaEnvelope /> Contacto
        </Link>


        <a
          href="https://github.com/IsaiasDc2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>


        <a
          href="https://www.linkedin.com/in/isaias-duran-671347421/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

      </div>


      <p>
        &copy; 2026 Isaias • Programador Junior • Técnico en Informática Profesional y Personal
      </p>


    </footer>
  );
}


export default Footer;