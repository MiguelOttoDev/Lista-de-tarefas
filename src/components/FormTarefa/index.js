import { useState } from 'react';
import './FormTarefa.css';

const FormTarefa = ({ adicionarTarefa, closeForm }) => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [dataTarefa, setDataTarefa] = useState(new Date().toISOString().split('T')[0]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      adicionarTarefa({ tarefa: novaTarefa, data: dataTarefa }); 
      setNovaTarefa('');
      setDataTarefa(new Date().toISOString().split('T')[0]); 
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Adicionar Tarefa</h2>
        <form className="formulario" onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={novaTarefa} 
            onChange={(e) => setNovaTarefa(e.target.value)} 
            placeholder="Digite sua tarefa" 
            required 
          />
          <input 
            type="date" 
            value={dataTarefa} 
            onChange={(e) => setDataTarefa(e.target.value)} 
          />
          <button type="submit">Adicionar Tarefa</button>
          <button type="button" onClick={closeForm}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default FormTarefa;
