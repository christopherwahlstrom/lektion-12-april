import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Navbar from './components/Navbar';
import Error from './views/Error';

/**
 * URL: / - Komponent: Home.js
 * URL: /om - Komponent: About.js
 * URL: 404 - Komponent. Error.js
 */

function App() {
  return (
    <div className="App">
      <header>
        <h1>Min sida</h1>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/om' element={ <About /> } />
        <Route path="*" element={ <Error /> } /> { /* Alla url:er som inte är ovanstående ger vår 404-sida */ }
      </Routes>
    </div>
  );
}

export default App;