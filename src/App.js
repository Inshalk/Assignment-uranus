import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Midsection from './Components/Midsection'
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Midsection/>
      <Footer/>
    </div>
  );
}

export default App;
