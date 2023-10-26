import React, { useState } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Menu from './components/Menu/Menu';
import { MiContexto } from './shared/Context';

function App() {

  const[counter, setCounter] = useState(0);

  return (
    //proveemos nuestro contexto en toda la app
    <MiContexto.Provider value={[counter,setCounter]}>
    <Router>
      <div className="App">
      <div className='container'>
        <div className="App-header">
          <Menu/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/characters" element={<CharactersPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
          </div>
        </div>
      </div>
    </Router>
    </MiContexto.Provider>
  );
}

export default App;
