import './App.css';
import PostCard from './components/postCard/postCard';
import { PostCardProps } from './interfaces/postCardProps';

function App() {
  let product: PostCardProps = {
    imgUrl: 'https://picsum.photos/300/300',
    industryLogo: 'https://picsum.photos/100/100',
    productName: 'Lorem Ipsum',
    tag: {
      label: "Cancelada",
      variant: "disabled"
    },
    productPrice: 999.99,
    unit: 1000,
    measureUnit: 'Kg',
  };
  
  return (
    <>
      <h1>Post Card Component</h1>

      <PostCard product={product} onClick={() => {alert("clicou")}}/>
    </>
  )
}

export default App;