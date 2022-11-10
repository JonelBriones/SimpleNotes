import React, { useState } from 'react'
import './toDoForm.styles.css'
const ToDoForm = (props) => {
  const {
    onSubmitHandler,
    onChangeHandler,
    addToDo,
    buttonSuccess,
    buttonError,
  } = props
  return (
    <div className="toDoForm">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="To-do"
          name="name"
          value={addToDo.name}
          onChange={onChangeHandler}
          className={buttonError ? 'btn-add-wiggle' : ''}
        />
        <button type="submit" className={buttonSuccess ? 'btn-add-wiggle' : ''}>
          Add
        </button>
      </form>
    </div>
  )
}

export default ToDoForm
