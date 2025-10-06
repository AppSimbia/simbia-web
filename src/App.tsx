import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/sign-in/signin';
import SignUp from './pages/sign-up/signUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;