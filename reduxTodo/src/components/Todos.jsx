import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'
import { useState } from 'react'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [editText, setEditText] = useState("")

  const handleUpdate = (id) => {
    if (editText.trim() === "") return
    dispatch(updateTodo({ id, text: editText }))
    setEditText("")
  }

  return (
    <>
      <div>Todos</div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >

            {/* 🔵 INPUT FOR EDIT */}
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              placeholder={todo.text}
              className="bg-gray-700 text-white px-2"
            />

            <div className="flex gap-2">

              {/* ✅ UPDATE BUTTON */}
              <button
                onClick={() => handleUpdate(todo.id)}
                className="bg-green-500 px-3 rounded"
              >
                Update
              </button>

              {/* ❌ DELETE */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 px-3 rounded"
              >
                Delete
              </button>

            </div>

          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos