import UserDetails from "./UserDetails";

const StyleComponent = () => {
  let userDetails = [
    { id: 1, name: "John", age: 24, city: "Chennai" },
    { id: 2, name: "Jack", age: 30, city: "Bangalore" },
    { id: 3, name: "Prince", age: 28, city: "Mumbai" },
    { id: 4, name: "Mary", age: 32, city: "Delhi" },
    { id: 5, name: "Robert", age: 21, city: "Hyderabad" },
  ];

  let container = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  };
  return (
    <div style={container}>
      {userDetails.map((userDetail) => (
        <UserDetails key={userDetail.id} userDetail={userDetail} />
      ))}
    </div>
  );
};

export default StyleComponent;
