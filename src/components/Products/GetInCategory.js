import { useState, useEffect } from "react";
import { GetCategory } from "../../api/api";
import { useParams } from "react-router-dom";

const GetInCategory = () => {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getproduct = async () => {
      const result = await GetCategory(category);
      setCategories(result);
      console.log(result);
    };
    getproduct();
  }, []);

  return (
    <div className="container">
      {categories.map(category => (
        <div>
          <h3>{category.title}</h3>
          <span>{category.price}</span>
          <p>{category.category}</p>
          <p>{category.description}</p>
          <img src={category.image} alt={category.title} />
          <button>ADD TO CART</button>
        </div>
      ))}
    </div>
  );
};

export default GetInCategory;
