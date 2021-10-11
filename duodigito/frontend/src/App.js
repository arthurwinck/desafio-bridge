import { useEffect, useState } from 'react';
import CSRFToken from './components/CSRFToken';
import axios from 'axios';
import useFetch from './hooks/useFetch';

const App = () => {
  const [numero, setNumero] = useState(0)
  const [stateForm, setStateForm] = useState('');

  // Hook que irá fazer o POST para o backend, pedindo o resultado
  // Como conseguir o Token CSRF do Django?
  

  // Hook que busca a lista de todas as entradas usando o GET

  const [result, loading] = useFetch('http://127.0.0.1:8000/api');

  const useSubmit = () => {
      axios.post('http://127.0.0.1:8000/api/request/', {
        numero: numero
      })
        .then((response) => {
          console.log(response)
        })
        .catch((response) => {
          console.log("deu ruim")
          console.log(response)
        })
    }

  if (loading) {
      return <p>loading...</p>
  }

  if (!loading && result) {

      return (
          <div className="App">
            <div className="lista-entradas">
              {result.map(entrada => (
                <div key={entrada.id}>
                      <h1>numero={entrada.numero}</h1>
                      <h1>multiplo={entrada.multiplo_duodigito}</h1>                     
                </div>
              ) 
              )}
              </div>
              <div className="secao-botao">
                <form onSubmit={useSubmit} method="get">
                  <CSRFToken/>
                  <input onChange={(e) => setNumero(e.target.value)} id="numero" type="number" value={numero} />
                  <button type="submit">Calcular!</button>
                </form>
              </div>
          </div>
      )

  }

  return <h1>Ocorreu um erro</h1>
}

export default App
