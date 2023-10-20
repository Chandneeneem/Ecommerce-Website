
import './App.css';
import { useState } from 'react';
import ChangePassword from './loginpages/ChangePassword';
import Home from './components/Home';
import Login from './loginpages/Login';
import Register from './loginpages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Adminhome from './admin/Amindashboard';
import AddProduct from './admin/AddProduct';
import ProductList from './product/ProductList';
import Uprofile from './components/Uprofile'
import UserList from './admin/UserList';
import ShowProducts from './admin/ShowProduct';
import CartPage from './product/CartPage';
import Producthome from './product/Producthome';
import DeleteProd from './admin/DeleteProd';
import ProductPage from './product/Productpage';
import Testimonial from './components/Testinomial';
import Mainhome from './components/Mainhome';
import ProductView from './product/ProductVeiw';
import ScrollToTopButton from './components/ScrollToTopButton';
import AboutPage from './components/About'
import NotFound from './components/NotFound';


function App() {

  const [cart, setCart] = useState([]);
  const [like, setLike] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const addToLike = (product) => {
    setCart([...like, product]);
  };
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}> </Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/changepass' element={<ChangePassword />}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/adminh' element={<Adminhome></Adminhome>}></Route>
          <Route path='/addp' element={<AddProduct></AddProduct>}></Route>
          <Route path='/prodhome' element={<Producthome></Producthome>}></Route>
          <Route path='/ppage' element={<ProductPage />}></Route>
          <Route path="/showprod" element={<ProductList addToCart={addToCart} addToLike={addToLike} cart={cart} like={cart} />} />
          <Route path='/alluser' element={<UserList></UserList>}> </Route>
          <Route path='/uprofile' element={<Uprofile></Uprofile>}></Route>
          <Route path='showadminp' element={<ShowProducts></ShowProducts>}></Route>
          <Route path="/cart" element={<CartPage cart={cart} />}></Route>
          <Route path='/delprod' element={<DeleteProd></DeleteProd>}></Route>
          <Route path='/test' element={<Testimonial></Testimonial>}></Route>
          <Route path='/main' element={<Mainhome></Mainhome>}></Route>
          <Route path='/vport' element={<ProductView></ProductView>}></Route>
          <Route path="/products/:id" element={<ProductView />} />
          <Route path='/scroll' element={<ScrollToTopButton></ScrollToTopButton>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path="*" element={<NotFound></NotFound>} />


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
