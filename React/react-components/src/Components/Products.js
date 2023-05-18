// import { products } from "./data";
import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(products);

  // useEffect() => perform the logics defined inside the callback function whenever
  // the page loads

  const fetchData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProducts(data);
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);

    setProducts((prev) => prev.filter((prod) => prod.title.includes(search)));
  };
  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, []);

  return (
    <div className="products-container">
      <p>
        <input
          type="search"
          name="search"
          placeholder="Search something..."
          onChange={handleSearch}
          value={search}
        />
      </p>
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
