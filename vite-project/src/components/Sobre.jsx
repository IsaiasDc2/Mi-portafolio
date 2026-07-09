import React from "react";
import foto from "../assets/foto.jpeg";
import "./Sobre.css";
import { Link } from "react-router-dom";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaTools,
  FaNetworkWired,
  FaTasks,
  FaColumns
} from "react-icons/fa";

import { SiJavascript, SiMysql } from "react-icons/si";
import { MdBuild } from "react-icons/md";


function Sobre() {
  return (
    <section className="sobre">

      <h1>Sobre Mí</h1>


      <div className="perfil">

        <div className="imagen">
          <img src={foto} alt="Foto de Isaias" />
        </div>


        <div className="descripcion">

          <p>
            Me llamo <strong>Isaias</strong> y actualmente estoy estudiando{" "}
            <strong>Análisis de Sistemas y Desarrollo de Software</strong>.
            Soy{" "}
            <strong>Técnico en Informática Profesional y Personal</strong>{" "}
            y me apasiona el desarrollo web.

            Me encuentro aprendiendo nuevas tecnologías y fortaleciendo mis
            conocimientos día a día para crecer como desarrollador Full Stack.
          </p>


          <Link to="/contacto" className="btn-contacto">
            Contáctame
          </Link>

        </div>

      </div>



      <div className="caract">


        <div className="tarjeta conocimientos">

          <h2>Conocimientos</h2>

          <ul>
            <li>
              <FaPython /> Python
            </li>

            <li>
              <SiJavascript /> JavaScript
            </li>

            <li>
              <FaHtml5 /> HTML
            </li>

            <li>
              <FaCss3Alt /> CSS
            </li>

            <li>
              <SiMysql /> SQL
            </li>

            <li>
              <FaReact /> React
            </li>
          </ul>

        </div>




        <div className="tarjeta habilidades">

          <h2>Habilidades</h2>

          <ul>

            <li>
              <FaTools /> Mantenimiento de Hardware
            </li>

            <li>
              <FaNetworkWired /> Redes
            </li>

            <li>
              <MdBuild /> Reparación de Hardware
            </li>

          </ul>

        </div>




        <div className="tarjeta metodo">

          <h2>Metodologías</h2>

          <ul>

            <li>
              <FaTasks /> Scrum
            </li>

            <li>
              <FaColumns /> Kanban
            </li>

          </ul>

        </div>


      </div>


    </section>
  );
}


export default Sobre;