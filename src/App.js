import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);

const showAlert = (message , type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500)
}


const toggleMode = ()=>{
    if (mode === "light"){
      document.body.style.backgroundColor = "black";
      setMode('dark');
      showAlert("dark mode enabled", 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", 'success')


    }
  }
  return (
    <>
<BrowserRouter>
<Navbar title="SAKTIMAN" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />

<Routes>
<Route exact path="/about" element={<About mode={mode}/>}></Route>
<Route exact path="/" element={<TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} /> }></Route>
  </Routes>
</BrowserRouter>
</>

  );
}

export default App;
