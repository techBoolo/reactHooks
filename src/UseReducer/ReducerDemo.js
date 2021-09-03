import React, { useReducer, useState } from 'react';
import reducer from './reducer';
import * as actions from './actions';
const initialState = { count: 0, todos: [] }

const ReducerDemo = (props) => {
  const [ state, dispatch ] = useReducer(reducer, initialState) 
  const [ todo , setTodo ] = useState('');

  const addTodo = (ev) => {
    ev.preventDefault();
    const data = {
      title: todo,
      id: Date.now()
    }
    setTodo('')
    dispatch(actions.add_todo(data));
  }
  return (
    <>
    <button onClick={() => dispatch(actions.inc())}>inc</button>
     <span style={{ margin: '10px', padding: '10px'}}>{ state.count }</span>      
    <button onClick={() => dispatch(actions.dec())}>dec</button>
    <div>
      <button onClick={() => dispatch(actions.reset())}>reset</button>
    </div>
    <ul>
      {
        state.todos.map(todo => <li key={todo.id} onClick={(ev) => dispatch(actions.remove_todo(todo.id))}>{todo.title}</li>)
      }
    </ul>
    <form onSubmit={addTodo}>
      <input value={todo} onChange={(ev) => setTodo(ev.target.value) } />
      <button type='submit'>Add</button>
    </form>
    </>
  );
};

export default ReducerDemo;
