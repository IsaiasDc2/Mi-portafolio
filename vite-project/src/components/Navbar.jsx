import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">

      <h1>&lt; Isaias Duran &gt;</h1>


      <button 
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>


      <nav className={open ? "nav-menu active" : "nav-menu"}>

        <Link to="/" onClick={() => setOpen(false)}>
          Inicio
        </Link>

        <Link to="/sobre-mi" onClick={() => setOpen(false)}>
          Sobre mí
        </Link>

        <Link to="/Repo" onClick={() => setOpen(false)}>
          Repositorios
        </Link>

        <Link to="/contacto" onClick={() => setOpen(false)}>
          Contáctame
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;