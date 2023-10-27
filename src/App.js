import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import Rowposter from './Components/Rowposter/Rowposte';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowposter/>
    </div>
  );
}

export default App;
