import React from 'react'
import './toDoForm.styles.css'
const ToDoForm = () => {
  return (
    <div className="toDoForm">
      <form>
        <input type="text" placeholder="To-do" />
      </form>
      <p>Add</p>
    </div>
  )
}

export default ToDoForm
