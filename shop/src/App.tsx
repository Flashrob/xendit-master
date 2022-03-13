import { Landing } from './Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import { Shop } from './Shop/Shop';
import { Cart } from './Cart/Cart';

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
