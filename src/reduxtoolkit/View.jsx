import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo,deleteTodo,checkTodo } from "./todoSlice";

const View = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const listTask = useSelector(state=>state.mySlice)
  const listBackground = ['bg-secondary','bg-light','bg-danger','bg-info','bg-warning','bg-primary','bg-success']

  const addTask =()=>{
        if(task.trim() != ''){
            dispatch(addTodo({id:Date.now() , task:task , completed:false}))
            setTask('');
        }
  }

  const getBackground = ()=> {
    const randomIndex = Math.floor(Math.random() * listBackground.length);
    return listBackground[randomIndex];
  }
  
  const checkBox = (id)=>{
        dispatch(checkTodo(id));
  }

  const deleteTask= (id)=>{
    dispatch(deleteTodo(id))
  }


  return (
    <>
      <div className="container mt-5">
        <h1>Todo List</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add
          </button>
        </div>
        <ul className="list-group">
          {listTask.map((task) => (
            <li key={task.id} className={getBackground()+" list-group-item"}>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={task.completed || false}
                  onChange={() => checkBox(task.id)}
                />
                <label className="form-check-label">{task.task}</label>
                <button className="btn btn-danger btn-sm float-end"
                onClick={() => deleteTask(task.id)}> X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default View
