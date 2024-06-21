import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface ITodo {
  id: string
  name: string
  isDone: boolean
  isEdit: boolean
}

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [todo, setTodo] = useState('')
  const [editTodo, setEditTodo] = useState('')

  useEffect(() => {
    console.log(todos)
  }, [todos])

  const AddItem = () => {
    const newTodo: ITodo = {
      id: uuidv4(),
      name: todo,
      isDone: false,
      isEdit: false
    }
    setTodos([...todos, newTodo])
    setTodo('')
  }

  const RemoveItem = (id: string, name: string) => {
    setTodos(todos.filter((item) => item.id != id || item.name != name))
  }

  const EditItem = (id: string, name: string) => {
    if (editTodo)
      setTodos(
        todos.map((item) => (item.id == id && item.name == name ? { ...item, name: editTodo, isEdit: false } : item))
      )
    else RemoveItem(id, name)
  }

  const StartEdit = (todo: ITodo) => {
    setTodos(
      todos.map((item) => ({
        ...item,
        isEdit: item.id == todo.id
      }))
    )
    setEditTodo(todo.name)
  }

  const ToggleDone = (id: string) => {
    setTodos(todos.map((item) => (item.id == id ? { ...item, isDone: !item.isDone } : item)))
  }

  return (
    <main className='flex justify-center items-center'>
      <section className='flex flex-col gap-5 items-center'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-4'>
            <h1 className='text-2xl font-bold'>To-do List</h1>
            <img
              className='h-[8%] w-[8%]'
              src='https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f4dd.svg'
            />
          </div>
          <div className='flex w-full bg-gray-200 rounded-3xl'>
            <input
              className='px-6 bg-transparent w-full outline-none placeholder-gray-700'
              placeholder='Add your task'
              type='text'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              className='bg-black text-white rounded-3xl px-[40px] py-[12px]'
              onClick={() => {
                if (todo) {
                  AddItem()
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
        <ul className='flex flex-col gap-2 w-full'>
          {todos.map((item) => (
            <div>
              {item.isEdit ? (
                <div className='flex gap-2 items-center'>
                  <input
                    className='border-2 rounded-lg p-2 flex-1 px-6'
                    type='text'
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                  />
                  <button
                    className='bg-black text-white rounded-xl px-[10px] py-[10px]'
                    onClick={() => EditItem(item.id, item.name)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className='flex gap-4 items-center cursor-pointer justify-between px-2'>
                  <input className='w-[20px] h-[20px]' type='checkbox' onClick={() => ToggleDone(item.id)} />
                  <li
                    className={`flex-1 ${item.isDone ? 'line-through text-gray-500' : ''}`}
                    onClick={() => StartEdit(item)}
                    key={item.id}
                  >
                    {item.name}
                  </li>
                  <button
                    className='text-gray-800 text-xl font-medium px-[10px] py-[10px]'
                    onClick={() => RemoveItem(item.id, item.name)}
                  >
                    x
                  </button>
                </div>
              )}
            </div>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Todo
