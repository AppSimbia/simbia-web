import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import ProductDetails from './pages/productDetails/productDetails';
import { Product } from './interfaces/models';

function App() {
  const productMock: Product = {
    name: "Lorem Ipsum",
    price: 29.99,
    quantity: 1000,
    measureUnit: "Kg",
    imgUrl: "https://picsum.photos/900/900",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus metus sed lectus consectetur vestibulum. Nunc tristique, justo in pulvinar lacinia, felis nibh efficitur urna, viverra pretium felis est in quam. Proin vehicula sagittis pretium. Nunc nunc diam, commodo vitae justo quis, pretium consequat erat. Etiam hendrerit nibh a finibus rutrum. Aenean fermentum rutrum ante, sed vulputate est tempor sed. Vivamus commodo nec libero sed facilisis.",
    category: "Têxtil",
    classification: "Não perigoso"
  };
  return (
    <>
      <Header industryName='Raízen' logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGlr26j0ftFCRkG-wQt4yKBTm-wMN9M4Ifw&s'/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductDetails {...productMock}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;