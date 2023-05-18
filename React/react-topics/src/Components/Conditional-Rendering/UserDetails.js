const UserDetails = ({ user }) => {
  let { name, age, isAdmin, designation, city } = user;
  return (
    <div>
      <h2>User Details Component</h2>
      <p>Username: {name}</p>
      <p>User Age: {age}</p>
      <p>User Designation: {designation}</p>
      <p>User isAdmin?: {isAdmin ? "Yes" : "No"}</p>
      <p>User City: {city}</p>
    </div>
  );
};

export default UserDetails;
