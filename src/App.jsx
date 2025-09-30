import './App.css'
import Tag from './components/tag/tag'
import Button from './components/button/button'

function App() {
  return (
    <>
      <h1>Tag Component</h1>
      
      <Tag label="Primary" variant="primary" />
      <Tag label="Secondary" variant="secondary" />
      <Tag label="Error" variant="error" />
      <Tag label="Disabled" variant="disabled" />
    </>
  )
}

export default App