import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import TxtForm from './component/TxtForm';
import AboutUs from './component/AboutUs';

function App() {
  const [mode, setMode] = useState('light') //chk if dark mode is on?

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
      <Navbar title="MyTxtApp" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TxtForm heading="Magical Box"/>
      {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
