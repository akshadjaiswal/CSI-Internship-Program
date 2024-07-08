import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { userRequest,publicRequest } from "../redux/requestMethods";
const Products = ({ cat, filters, sort }) => {
  console.log("product section : ", cat, filters, sort);
  const [allproducts, setAllProducts] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const getProducts = async () => {
     try {
       const res = await userRequest.get("/products", {
         params: cat ? { category: cat } : null,
       });
       console.log("res : ", res);
       setAllProducts(res.data);
       setLoading(false);
     } catch (error) {
       console.log("error :", error);
       setLoading(false);
     }
   };
   getProducts();
 }, [cat]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterdProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterdProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    }
  }, [sort]);

  useEffect(() => {
   cat &&
     setFilterdProducts(
       allproducts.filter((item) =>
         Object.entries(filters).every(([key, value]) => {
           const itemValue = item[key];
           return (
             itemValue !== undefined &&
             String(itemValue).toLowerCase().includes(String(value).toLowerCase())
           );
         })
       )
     );
 }, [allproducts, cat, filters]);
 
  return (
    <div className="products flex flex-wrap justify-center">
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress style={{ color: "#EC7063 " }} />
        </Box>
      )}
      {!loading && filterdProducts.length === 0 && allproducts.length === 0 && <p className="text-xl my-8 font-bold">No products found.</p>}
      {!loading && cat
        ? filterdProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))
        : allproducts
            .slice(0, 8)
            .map((product) => <Product product={product} key={product.id} />)}
    </div>
  );
};

export default Products;
