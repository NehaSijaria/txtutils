import './App.css';
import Navbar from './component/Navbar';
import TxtForm from './component/TxtForm';
import AboutUs from './component/AboutUs';

function App() {
  return (
    <>
      <Navbar title="MyTxtApp" />
      <div className="container">
        <TxtForm heading="Magical Box"/>
      {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
