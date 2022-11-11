import React, { useState } from 'react'
import ToDoForm from '../../components/ToDoForm/ToDoForm.component'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { GiCancel } from 'react-icons/gi'
import './home.styles.css'
const toDoFormField = {
  name: '',
}
const Home = () => {
  const [toDoList, setToDoList] = useState([
    { name: 'Example: Clean Room', id: 0 },
  ])
  const [addToDo, setToDo] = useState(toDoFormField)
  const [editToDoName, setEditToDoName] = useState('')
  const [buttonSuccess, setAddSuccess] = useState(false)
  const [buttonError, setAddError] = useState(false)
  const onEditToDoName = (e) => {
    e.preventDefault()
    setEditToDoName(e.target.value)
  }
  const onEditToDoNameSubmit = (e) => {
    e.preventDefault()
    setToDoList(
      toDoList.map((toDo) =>
        toDo.toggleEdit
          ? {
              ...toDo,
              name: editToDoName ? editToDoName : toDo.name,
              toggleEdit: false,
            }
          : toDo
      )
    )
    setEditToDoName('')
  }
  const editToDo = (toDoId) => {
    setEditToDoName('')
    // const toDo = toDoList.find((toDo) => toDo.id === toDoId)
    setToDoList(
      toDoList.map((t) =>
        toDoId === t.id
          ? { ...t, toggleEdit: !t.toggleEdit }
          : { ...t, toggleEdit: false }
      )
    )
  }
  const runWiggle = (btnType) => {
    setTimeout(resetBtn, 1000)
    console.log('setting to true')
    btnType === 'buttonError' && setAddError(true)
    btnType === 'buttonSuccess' && setAddSuccess(true)
    function resetBtn() {
      console.log('setting to false')
      btnType === 'buttonError' && setAddError(false)
      btnType === 'buttonSuccess' && setAddSuccess(false)
    }
  }
  const onAddToDo = (e) => {
    e.preventDefault()
    if (addToDo.name) {
      setToDoList([
        ...toDoList,
        { ...addToDo, id: Math.floor(Math.random() * 10000000) },
      ])
      setToDo(toDoFormField)
      console.log('added todo to list', toDoList)
      runWiggle('buttonSuccess')
    } else {
      runWiggle('buttonError')
    }
  }
  const deleteToDo = (toDoId) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== toDoId))
  }
  const onChangeAddToDoHandler = (e) => {
    const newToDo = { ...addToDo }
    newToDo[e.target.name] = e.target.value
    setToDo(newToDo)
  }
  return (
    <>
      <div className="toDo-container">
        <h1>Todo-List</h1>

        <ToDoForm
          onSubmitHandler={onAddToDo}
          onChangeHandler={onChangeAddToDoHandler}
          addToDo={addToDo}
          buttonSuccess={buttonSuccess}
          buttonError={buttonError}
        />
        {toDoList.map((toDo) => (
          <div key={toDo.id} className="toDo">
            {!toDo.toggleEdit ? (
              <div
                className="toDo-name-container cursor"
                onClick={() => editToDo(toDo.id)}>
                <AiOutlineEdit className="actions" />
                <p className="noselect">{toDo.name}</p>
              </div>
            ) : (
              <div>
                <form
                  onSubmit={onEditToDoNameSubmit}
                  className="toDo-name-container">
                  <button type="submit">
                    <BsCheckLg className="actions" />
                  </button>

                  <GiCancel
                    className="toDo-name-container cursor"
                    onClick={() => editToDo(toDo.id)}
                  />
                  <input
                    type="text"
                    placeholder={`${toDo.name}`}
                    className="toDo-name"
                    value={editToDoName}
                    onChange={(e) => onEditToDoName(e, toDo.id)}
                  />
                </form>
              </div>
            )}
            <div className="actions-container">
              <BiTrash
                className="actions delete"
                onClick={() => deleteToDo(toDo.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
