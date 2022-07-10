import "./App.css";
import Seccion from "./components/Seccion";
function App() {
  const data = require("./constants/db.json");
  return (
    <div>
      <h1 className="display-1">Accesos</h1>
      <p>
        Haz click sobre el nombre y contraseña para copiarlo. La URL se abrirá
        en una pestaña nueva.
      </p>
      <div className="row row-cols-auto">
        {data.items.map((seccion) => (
          <div className="col" key={seccion.name}>
            <Seccion seccion={seccion} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
