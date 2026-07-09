# 💼 Portfolio Personal - Isaias Duran

## 📌 Descripción

Este proyecto corresponde a mi portfolio personal como desarrollador web. 
Fue desarrollado con el objetivo de mostrar mi perfil profesional, conocimientos,
proyectos realizados y formas de contacto.

La aplicación presenta información sobre mi formación como **Técnico en Informática Profesional y Personal** y estudiante de **Análisis de Sistemas y Desarrollo de Software**, además de mis habilidades en desarrollo web y tecnologías aprendidas.

El diseño está enfocado en una experiencia moderna, responsive y profesional,
adaptada para visualizarse correctamente en distintos dispositivos.


---

## 🚀 Características principales

- Página de inicio con presentación profesional.
- Sección "Sobre mí" con información personal, conocimientos y habilidades.
- Sección de repositorios consumiendo la API pública de GitHub.
- Formulario de contacto con validaciones de campos obligatorios.
- Navegación dinámica utilizando React Router.
- Diseño responsive adaptable a celulares, tablets y computadoras.
- Uso de componentes reutilizables.
- Implementación de iconos para mejorar la interfaz.


---

## 🛠️ Tecnologías utilizadas

### Frontend

- **React.js**
  - Creación de componentes reutilizables.
  - Manejo de estados con Hooks.
  - Organización de la interfaz mediante componentes.

- **JavaScript (ES6+)**
  - Lógica de la aplicación.
  - Consumo de APIs.
  - Manejo de eventos.

- **HTML5**
  - Estructura semántica de la aplicación.

- **CSS3**
  - Diseño visual.
  - Grid y Flexbox.
  - Variables CSS.
  - Responsive Design.


### Librerías

- **React Router DOM**
  - Manejo de rutas y navegación entre páginas sin recargar la aplicación.

- **React Icons**
  - Implementación de iconos profesionales para tecnologías,
    redes sociales y secciones del sitio.


### API utilizada

- **GitHub REST API**

Utilizada para obtener automáticamente mis repositorios públicos y mostrarlos
dinámicamente en la sección de proyectos.

Endpoint utilizado:

https://api.github.com/users/IsaiasDc2/repos


---

## 📂 Estructura del proyecto

```text
src
│
├── assets
│   └── imagenes del portfolio
│
├── components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Repo.jsx
│   └── Layout.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Sobre.jsx
│   └── Contacto.jsx
│
├── App.jsx
├── main.jsx
│
└── styles
    ├── Home.css
    ├── Sobre.css
    ├── Contacto.css
    ├── Footer.css
    └── Navbar.css



---

## ⚙️ Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/IsaiasDc2/nombre-del-repositorio.git