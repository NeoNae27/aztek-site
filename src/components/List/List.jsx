import "./List.scss";
import okIcon from "../../assets/icons/ok.svg";

const List = ({ listElements }) => {
  return (
    <ul className="list">
      {listElements.map((element, index) => (
        <li key={index} className="subtitle2">
          <img src={okIcon} width="24" height="24" alt="List Icon" />
          <p>{element}</p>
        </li>
      ))}
    </ul>
  );
};

export default List