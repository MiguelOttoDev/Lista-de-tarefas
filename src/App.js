import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import FormTarefa from './components/FormTarefa';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tarefas, setTarefas] = useState([
      { tarefa: 'Tirar o lixo', data: new Date().toISOString().split('T')[0], feito: false },
      { tarefa: 'Dar ração para o cachorro', data: new Date().toISOString().split('T')[0], feito: false },
  ]);
  const [dataAtual, setDataAtual] = useState(new Date());

  const taskFeito = (index) => {
    setTarefas(prevTarefas => {
      const novasTarefas = prevTarefas.map((tarefa, i) => {
        if (i === index) {
          return { ...tarefa, feito: !tarefa.feito }; 
        }
        return tarefa; 
      });
      return novasTarefas;
    });
  };

  function toggleForm() {
    setShowForm((prev) => !prev);
  }

  function adicionarTarefa(novaTarefa) {
    setTarefas(prevTarefas => [
      ...prevTarefas,
      { tarefa: novaTarefa.tarefa, data: novaTarefa.data, feito: false },
    ]);
    setShowForm(false);
  }

  function alterarData(dia) {
    const novaData = new Date(dataAtual);
    novaData.setDate(novaData.getDate() + dia);
    setDataAtual(novaData);
  }

  const tarefasHoje = tarefas.filter(t => t.data === dataAtual.toISOString().split('T')[0]);
  
  const tarefasNaoFeitasHoje = tarefasHoje.filter(t => !t.feito);
  const totalTasks = tarefasNaoFeitasHoje.length; 

  return (
    <div className="App">
      <Card 
        taskFeito={taskFeito} 
        toggleForm={toggleForm} 
        tarefas={tarefasHoje} 
        dataAtual={dataAtual} 
        alterarData={alterarData}
        totalTasks={totalTasks} 
        showForm={showForm} 
        setShowForm={setShowForm}
      />
      {showForm && <FormTarefa adicionarTarefa={adicionarTarefa} closeForm={toggleForm} />}
    </div>
  );
}

export default App;
