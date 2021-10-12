import NavBar from './components/NavBar';
import InputSection from './components/InputSection';
import ListSection from './components/ListSection';
import './styles/App.css';

const App = () => {
  return (
    <>
    <title>Duodigits!</title>
    <div className="App">
      <NavBar />
      <InputSection />
      <ListSection/>
    </div>
    </>
  )
}

export default App
