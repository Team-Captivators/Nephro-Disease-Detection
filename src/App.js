import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
// import Detection from './routes/Detection';
// import Symptoms from './routes/Symptoms';
// import Faq from './routes/Faq';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/detection" element={<Detection/>}/>
        <Route path="/symptoms" element={<Symptoms/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
