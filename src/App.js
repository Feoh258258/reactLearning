import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect} from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

class angryMentor extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			opened: false
		}
	}
	toggle() {
		this.setState({
			opened: !this.state.opened
		})
	}
}

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoader] = React.useState(true)
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() => {
        setTodos(todos)
        setLoader(false)
      }, 2000)
      
    })
  }, [])

function toggleTodo(id) {
  setTodos(todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  }))
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}
  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      
        <h1>Todo List (React)</h1>
        <Modal />

        <React.Suspense fallback={<p>Loading...</p>}>
          <div className="container">
          <AddTodo onCreate={addTodo}/></div>
        </React.Suspense>
        

        {loading && <Loader />}
        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />) :
          loading ? null : (<p>No todos!</p>
        )}
    </Context.Provider>
  );
}

export default App;
