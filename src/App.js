import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'; 
import Alert from './components/Alert';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  const[mode, setMode] = useState("light"); //wether dark mode in enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
         setAlert(null)
      }, 1500)
  }
  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "success");
     // document.title = "TextUtils- Dark Mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      //document.title = "TextUtils- Light Mode"
    }
  }
  
    return (
    
    <Router>
      
      <Navbar title = "TextUtils" mode= {mode} toggleMode={toggleMode}/>
      <Alert  alert= {alert}/>
      <div className="container my-3">
      <Routes>
          <Route path = "/about"
                 element= {<About mode = {mode}/>}/>
          <Route path = "/" 
                 element= { <TextForm showAlert= {showAlert} 
                                      heading ="Try Textutils- Word Counter, Character counter, Remove extra spaces" 
                                      mode= {mode}/> }/>
                 </Routes>
      </div>
      
      </Router>
    
  );
}

export default App;