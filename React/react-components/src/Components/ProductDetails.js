const ProductDetails = ({ description, category, rating }) => {
  //   console.log(description);
  //   console.log(category);
  //   console.log(rating);
  return (
    <>
      <p>
        <strong>Product Description:</strong> {description}
      </p>
      <p>
        <strong>Product Category:</strong> {category}
      </p>
      <p>
        <strong>Product Rating:</strong> {rating}
      </p>
    </>
  );
};

export default ProductDetails;
