import { Landing } from './Landing/Landing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path='/shop' element={<h1>Hello world</h1>} />
    </Routes>
  );
}

export default App;
