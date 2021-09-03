import * as actionTypes from './actionTypes';
const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.INC: 
      return { ...state, count: state.count + 1 }
    case actionTypes.DEC:
      return { ...state, count: state.count - 1 }
    case actionTypes.RESET:
      return { ...state, count: 0 }
    case actionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }
    case actionTypes.REMOVE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
    default: 
      return state
  }
}
export default reducer;
