import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './vistas/Home';
import Landing from './components/Landing/Landing';
import Detail from './vistas/CountryDetails.';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/countries" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
