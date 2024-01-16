const initialstate = {
  data: [],
  isLoading: true,
  error: null,
};

const fetchReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      console.log("request");
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case "FETCH_DATA_SUCCESS":
      console.log("success");
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case "FETCH_DATA_FAILURE":
      console.log("failure");
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      console.log("default");
      return initialstate;
  }
};

export default fetchReducer;
