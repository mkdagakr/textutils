import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');

  const modeChange = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <BrowserRouter>
        <NavBar title='TextUtils' mode={mode} toggleMode={modeChange} />
        <Routes>

          <Route path="/" element={
            <div className="container my-3">
              <TextForm heading='Enter your Text' mode={mode} toggleMode={modeChange} />
            </div>
          } />

          <Route path="/about" element={
            <div className="container my-3">
              <About mode={mode} toggleMode={modeChange} />
            </div>
          } />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
