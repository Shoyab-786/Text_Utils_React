import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (clas) => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = `${clas}`;
      if (clas === "lightblue") {
        document.body.style.color = "black";
      } else {
        document.body.style.color = "#bcbec8";
      }
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar title="TextUtils" home="Home" about="About" contact="Contact" mode={mode} toggleMode={toggleMode} /><Alert alert={alert}></Alert><TextForm heading="Enter Text To Ananlyze" mode={mode} showAlert={showAlert} /></>
    },
    {
      path: "/home",
      element: <><Navbar title="TextUtils" home="Home" about="About" contact="Contact" mode={mode} toggleMode={toggleMode} /><Alert alert={alert}></Alert><TextForm heading="Enter Text To Ananlyze" mode={mode} showAlert={showAlert} /></>
    },
    {
      path: "/about",
      element: <><Navbar title="TextUtils" home="Home" about="About" contact="Contact" mode={mode} toggleMode={toggleMode} /><Alert alert={alert}></Alert><About mode={mode} /></>
    },
    {
      path: "/contact",
      element: <><Navbar title="TextUtils" home="Home" about="About" contact="Contact" mode={mode} toggleMode={toggleMode} /><Alert alert={alert}></Alert><Contact mode={mode} /></>
    },
  ])
  return (
    <>


      <RouterProvider router={router} />
    </>
  );
}

export default App;
