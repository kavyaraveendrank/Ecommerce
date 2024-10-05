import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, qty: 1 });
      console.log("Product added to cart:", product);
    }
  };

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />

 
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{product.description}</p>

          
          <div className="flex items-center mt-4">
            <p className="text-3xl font-semibold text-blue-600">${product.price}</p>
            <p className="ml-4 text-yellow-500 font-medium">
              ⭐ {product.rating} / 5
            </p>
          </div>

        
          <p className="mt-2 text-green-600">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Product Specifications</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Brand:</strong> {product.brand}</li>
              <li><strong>Category:</strong> {product.category}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">More Images</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
