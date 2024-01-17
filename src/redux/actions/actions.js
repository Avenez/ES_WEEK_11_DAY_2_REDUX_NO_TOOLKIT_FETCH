import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// --------FETCH ACTIONS

export const FETCH_DATA_REQUEST = () => ({ type: "FETCH_DATA_REQUEST" });

export const FETCH_DATA_SUCCESS = (data) => ({ type: "FETCH_DATA_SUCCESS", payload: data });

export const FETCH_DATA_FAILURE = (error) => ({ type: "FETCH_DATA_FAILURE", payload: error });

// --------QUERY ACTIONS

export const SET_QUERY = (query) => ({ type: "SET_QUERY", payload: query });

// --------ACTUAL FETCH

// export const handleSubmit = (query) => {
//   return async (dispatch) => {
//     // Dispaccia l'azione di richiesta
//     dispatch(FETCH_DATA_REQUEST());

//     try {
//       // Effettua la richiesta API utilizzando Axios
//       const response = await axios.get(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
//       const data = await response.json();
//       console.log("data dalla fetch" + data);
//       // Dispaccia l'azione di successo con i dati ricevuti dalla risposta
//       dispatch(FETCH_DATA_SUCCESS(data));
//     } catch (error) {
//       // In caso di errore, dispaccia l'azione di fallimento con l'errore
//       dispatch(FETCH_DATA_FAILURE(error.message));
//     }
//   };
// };

// export const handleSubmit = async (query) => {
//   return async (dispatch) => {
//     // dispatch({
//     //   type: "FETCH_DATA_REQUEST",
//     // });
//     try {
//       const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);

//       if (response.ok) {
//         const { data } = await response.json();
//         dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       // dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
//       console.log(error);
//     }
//   };
// };

export const handleSubmit = (query) => {
  return async (dispatch) => {
    dispatch(FETCH_DATA_REQUEST());
    try {
      console.log("try");
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(FETCH_DATA_SUCCESS(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      dispatch(FETCH_DATA_FAILURE(error));
      console.log(error);
    }
  };
};

export default handleSubmit;
