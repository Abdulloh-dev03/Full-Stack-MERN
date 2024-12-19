import React, { useState } from "react";
import { useProductStore } from "../store/product";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import UpdateModal from "./updateModel";

const ProductCard = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleUpdate = async (id, updatedProduct) => {
    try {
      const { success, message } = await updateProduct(id, updatedProduct);
      if (success) {
        console.log("Product updated successfully!");
        setModalOpen(false);
      } else {
        console.error("Failed to update product:", message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { success, message } = await deleteProduct(id);
      if (success) {
        console.log("Product deleted successfully!");
      } else {
        console.error("Failed to delete product:", message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="card rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-mono">{product.name}</h2>
        <p className="text-gray-400 text-sm mb-4">${product.price.toFixed(2)}</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-400 px-2 py-2 rounded-md"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(product._id)}
            className="bg-red-400 px-2 py-2 rounded-md"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <UpdateModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          product={product}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ProductCard;
