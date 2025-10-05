import './App.css';
import Button from './components/button/button';
import Tag from './components/tag/tag';

function App() {
  return (
    <>
      <h1>Button Component</h1>

      <Button label='Button' variant='outlined' disabled onClick={() => {alert("Button")}}/>
      <Tag label='Tag' variant='error' disabled onClick={() => {alert("Tag")}}/>
    </>
  )
}

export default App;