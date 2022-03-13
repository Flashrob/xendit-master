import { Landing } from './Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import { Shop } from './Shop/Shop';

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
  );
}

export default App;
