import Footer from '../Footer';
import Header from '../Header';
import Tascks from '../Tascks';
import './Card.css';

const Card = ({ tarefas, taskFeito, dataAtual, alterarData, toggleForm, totalTasks, showForm, setShowForm }) => {
  return (
    <div className="card">
      <div className="card-header">
        <Header 
          dataAtual={dataAtual} 
          alterarData={alterarData} 
        />
      </div>

      <div className="tasks-container">
        {tarefas.map((tarefaObj, index) => (
          <Tascks 
            key={index} 
            visivel={tarefaObj.feito} 
            taskFeito={() => {
              taskFeito(index);
            }} 
            tarefa={tarefaObj.tarefa} 
          />
        ))}
      </div>
      
      <div className='card-footer'>
        <Footer toggleForm={toggleForm} totalTasks={totalTasks} showForm={showForm} setShowForm={setShowForm} /> 
      </div>
    </div>
  );
}

export default Card;
