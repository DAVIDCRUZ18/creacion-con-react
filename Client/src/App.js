import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNavbar} from "./components/AppNavbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ProductDetails } from "./pages/productDetails/productDetails";
import { ShopContextProvider } from "./context/shop-context";
import Tabla from "./componentes/Tabla.jsx";
import Footer from "./componentes/Footer.jsx"
import CategoryCarousel from "./componentes/CategoryCarousel";



function App() {
  return (
    <div className="App">
      
      <ShopContextProvider>
        <Router>
          <AppNavbar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </ShopContextProvider>

      <Tabla />
      <CategoryCarousel/>

      <Footer/>
    </div>
  );
}

export default App;

