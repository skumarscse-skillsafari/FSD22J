import { CartState } from "../Context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
const Home = () => {
  const {
    state: { products },
    productState: { byQuickDelivery, byRating, byStock, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
