const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Component</h2>
      <form>
        <p>
          <input type="text" name="username" placeholder="Enter username" />
        </p>
        <p>
          <input type="email" name="email" placeholder="Enter email" />
        </p>
        <p>
          <textarea
            placeholder="Enter your message"
            cols="22"
            rows="5"
          ></textarea>
        </p>
        <p>
          <button>Submit</button>
          {"           "}
          <button>Clear</button>
        </p>
      </form>
      <hr />
    </div>
  );
};

export default Contact;
