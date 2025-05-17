import "./List.scss";

const List = ({ listElements }) => {
  return (
    <ul className="list">
      {listElements.map((element, index) => (
        <li key={index} className="subtitle2">
          <img src="./src/assets/ok.svg" width="24" height="24" />
          <p>{element}</p>
        </li>
      ))}
    </ul>
  );
};

export default List