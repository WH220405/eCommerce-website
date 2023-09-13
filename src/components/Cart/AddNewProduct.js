import { useState } from "react";

const AddNewProduct = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const addCart = () => {
      fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify({
          userId: 5,
          date: 2020 - 02 - 03,
          products: [
            { productId: 5, quantity: 1 },
            { productId: 1, quantity: 5 },
          ],
        }),
      })
        .then(res => res.json())
        .then(json => console.log(json));
    };
    addCart();
  }, []);

  return <div>AddNewProduct</div>;
};

export default AddNewProduct;
