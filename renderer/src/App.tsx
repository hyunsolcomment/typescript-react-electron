import { useEffect } from 'react';
import './App.css';
import useTitle from './hook/useTitle';

function App() {
  useTitle("Typescript + React + Electron");

  useEffect(() => {
    window.electron.test();
  },[]);

  return (
    <div className="App">
        <img className="spin" src="img/hiu.png" alt="히유" />
        <h1>Typescript + React + Electron</h1>
    </div>
  );
}

export default App;
