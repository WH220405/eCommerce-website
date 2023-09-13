import { useEffect, useState } from "react";
import classes from "./Products.module.css";
import { deleteProduct } from "../../api/api";
import { Link } from "react-router-dom";

const BASE_URL = "https://fakestoreapi.com";

const UpdateProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getAllProducts();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteProduct(id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <h1>All Products</h1>
      {products.map(product => (
        <div className={classes.product} key={product.id}>
          <h2>{product.title}</h2>
          <span>{product.price}</span>
          <p>{product.category}</p>

          <img
            className={classes.img}
            src={product.image}
            alt={product.title}
          />
          <button className={classes.delete} onClick={handleDelete}>
            Delete
          </button>
          <button className={classes.update}>
            <Link to="/update:id">Update</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpdateProduct;
