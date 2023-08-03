//Stylesheet
import './App.css';

//Component Imports
import Layout from './components/Layout';

//Page Imports 
import Landing from './pages/Landing/Landing';

//React Imports
import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='container'>
      <Layout>
        <Routes>
          <Route exact path='/'
            element={
              <Landing/>
            }
          />
          <Route exact path='/2'
            element={
              <Landing/>
            }
          />
          <Route exact path='/3'
            element={
              <Landing/>
            }
          />
          <Route exact path='/4'
            element={
              <Landing/>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
