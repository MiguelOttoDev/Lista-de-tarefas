import './Footer.css';
import { IoMdAdd } from "react-icons/io";

const Footer = ({ toggleForm, totalTasks, showForm, setShowForm }) => {
  return (
    <div className="footer">
      <p>
        <span>{totalTasks}</span>
        Tasks
      </p>
      <button onClick={() => setShowForm(!showForm)}>
        Adicionar Tarefa <span> <IoMdAdd /> </span>
      </button>
    </div>
  );
}

export default Footer;
