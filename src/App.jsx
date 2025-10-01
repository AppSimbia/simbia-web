import './App.css';
import { useState } from 'react';
import TextInput from './components/textInput/textInput.jsx';
import TextInputMultiline from './components/textInputMultiline/textInputMultiline.jsx';
import Button from './components/button/button.jsx';

function App() {
  let [value1, setValue1] = useState('');
  let [value2, setValue2] = useState('');

  function alertValue(value) {
    alert(value);
  };

  return (
    <>
      <h1>Text Input/Multiline Component</h1>

      <TextInput placeholder="Text Input" size='md' value={value1} onChange={setValue1} />

      <Button size='md' label='Alert Input' onClick={() => alertValue(value1)} />

      <TextInputMultiline placeholder="Text Input Multiline" size='md' value={value2} onChange={setValue2} />
      
      <Button size='md' label='Alert Multiline' onClick={() => alertValue(value2)} />
    </>
  )
}

export default App;