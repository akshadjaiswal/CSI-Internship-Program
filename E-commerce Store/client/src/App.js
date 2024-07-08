import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";

import Carousel from "./components/Carousel";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/products/" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Carousel />

        <Newsletter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
