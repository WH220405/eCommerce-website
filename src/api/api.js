const BASE_URL = "https://fakestoreapi.com";

//get all products
const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//get single by Id

const getSingleProduct = async productId => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//get all categories

const getAllCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//get products in specific  category

const getProductsInCategory = async category => {
  try {
    const response = await fetch(`${BASE_URL}/products/${category}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//get sorted by description

const getSortResults = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products?sort=desc`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//post add product

const addNewProduct = async object => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: object.title,
        price: object.price,
        description: object.description,
        image: object.image,
        category: object.category,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//update PATCH product

const updateProductById = async object => {
  try {
    const response = await fetch(`${BASE_URL}/products/${product.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: object.title,
        price: object.price,
        description: object.description,
        image: object.image,
        category: object.category,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//delete by id

const deleteProduct = async productId => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const GetCategory = async category => {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (username, password) => {
  console.log(`user: ${username} password: ${password}`);
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const loginData = await response.json();
    return loginData;
  } catch (error) {
    console.log(error);
  }
};

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    // you can ^^ log the result
    // here below to view the json object before returning it
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

export {
  getAllProducts,
  getSortResults,
  getAllCategories,
  getSingleProduct,
  getProductsInCategory,
  addNewProduct,
  updateProductById,
  deleteProduct,
  GetCategory,
  loginUser,
};
