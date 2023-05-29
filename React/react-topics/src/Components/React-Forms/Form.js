import { useState } from "react";
import FileBase from "react-file-base64";
const Form = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
    hobbies: [],
    address: "",
    isAdmin: "",
    selectSubject: "",
    fileUploads: "",
  });

  const [data, setData] = useState(false);

  const handleForm = (e) => {
    if (e.target.type === "checkbox") {
      let data = formFields.hobbies;
      data.push(e.target.value);
      setFormFields((form) => {
        return {
          ...form,
          hobbies: data,
        };
      });
    } else {
      const { name, value } = e.target;
      setFormFields((prevVal) => {
        return {
          ...prevVal,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    setData(true);
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
        <p>
          <strong>Hobbies:</strong>
        </p>
        <p>
          <label>
            <input type="checkbox" value="cricket" onChange={handleForm} />
            Cricket
          </label>
          <label>
            <input type="checkbox" value="football" onChange={handleForm} />
            Football
          </label>
          <label>
            <input type="checkbox" value="newspaper" onChange={handleForm} />
            Newspaper
          </label>
        </p>
        <p>
          <textarea
            value={formFields.address}
            placeholder="Enter address"
            name="address"
            cols={22}
            rows={3}
            onChange={handleForm}
          ></textarea>
        </p>
        <p>
          <strong>isAdmin:</strong>
        </p>
        <p>
          <label>
            <input
              type="radio"
              name="isAdmin"
              value="Yes"
              checked={formFields.isAdmin === "Yes"} // false
              onChange={handleForm}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="isAdmin"
              value="No"
              checked={formFields.isAdmin === "No"} // false
              onChange={handleForm}
            />
            No
          </label>
        </p>
        <p>
          <strong>Select Subjects:</strong>
        </p>
        <p>
          <select
            value={formFields.selectSubject}
            onChange={handleForm}
            name="selectSubject"
          >
            <option value="">---Select Subject---</option>
            <option value="English">English</option>
            <option value="Maths">Maths</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
          </select>
        </p>
        <p>
          <strong>Upload File:</strong>
        </p>
        <p>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormFields({ ...formFields, fileUploads: base64 })
            }
          />
        </p>
        <p>
          <input type="submit" value="Submit" /> {"   "}
          <input type="reset" value="Clear" onClick={clearForm} />
        </p>
      </form>
      <hr />
      {data && (
        <div>
          <p>Username: {formFields.username}</p>
          <p>Email: {formFields.email}</p>
          <p>Hobbies: {formFields.hobbies.join(", ")}</p>
          <p>Address: {formFields.address}</p>
          <p>isAdmin: {formFields.isAdmin}</p>
          <p>Selected Subject: {formFields.selectSubject}</p>
          <p>
            <img src={formFields.fileUploads} height={100} width={100} />
          </p>
        </div>
      )}
    </>
  );
};

export default Form;
