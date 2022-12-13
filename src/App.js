
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Skills/>
    <About/>
 
    <Home/>

    </div>
  );
}

export default App;
