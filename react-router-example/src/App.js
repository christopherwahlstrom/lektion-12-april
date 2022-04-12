import './App.css';
import { Routes, Route, Router } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
import Products from './views/Products';
import ProductInfo from './views/ProductInfo';

import Navbar from './components/Navbar';

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
        <Route path="/" element={ <Home /> } />
        <Route path="/om" element={ <About /> } />
        <Route path="/produkter" element={ <Products /> } />
        <Route path="/produkt/:id" element={ <ProductInfo /> } />
        <Route path="*" element={ <Error /> } /> { /* Alla url:er som inte är ovanstående ger vår 404-sida */ }
      </Routes>
    </div>
  );
}

export default App;