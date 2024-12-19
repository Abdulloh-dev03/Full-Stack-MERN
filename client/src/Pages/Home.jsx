import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/productsCard";

const Home = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleEdit = (id) => {
    console.log(`Edit product with ID: ${id}`);
    // Navigate to edit page or open a modal
  };

  const handleDelete = (id) => {
    console.log(`Delete product with ID: ${id}`);
    // Implement delete functionality
  };

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text py-8">
        Current Products 🚀
      </h1>
      {products.length === 0 && (
        <p className="text-center text-xl text-gray-600">
          No products found:
          <NavLink to="/create">
            <h3 className="hover:underline text-2xl">Create Product</h3>
          </NavLink>
        </p>
      )}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
