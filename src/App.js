import { Routes, Route } from 'react-router-dom';

import Wrapper from './components/Wrapper';
import './components/style/grid.css'
import './components/style/style.scss'
import './components/style/responsive.scss'
import ItemPage from './components/Pages/ItemPage';
import SearchPage from './components/Pages/SearchPage';
import Admin from './components/Pages/Admin';
import Create from './components/Pages/Admin/Create';
import Update from './components/Pages/Admin/Update';
import Category from './components/Pages/Category';
import Cart from './components/Pages/Cart';
import Checkout from './components/Pages/Checkout';


function App() {
  // const loadUserCart = localStorage.getItem('UserPandaStore');
  // if (!loadUserCart) {
  //   localStorage.setItem('UserPandaStore', []);
  // }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:search" element={<SearchPage />} />
        <Route path="/category/:search" element={<Category />} />
        <Route path="/category/:search/:manufacturer" element={<Category />} />
        <Route path="/product/:name/:id" element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/update/:id" element={<Update />} />
      </Routes>


    </div>
  );
}

export default App;
