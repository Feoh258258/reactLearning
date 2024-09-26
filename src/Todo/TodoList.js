import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}


function TodoList(props) {
  return (
    <div className="container">
    <div className="row">
    <ul className="col-12 col-md-12 col-lg-12 col-sm-12" style={styles.ul}>
      { props.todos.map((todo, index) =>{
        return <TodoItem 
        todo={todo} 
        key={todo.id} 
        index={index} 
        onChange={props.onToggle}
       />
      })}
    </ul> 
    </div>
   </div>//container 
  )
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}
export default TodoList
