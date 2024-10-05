import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const handleSearch = (query) => {
    const result = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(result);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
      <Footer/>
    </div>
  );
};

export default Home;