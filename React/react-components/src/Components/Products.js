import { products } from "./data";
import ProductDetails from "./ProductDetails";

const Products = () => {
  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <p>
            <strong>Product Name:</strong> {product.title}
          </p>
          <p>
            <img
              src={product.image}
              alt={`product-${product.id}`}
              height="200px"
              width="200px"
            />
          </p>
          <p>
            <strong>Product Price:</strong> {product.price}
          </p>
          <ProductDetails
            description={product.description}
            category={product.category}
            rating={product.rating.rate}
          />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;
