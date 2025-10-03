import './App.css';
import Switch from './components/switch/switch';

function App() {
  return (
    <>
      <h1>Switch Component</h1>

      <Switch isOn={true} onChange={(e) => {alert(e)}} />
    </>
  )
}

export default App;