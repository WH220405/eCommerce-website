import { getAllCategories } from "../api/api";

// Define an async function to categorize products
export default async function categorySort(allProducts) {
  try {
    // Fetch all categories from the API
    const categories = await getAllCategories();

    // Create an object to store products sorted by categories
    const productsSortedInCategories = {};

    // Initialize the categories object with empty arrays
    categories.forEach(category => {
      productsSortedInCategories[category] = [];
    });

    // Iterate over all products and append them to the corresponding category
    allProducts.forEach(product => {
      const productCategory = product.category;

      // Check if the product's category is valid (exists in categories)
      if (productsSortedInCategories.hasOwnProperty(productCategory)) {
        productsSortedInCategories[productCategory].push(product);
      } else {
        // Handle products with invalid categories
        console.warn(`Category not found for product: ${product.title}`);
      }
    });

    // Log the categorized products
    console.log(productsSortedInCategories);

    return productsSortedInCategories;
  } catch (error) {
    // Handle API or other errors here
    console.error("Error while categorizing products:", error);
    throw error; // Propagate the error
  }
}
