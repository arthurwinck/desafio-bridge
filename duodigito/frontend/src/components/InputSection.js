import { useState } from 'react';
import axios from 'axios';
import "../styles/App.css";
import CSRFToken from "./CSRFToken";

const InputSection = (props) => {
    const [numero, setNumero] = useState(0)
    const [resultadoTela, setResultadoTela] = useState('')
    const [erro, setError] = useState('')
    

    const useSubmit = (e) => {
        e.preventDefault();
        if (numero >= 100) {
          axios.post('http://127.0.0.1:8000/api/request/', {
            numero: numero
          })
            .then((response) => {
              // Aqui não foi possível atualizar as variáveis a tempo, então tive que colocar na "marra"
              setResultadoTela(<div className="text-xl m-5 p-5 rounded-xl bg-purple-300">
              <p>{`O seu número escolhido é ${numero}`}</p>
              <p>{`Seu múltiplo é ${response.data.multiplo_duodigito}`} </p>
              <p>{`E ele levou ${response.data.tempo_duodigito} ms para ser calculado`}</p>
             </div>)
              console.log(response)
            })
            .catch((response) => {
              console.log(response)
            })
        } 
        else {
          //Elaborar melhor o aviso
          setError(
          <div className="text-xl rounded-lg bg-red-400 m-5 p-5">
            <h1>Seu número é menor que 100!</h1>
          </div>)
        }
      }

    return (
        <div className="p-8 bg-gray-200 py-40">
            <div className="center">
                <div className="m-4">
                    <p>Calcule o seu múltiplo duodígito aqui</p>
                    <p>Lembre-se que os número precisa ser maior que 100!</p>
                </div>
                <div className="m-2 text-2xl">
                    <form onSubmit={useSubmit} className="block" action="{}" method="get">
                        <CSRFToken/>
                        <input onChange={(e) => setNumero(e.target.value)} className="rounded" type="number"/>
                        <button className="px-5 py-2 m-5 bg-purple-600 rounded-xl text-white" type="submit">Calcular!</button>
                    </form>
                </div>
                {resultadoTela}
                {erro}
            </div>
        </div>
    )
}

export default InputSection