import imageOne from "../images/image-one.jpg";
const Home = () => {
  return (
    <div className="home">
      <h2>Home Component</h2>
      <p>This is a paragraph</p>
      <img src={imageOne} alt="image-one" height="200px" width="200px" />
      <hr />
    </div>
  );
};

export default Home;
