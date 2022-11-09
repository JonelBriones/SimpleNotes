import React, { useState } from 'react'
import ToDoForm from '../../components/ToDoForm/ToDoForm.component'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import './home.styles.css'
const Home = () => {
  const [toDoList, setToDoList] = useState([
    { name: 'clean room', id: 0 },
    { name: 'taking out trash', id: 1 },
  ])
  const editToDo = (toDoId) => {
    const toDo = toDoList.find((toDo) => toDoId === toDoId)
    setToDoList(
      toDoList.map((t) =>
        toDoId === t.id ? { ...toDo, isToggled: !toDo.isToggled } : t
      )
    )
  }
  const deleteToDo = (toDoId) => {
    // const toDo = allPages.find((t) => (toDoId = t.id))
    setToDoList(toDoList.filter((toDo) => toDo.id !== toDoId))
  }
  return (
    <>
      <div className="toDo-container">
        <h1>Todo-List</h1>
        <ToDoForm />
        {toDoList.map((toDo) => (
          <div key={toDo.id} className="toDo">
            <p>{toDo.name}</p>
            <div className="actions">
              <BsCheckLg />
              <AiOutlineEdit onClick={() => editToDo(toDo.id)} />
              <BiTrash onClick={() => deleteToDo(toDo.id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
