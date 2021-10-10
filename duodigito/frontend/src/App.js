import useFetch from './hooks/useFetch';

const useRequest = (numero) => {
  const result = useFetch('http://127.0.0.1:8000/api/request', {
    "numero": numero
  })
  
  return result.multiplo_duodigito
}

const App = () => {

  const [result, loading] = useFetch('http://127.0.0.1:8000/api');

  if (loading) {
      return <p>loading...</p>
  }

  if (!loading && result) {

      return (
          <div className="App">
              {result.map(entrada => (
                <div key={entrada.id}>
                      <h1>numero={entrada.numero}</h1>
                      <h1>multiplo={entrada.multiplo_duodigito}</h1>                      
                </div>
              ) 
              )}
          </div>
      )

  }

  return <h1>Ocorreu um erro</h1>
}

export default App
