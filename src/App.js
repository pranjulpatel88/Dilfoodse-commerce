import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
