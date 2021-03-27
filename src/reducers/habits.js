export default (habits = [], action) => {
  console.log("action", action.type);
  switch (action.type) {
    case "DELETE":
      return habits.filter((post) => post._id != action.payload);
    case "UPDATE":
      return habits.map((habit) =>
        habit._id == action.payload._id ? action.payload : habit
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...habits, action.payload];
    case "STREAK":
      return habits.map((habit) =>
        habit._id == action.payload._id ? action.payload : habit
      );
    default:
      return habits;
  }
};
