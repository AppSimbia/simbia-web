import './App.css'
import Button from './components/button/button';

function App() {
  return (
    <>
      <h1>Button Component</h1>
      
      <Button
        label="Click Me"
        onClick={() => alert('Button Clicked!')}
      />

      <Button
        label="Click Me"
        onClick={() => alert('Button Clicked!')}
        variant='secondary'
      />

      <Button
        label="Click Me"
        onClick={() => alert('Button Clicked!')}
        variant='error'
      />

      <Button
        label="Click Me"
        onClick={() => alert('Button Clicked!')}
        disabled={true}
      />

      <Button
        label="Click Me"
        onClick={() => alert('Button Clicked!')}
        size='md'
      />
    </>
  )
}

export default App