import './App.css';
import TextInputMultiline from './components/textInputMultiline/textInputMultiline';

function App() {
  return (
    <>
      <h1>Text Input Multiline Component</h1>

      <TextInputMultiline 
        placeholder="Type your message here..."
        size='md'
      />
    </>
  )
}

export default App;