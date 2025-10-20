import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import { AppRoutes } from './routes';
import { industryMock } from './mocks';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header industryName={industryMock.name} logo={industryMock.imgUrl}/>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;