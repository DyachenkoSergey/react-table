export const Row = ({ id, name, time, description, done }) => {
  return (
    <tr>
      <td className="userId, cell">{id}</td>
      <td className="userName, cell">{name}</td>
      <td className="userTime, cell">{time}</td>
      <td className="userDescription, cell">{description}</td>
      <td className="userDone, cell">{done}</td>
    </tr>
  );
};
