import { GET_LOGS, SET_LOADING, LOGS_ERROR} from './types'

// Get logs from database---------------------->
// 2 ways to fetch 

// First Way----------
// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     };
// };

// Second Way ---------------- Get Logs from server
export const getLogs = () => async dispatch => {
   try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
        type: GET_LOGS,
        payload: data
    });
       
   } catch (err) {
       dispatch({
           type: LOGS_ERROR,
           payload: err.response.data
       })
   }
};


// Set loading to true ---------------------->
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};