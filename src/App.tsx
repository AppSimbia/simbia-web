import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import { AppRoutes } from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header industryName='Raízen' logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGlr26j0ftFCRkG-wQt4yKBTm-wMN9M4Ifw&s'/>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;