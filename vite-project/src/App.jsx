import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./components/Sobre";
import Contacto from "./components/Contacto";
import Repo from "./components/Repo";
import "./App.css"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Repo" element= {<Repo/>} />
        <Route path="Sobre-mi" element={<Sobre />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;