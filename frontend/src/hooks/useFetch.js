import { useEffect, useState } from 'react'

// UseFetch será nosso hook que lidará com as requests para o backend, tanto GET quanto POST

const useFetch = (url, options) => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const jsonResult = await response.json();
                setResult(jsonResult);
                setLoading(false)
            }
            catch(e) {
                setLoading(false);
                throw e;
            }
        }

        fetchData()

    }, [url, options])

    return [result, loading]
}

export default useFetch