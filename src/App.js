
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './comps/Navbar';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import ProductPage from './pages/ProductPage';
import UpdateProduct from './pages/UpdateProduct';
import Footer from './comps/Footer';
//Prabh
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/all' element={<AllProducts />} ></Route>
        <Route path='/add' element={<AddProduct />} ></Route>
        <Route path='/product/:id' element={<ProductPage />} ></Route>
        <Route path='/update/:id' element={<UpdateProduct />} ></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
