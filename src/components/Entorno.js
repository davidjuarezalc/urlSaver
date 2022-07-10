const Entorno = ({ entorno }) => {
  const { name, url, user, password } = entorno;
  return (
    <tr>
      <td>
        <a href={url} target="_blank">
          {name}
        </a>
      </td>
      <td
        onClick={() => {
          navigator.clipboard.writeText(user);
        }}
        style={{ cursor: "pointer" }}
      >
        {user}
      </td>
      <td
        onClick={() => {
          navigator.clipboard.writeText(password);
        }}
        style={{ cursor: "pointer" }}
      >
        {password}
      </td>
    </tr>
  );
};

export default Entorno;
