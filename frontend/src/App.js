import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


const App = () => {
  return (
    <>
      <Header></Header>
      <main className='py-3bv '>
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
