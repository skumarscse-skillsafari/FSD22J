import { useParams, Link, useOutletContext } from "react-router-dom";
const Product = () => {
  const products = useOutletContext();

  console.log(useParams());
  const { productID } = useParams();

  const product = products.find((prod) => prod.id === Number(productID));
  console.log(product);
  return (
    <div>
      <h2>Product Component</h2>
      <p>Description: {product?.description}</p>
      <p>
        <img
          src={product?.image}
          height={100}
          width={100}
          alt={`image-${product?.id}`}
        />
      </p>
      <p>Rate: {product?.rating?.rate}</p>
      <p>Count: {product?.rating?.count}</p>
      <Link to="/products">Back to products page</Link>
    </div>
  );
};

export default Product;
