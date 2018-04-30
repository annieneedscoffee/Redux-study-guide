import axios from 'axios';
export const GET_LISTITEMS_PENDING = 'GET_LISTITEMS_PENDING';
export const GET_LISTITEMS_SUCCESS = 'GET_LISTITEMS_SUCCESS';

export const getListitems = () =>{
  return async (dispatch) => {
    dispatch({type: GET_LISTITEMS_PENDING})
    let listitems = await axios.get('http://localhost:8000/people')
    dispatch({
      type: GET_LISTITEMS_SUCCESS,
      payload: listitems
    })
  }
}
