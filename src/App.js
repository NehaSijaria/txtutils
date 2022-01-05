import './App.css';
import Navbar from './component/Navbar';
import TxtForm from './component/TxtForm';

function App() {
  return (
    <>
      <Navbar title="MyTxtApp" />
      <div className="container my-3">

      <TxtForm heading="Please Enter your text" />
      </div>
    </>
  );
}

export default App;
