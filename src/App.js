import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import TxtForm from './component/TxtForm';
import AboutUs from './component/AboutUs';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light') //chk if dark mode is on?
  const [alert, setAlert] = useState(null)  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
     
      <Navbar title="MyTxtApp" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={}/>
      <div className="container">
        <TxtForm heading="Magical Box" mode={mode} />
      {/* <AboutUs /> */}
      </div>
      
    </>
  );
}

export default App;
