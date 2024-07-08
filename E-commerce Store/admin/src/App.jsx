import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Topbar";
import "./index.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import UserList from "./pages/UserList";
import { useMediaQuery } from "@mui/material";
import User from "./pages/User";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
function App() {
  const isNonMobileScreen = useMediaQuery('(min-width:600px)');
  const admin = true;
  return (
    <div className="App">{
      admin ? <Topbar />: ""

    }
      <div className=" grid grid-cols-12 relative  ">
      <div className="sidebar md:col-span-2">
        {
          isNonMobileScreen && admin ?(
          <Sidebar />
        ):("")
        }
        </div>
        
        <div className="content md:col-span-10  col-span-12 p-2 ">
          <BrowserRouter>
            <Routes>
            <Route path="/login" element={<Login/>} />

              <Route path="/" element={<Home />} />
              <Route path="/userlist" element={<UserList  />} />
              <Route path="/user" element={<User  />} />
              <Route path="/productlist" element={<ProductList/>} />
              <Route path="/product" element={<Product/>} />
              <Route path="/newproduct" element={<NewProduct/>}/>

            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
