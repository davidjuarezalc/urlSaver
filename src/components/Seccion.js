import Entorno from "./Entorno";
const Seccion = ({ seccion }) => {
  const { name, items } = seccion;
  return (
    <div>
      <h1 className="display-5">{name}</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Entorno</th>
            <th>Usuario</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Entorno entorno={item} key={item.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Seccion;
