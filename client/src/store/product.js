import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (product) => {
    if (!product.name || !product.price || !product.image) {
      return { success: false, message: "Please fill in all fields" };
    }

    const res = await fetch("/api/v1/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product), 
    });

    const data = await res.json();
    if (res.ok) {
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product created successfully" };
    } else {
      return { success: false, message: data.message || "Error creating product" };
    }
  },
  fetchProducts: async ()=>{
    const res = await fetch ("/api/v1/product/get");
    const data = await res.json();
    set({products: data.data});
  },
  deleteProduct: async (id)=>{
    const res = await fetch(`/api/v1/product/delete/${id}`,{
      method: "DELETE",
    });
    const data = await res.json();
    if(!data.success){
      return {success:false, message:data.message}
    }
    set((state) => ({ products: state.products.filter((product) => product._id !== id) }));
    return {success:true, message:data.message};
  },
  updateProduct: async (id, updatedProduct) => {
    try {
      const res = await fetch(`/api/v1/product/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();
        if (!data.success) {
        return { success: false, message: data.message };
      }
      set((state) => ({
        products: state.products.map((product) =>
          product._id === id ? data.data : product
        ),
      }));
      return { success: true, message: data.message };
    } catch (error) {
      console.error("Error updating product:", error);
      return { success: false, message: "Something went wrong!" };
    }
  }
}));
