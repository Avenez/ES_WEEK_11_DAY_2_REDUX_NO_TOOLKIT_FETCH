const queryReducer = (state = { query: "" }, action) => {
  switch (action.type) {
    case "SET_QUERY":
      console.log("payload " + action.payload);
      return {
        ...state,
        query: action.payload,
      };

    default:
      console.log("default di query");
      return state;
  }
};

export default queryReducer;
