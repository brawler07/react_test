
import './App.css';
import {Routes,Route,BrowserRouter,Link} from "react-router-dom"
import Q_1comp from './Q_1comp';
import Q_2Comp from "./Q_2Comp"
import Q_3Comp from './Q_3Comp';

// import{Routes,Route,BrowserRouter,Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="App-header">
       {/* <Q_1comp></Q_1comp> */}
       <Q_2Comp></Q_2Comp>
       {/* <Q_3Comp></Q_3Comp> */}
       
               
       
      </div> 
    </div>
  );
}

export default App;
