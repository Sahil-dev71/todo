import { useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useEffect } from 'react'

function App() {
  const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
    // console.log(todo.todo);
   setTodos(prevtodos=>[{id:Date.now(),...todo},...prevtodos])
  }
  const updateTodo=(id,tod)=>{
    setTodos(prevtodos=>
      prevtodos.map(todo=>
        todo.id===id?tod:todo
      )
    )
  }
  const deleteTodo=(id)=>{
    setTodos(prevtodos=>
      prevtodos.filter(todo=>{
        return todo.id!==id
      })
    )
  }
  
  const toggleComplete=(id)=>{
    setTodos((prevtodos)=>
      prevtodos.map((todo)=>
        todo.id===id?{...todo,completed:!(todo.completed)}:todo)
    
    )
    
  }
  useEffect(()=>{
    const presentTodo=JSON.parse(localStorage.getItem("todos"))
    if(presentTodo && presentTodo.length>0){
      setTodos(presentTodo);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* {todos.map((todo)=(
                          <div className='w-full' key={pretodo.id}>
                            <TodoItem todo={todo}/>
                          </div>
                        ))} */}
                         {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
