import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Header from './components/Header/Header'
import Questions from './components/Questions/Questions'
import Map from './components/Map/Map'
import Benefits from './components/Benefits/Benefits'
import React from "react";
import Services from './components/servises/servises';
import Footer from './components/footer/footer';
import Price from './components/Price/Price';
//import Slider_sings from './components/slider_sings/slider_sings';
//import Contact from './components/forms/Contacts/Contacts'
import Application from './components/forms/Application/Application';
import Layout from './components/Layouts/Layout/Layout';
function App() {
  return (
    <div className="App">
     

      {/* <Slider_sings/> */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/about_center' element={<Benefits/>}/>
          <Route path='/corporative' element={<Map/>}/>
          <Route path='/corporative/:id' element={<Price/>}/>
        </Route>
      </Routes>

        
        
      
 
    </div>
  );
}

export default App;
