import React from 'react';
import { useProductStore } from '../store/product';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Create = () => {
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });
  const [successMessage, setSuccessMessage] = React.useState(""); // State to hold success/error message
  const [isSuccess, setIsSuccess] = React.useState(false); // State to track success or error

  const { createProduct } = useProductStore();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    
    if (!product.name || !product.price || !product.image) {
      setSuccessMessage("Please fill in all fields"); 
      setIsSuccess(false); // Indicate error
      setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 5 seconds
      return;
    }

    const { success, message } = await createProduct(product);

    if (success) {
      setSuccessMessage("Product created successfully!"); 
      setIsSuccess(true); 
      setTimeout(() => setSuccessMessage(""), 3000);
      setProduct({ name: "", price: "", image: "" });
    } else {
      setSuccessMessage(message || "Something went wrong!");
      setIsSuccess(false); 
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  return (
    <div className='container mx-auto text-center font-mono max-md:w-full'>
      <h1 className='text-3xl my-10'>Create New Product</h1>
      <div>
        <form action="" className='flex flex-col gap-5 w-96 mx-auto max-md:w-full px-3'>
          <input 
            type="text" 
            placeholder='Name' 
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className='p-2 rounded-md bg-white text-black dark:bg-gray-700 dark:text-white' 
          />
          <input 
            type="text" 
            placeholder='Price'
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className='p-2 rounded-md bg-white text-black dark:bg-gray-700 dark:text-white' 
          />
          <input 
            type="text" 
            placeholder='Image Url'
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            className='py-2 px-3 outline-none rounded-md bg-white text-black dark:bg-gray-700 dark:text-white' 
          />
          <button
            onClick={handleAddProduct} 
            className='text-white py-3 px-5 rounded-xl my-10 bg-blue-600 dark:text-white'>
            Add Product
          </button>
        </form>
      </div>

      {successMessage && (
        <div 
          className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-md shadow-lg 
            ${isSuccess ? 'bg-green-500' : 'bg-red-500'} text-white`}
        >
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Create;
