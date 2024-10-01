import './Header.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Header = ({ dataAtual, alterarData }) => {
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);

    return (
        <div className='header'>
            <button onClick={() => alterarData(-1)}><FaArrowLeft /></button>
            <p>{dataFormatada}</p>
            <button onClick={() => alterarData(1)}><FaArrowRight /></button>
        </div>
    )
} 

export default Header