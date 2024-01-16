const initialstate = {
  data: [],
  isLoading: true,
  error: null,
};

const fetchReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchReducer;
