// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/React-Router-Dom/About";
import Contact from "./Components/React-Router-Dom/Contact";
import Home from "./Components/React-Router-Dom/Home";
import Nav from "./Components/React-Router-Dom/Nav";
import Projects from "./Components/React-Router-Dom/Projects";
import Error from "./Components/React-Router-Dom/Error";
import Products from "./Components/React-Router-Dom/Products";
import Product from "./Components/React-Router-Dom/Product";
import SharedComponent from "./Components/React-Router-Dom/SharedComponent";
// import User from "./Components/Conditional-Rendering/User";
// import StyleComponent from "./Components/Style-Component/StyleComponent";
// import ProductCard from "./Components/Wrapper-Component/ProductCard";
// import { useState, useEffect } from "react";

function App() {
  // const [products, setProducts] = useState([]);

  // async function fetchProducts(url) {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setProducts(data);
  // }

  // useEffect(() => {
  //   fetchProducts("https://fakestoreapi.com/products");
  // }, []);

  return (
    <div className="App">
      {/* <h2>StyleComponent</h2>
      <StyleComponent /> */}
      {/* {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })} */}
      {/* <User /> */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<SharedComponent />}>
            <Route index element={<Products />} />
            <Route path=":productID" element={<Product />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
