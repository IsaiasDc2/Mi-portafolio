import React, { useEffect, useState } from "react";
import "./Repo.css";

function Repo() {

  const [repos, setRepos] = useState([]);
  const [cargando, setCargando] = useState(true);


  useEffect(() => {

    fetch("https://api.github.com/users/IsaiasDc2/repos")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setCargando(false);
      })
      .catch(error => {
        console.log(error);
        setCargando(false);
      });

  }, []);



  if (cargando) {
    return <h2>Cargando proyectos...</h2>;
  }



  return (

    <section className="repos">

      <h1>Mis Proyectos</h1>


      <div className="repos-grid">

        {repos.map((repo) => (

          <article className="repo-card" key={repo.id}>


            <img
              src={`https://opengraph.githubassets.com/1/IsaiasDc2/${repo.name}`}
              alt={repo.name}
              className="repo-img"
            />


            <div className="repo-contenido">

              <h2>
                {repo.name}
              </h2>


              <p>
                {repo.description || "Proyecto desarrollado con diferentes tecnologías web."}
              </p>


              <div className="repo-info">

                <span>
                  ⭐ {repo.stargazers_count}
                </span>

                <span>
                  💻 {repo.language || "Varios"}
                </span>

              </div>


              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver código →
              </a>


            </div>


          </article>

        ))}

      </div>

    </section>

  );
}

export default Repo;