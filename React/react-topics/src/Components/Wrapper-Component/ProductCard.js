import ProductDetail from "./ProductDetail";
import Card from "./Card";

const ProductCard = ({ product }) => {
  let { title, description, ...otherProps } = product;
  return (
    <Card>
      <h2>Title: {title}</h2>
      <h3>Description: {description}</h3>
      <ProductDetail otherProps={otherProps} />
    </Card>
  );
};

export default ProductCard;
