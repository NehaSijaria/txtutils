import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import TxtForm from './component/TxtForm';
import AboutUs from './component/AboutUs';

function App() {
  const [mode, setMode] = useState('dark') //chk if dark mode is on?

  return (
    <>
      <Navbar title="MyTxtApp" mode={mode}/>
      <div className="container">
        <TxtForm heading="Magical Box"/>
      {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
