import { useState, useEffect } from 'react';

// CSRFToken é um componente que nos ajudará a buscar o token de segurança CSRF (do backend do Django) para que
// possamos realizar POST requests. o retorno dessa função é um input invisível, que basicamente diz ao Django
// que estamos autenticados

const CSRFToken = () => {
    const [csrftoken, setcsrftoken] = useState('')

    // Função já pronta da documentação do Django
    
    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // Aqui faremos a requisição GET para recebermos todos os cookiesS
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://duodigit-site.herokuapp.com/api/get_cookie');
            }
            catch(e) {
                throw e;
            }
        }
        // Com o GET, realizamos a busca pelo cookies da página
        fetchData()
        // Nessa função iremos pegar somente o CSRF cookie
        setcsrftoken(getCookie('csrftoken'));
    }, [])


    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}></input>
    )
}

export default CSRFToken