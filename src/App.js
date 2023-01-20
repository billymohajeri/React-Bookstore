import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
