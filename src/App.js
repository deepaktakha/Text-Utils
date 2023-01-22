
import './App.css';
import Navbar from './components/Navbar';
import Formtext from './components/Formstext';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   } from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');
  const togglemode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark Mode has been Enabled", "Success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been Enabled", "Success");


    }
  }
   const [alert , setalert] = useState(null);
   const showalert = (message , type)=>{
     setalert({
      msg : message,
      type:type
    
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
     
   }

  return (
    
    <>
    {/* <BrowserRouter> */}
    <Navbar Mode={Mode} toggleMode={togglemode}/>
     <Alert  alert={alert} showalert={showalert}/>
    <div className="container ">
      <Formtext heading = 'Enter text to analyze the Text' Mode={Mode} showalert={showalert}/>
      </div>
      {/* <Routes>
        <Route path="/About" element={<About/>} /> */}
        {/* <Route path="/" element={< */}
          {/* />} /> */}
      {/* </Routes>  */}
    {/* </BrowserRouter> */}
    
   
  
    
    </>
    
  );
}

export default App;
