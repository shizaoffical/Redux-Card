// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ProductCard from "./components/ProductCard"
// import Navbar from "./components/Navbar"
import AddToCart from "./components/AddToCart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<ProductCard/>}/>
        <Route path='/cart' element={<AddToCart/>}/>
        </Route>
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
