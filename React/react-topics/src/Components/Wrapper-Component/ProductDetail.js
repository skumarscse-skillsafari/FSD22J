const ProductDetail = ({ otherProps }) => {
  let {
    id,
    price,
    image,
    category,
    rating: { rate, count },
  } = otherProps;
  return (
    <div>
      <p>
        <u>Product Details</u>
      </p>
      <p>Product Price: {price}</p>
      <p>
        <img src={image} height={100} width={100} />
      </p>
      <p>Product Category: {category}</p>
      <p>Product Rate: {rate}</p>
      <p>Product Count: {count}</p>
      <hr />
    </div>
  );
};

export default ProductDetail;
