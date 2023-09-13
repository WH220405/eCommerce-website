import { useState } from "react";
import { addNewProduct } from "../../api/api";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [addProduct, setAddProduct] = useState({
    title: "",
    price: "null",
    category: "",
    description: "",
    image: "",
    cover: "",
  });

  const navigation = useNavigate();

  const handleChange = e => {
    setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
  };
  console.log(addProduct);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addNewProduct(addProduct);
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add Products</h1>
      <form>
        <lebal>Title</lebal>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={addProduct}
          onChange={handleChange}
        />
        <lebal>Price</lebal>
        <input
          type="number"
          placeholder="price"
          name="price"
          value={addProduct}
          onChange={handleChange}
        />
        <lebal>Category</lebal>
        <input
          type="text"
          placeholder="category"
          name="category"
          value={addProduct}
          onChange={handleChange}
        />
        <lebal>Description</lebal>
        <input
          type="text"
          placeholder="description"
          value={addProduct}
          onChange={handleChange}
        />
        <lebal>Image</lebal>
        <input
          type="text"
          placeholder="image"
          value={addProduct}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="cover"
          name="cover"
          onChange={handleChange}
        ></input>
        <button onSubmit={handleSubmit}>Add new Product.</button>
      </form>
    </div>
  );
};

export default AddProducts;
