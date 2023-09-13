import { useEffect, useState } from "react";
import classes from "./Products.module.css";
//import { deleteProduct } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../api/api";
import { getAllCategories } from "../../api/api";
//import { Row, Col } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getproduct = async () => {
      const result = await getAllProducts();
      const category = await getAllCategories();
      setCategories(category);
      setProducts(result);
      console.log(category);
    };
    getproduct();
  }, []);

  const handleCart = async () => {
    await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
      }),
    })
      .then(res => res.json())
      .then(json => console.log(json));
  };

  return (
    <>
      <div className={classes.container}>
        <h1>Welcome to the Store!</h1>
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
            {/* <button className={classes.delete} onClick={handleDelete}>
            Delete
          </button>
          <button className={classes.update}>
            <Link to="/update:id">Update</Link>
          </button> */}
            <button onClick={() => navigate(`/products/${product.id}`)}>
              Details
            </button>
            <button className={classes.cart} onClick={handleCart}>
              Add to Cart
            </button>
          </div>
        ))}
        {categories.map(c => (
          <button onClick={() => navigate(`/category/${c}`)}>{c}</button>
        ))}
      </div>
    </>
  );
};

export default Products;
