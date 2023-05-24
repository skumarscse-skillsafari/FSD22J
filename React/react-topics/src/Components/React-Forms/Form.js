import { useState } from "react";

const Form = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
    hobbies: ["", "", ""],
    address: "",
    isAdmin: "",
    selectSubject: "",
    fileUploads: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormFields((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setFormFields({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formFields.username}
            onChange={handleForm}
          />
        </p>
        <p>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formFields.email}
            onChange={handleForm}
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formFields.password}
            onChange={handleForm}
          />
        </p>
        <p> Hobbies:</p>
        <p>
          <label>
            <input
              type="checkbox"
              name="cricket"
              value={formFields.hobbies[0]}
            />
            Cricket
          </label>
          <label>
            <input
              type="checkbox"
              name="football"
              value={formFields.hobbies[1]}
            />
            Football
          </label>
          <label>
            <input
              type="checkbox"
              name="newspaper"
              value={formFields.hobbies[2]}
            />
            Newspaper
          </label>
        </p>
        <p>
          <textarea
            value={formFields.address}
            placeholder="Enter address"
            cols={22}
            rows={3}
            onChange={handleForm}
          ></textarea>
        </p>
        <p>isAdmin:</p>
        <p>
          <label>
            <input
              type="radio"
              name="isAdmin"
              value={formFields.isAdmin}
              onChange={handleForm}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="isAdmin"
              value={formFields.isAdmin}
              onChange={handleForm}
            />
            No
          </label>
        </p>
        <p>Select Subjects</p>
        <p>
          <select
            name="subjects"
            value={formFields.selectSubject}
            onChange={handleForm}
          >
            <option>English</option>
            <option>Maths</option>
            <option>Physics</option>
            <option>Chemistry</option>
          </select>
        </p>
        <p>Upload File:</p>
        <p>
          <input type="file" />
        </p>
        <p>
          <input type="submit" value="Submit" /> {"   "}
          <input type="reset" value="Clear" onClick={clearForm} />
        </p>
      </form>
    </>
  );
};

export default Form;
