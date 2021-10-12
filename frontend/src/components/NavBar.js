import "../styles/App.css";

const NavBar = () => {
    return (
        <div className="p-8 bg-purple-500">
            <div className="flex-row flex text-white">
                <div className="m-2 text-2xl">
                    <h1>Duodigits!</h1>
                </div>
                <div className="m-4">
                    <p>Calcule o seu múltiplo duodígito aqui</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar