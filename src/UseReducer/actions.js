import * as actionTypes from  './actionTypes'
export const inc = () => {
  return {
    type: actionTypes.INC
  }
}
export const dec = () => {
  return {
    type: actionTypes.DEC
  }
}

export const reset = () => {
  return {
    type: actionTypes.RESET
  }
}

export const add_todo = (payload) =>{
  return {
    type: actionTypes.ADD_TODO,
    payload
  }
} 

export const remove_todo = (payload) =>{
  return {
    type: actionTypes.REMOVE_TODO,
    payload
  }
} 
