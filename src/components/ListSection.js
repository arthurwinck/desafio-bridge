import "../styles/App.css";
import useFetch from '../hooks/useFetch';

const ListSection = (props) => {

    // Hook que busca a lista de todas as entradas usando o GET  
    const [result, loading] = useFetch('http://duodigit-site.herokuapp.com/api');

    if (loading) {
        return (
            <div className="">
                <h1>Carregando!</h1>
            </div>
        )
    }

    if (!loading && result) {
        return (
            <div className=" bg-purple-200 py-5">
                <div className="center">
                    <div className="m-4 text-2xl">
                        <p>Lista de todos as entradas de duodígito!</p>
                    </div>
                    <div className="p-5 sm:p-10 md:p-40 md:text-xl lg:text-2xl center grid grid-cols-3 justify-center">
                        {result.map(entrada => (
                            <div id={entrada.id} className="m-2 p-2 bg-gray-100 rounded-lg">
                                <p className="m-5">Número: {entrada.numero}</p>
                                <p className="m-5">Múltiplo: {entrada.multiplo_duodigito}</p>
                                <p className="m-5">Tempo: {entrada.tempo_duodigito} ms</p>
                            </div>
                        ))}
    
                    </div>
                </div>
            </div>
        )
    }

    return (
        <h1 className="">Ocorreu um erro</h1>
    )
}

export default ListSection