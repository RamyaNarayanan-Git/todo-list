import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
    const {todos, handleDelete} = props;
    return (
        <div>
            <ul className='main'>
                {todos.map((todo, i) => {
                    return (
                        <TodoCard {...props} key={i} index={i}>
                            <p>{todo}</p>
                        </TodoCard>
                        
                    )
                })}
            </ul>


        </div>
    )
}

export default TodoList