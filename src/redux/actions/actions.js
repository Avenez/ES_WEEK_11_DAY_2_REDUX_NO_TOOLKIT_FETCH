// --------FETCH ACTIONS

export const FETCH_DATA_REQUEST = () => ({ type: "FETCH_DATA_REQUEST" });

export const FETCH_DATA_SUCCESS = (data) => ({ type: "FETCH_DATA_SUCCESS", payload: data });

export const FETCH_DATA_FAILURE = (error) => ({ type: "FETCH_DATA_FAILURE", payload: error });

// --------QUERY ACTIONS

export const SET_QUERY = (query) => ({ type: "SET_QUERY", payload: query });

// --------ACTUAL FETCH

const handleSubmit = async (query) => {
  console.log("handle submit avviene");
  return async (dispatch) => {
    dispatch(FETCH_DATA_REQUEST());

    try {
      console.log("sono nel try");
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      const data = await response.json();
      console.log("data dalla fetch" + data);
      await dispatch(FETCH_DATA_SUCCESS(data));
    } catch (error) {
      await dispatch(FETCH_DATA_FAILURE(error.message));
    }
  };
};

export default handleSubmit;
