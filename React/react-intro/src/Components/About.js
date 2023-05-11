import imageTwo from "../images/image-two.jpg";

const About = () => {
  return (
    <div className="about">
      <h2>About Component</h2>
      <p>This is a paragraph</p>
      <img src={imageTwo} alt="image-two" height="200px" width="200px" />
      <hr />
    </div>
  );
};

export default About;
