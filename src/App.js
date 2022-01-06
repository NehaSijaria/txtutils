import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import TxtForm from './component/TxtForm';
import AboutUs from './component/AboutUs';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light') //chk if dark mode is on?
  const [alert, setAlert] = useState(null);
//alert is null initially, now obj with passed values
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type:type
    })
    setTimeout(()=> {
        setAlert(null);
      },1500
    )
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Enabled dark mode', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Enabled light mode', 'success')
    }
  }
  return (
    <>
     
      <Navbar title="MyTxtApp" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TxtForm heading="Magical Box" mode={mode} showAlert={showAlert}/>
        //use alert fn when needed
      {/* <AboutUs /> */}
      </div>
      
    </>
  );
}

export default App;
