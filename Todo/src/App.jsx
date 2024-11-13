import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
 import TodoList from './TodoList'
import TodoList12 from './TodoList12'
import Todo123 from './Todo123'
import  Delete from './Delete'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Delete/>
      {/* <Navbar/> */}
     {/* <TodoList/>  */}
     {/* <TodoList12/> */}
     {/* <Todo123/> */}
    </>
  )
}

export default App
