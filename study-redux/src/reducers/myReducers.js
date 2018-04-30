import{
  GET_LISTITEMS_PENDING,
  GET_LISTITEMS_SUCCESS
} from '../actions/list'

export default(state= [], action)=>{
  switch (action.type){
    case GET_LISTITEMS_PENDING:
      return state;
    case GET_LISTITEMS_SUCCESS:
      return  [...action.payload.data];  
    default:
    return state;
  }
}
