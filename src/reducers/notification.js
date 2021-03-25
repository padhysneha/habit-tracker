const PUSH = "PUSH";
console.log("reducer");
const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case PUSH:
      console.log("push, reducer", action?.data);
      return [action?.data];
    default:
      return state; //we should always return something
  }
};

export default notificationReducer;
