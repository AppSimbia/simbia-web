import './App.css';
import TextInput from './components/textInput/textInput';

function App() {
  return (
    <>
      <h1>Text Input Component</h1>

      <TextInput placeholder="Digite algo..." />
      <TextInput placeholder="Digite algo..." size='md' />
    </>
  )
}

export default App;