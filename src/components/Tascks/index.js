import './Tascks.css';
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

const Tascks = ({ visivel, taskFeito, tarefa }) => {
  return (
    <div className="tasks">
      <button onClick={taskFeito}>
        {visivel ? <FaRegCheckSquare /> : <FaRegSquare />}
      </button>
      <p>{tarefa}</p>
    </div>
  );
}

export default Tascks;
