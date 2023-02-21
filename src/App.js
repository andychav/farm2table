import './App.css';
import Garden from './Garden.js';
import React from 'react';
import GardenForm from './GardenForm';

function App() {
  return (
    <section>
      <h1>Garden Plans</h1>
      <GardenForm/>
      <br></br>
      <Garden/>
    </section>
  );
}

export default App;
