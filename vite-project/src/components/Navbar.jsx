import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="site-header">
      <h1>&lt; Isaias Duran &gt;</h1>

      <Link to="/">Inicio</Link>
      <Link to="/sobre-mi">Sobre mí</Link>
      <Link to="/Repo">Repositorios</Link>
      <Link to="/contacto">Contáctame</Link>
    </div>
  );
}

export default Navbar;