const UserDetails = ({ userDetail }) => {
  console.log(userDetail);
  let { name, age, city } = userDetail;
  const userInfo = {
    border: "2px solid red",
    marginBottom: "10px",
    padding: "10px",
    width: "150px",
  };
  return (
    <div style={userInfo}>
      <h2>UserDetails</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default UserDetails;
