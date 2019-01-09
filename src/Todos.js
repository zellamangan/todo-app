import React from 'react';

const Todos = ({todos, deleteToDo }) => {

    const todolist = todos.length ? (
        todos.map(todo => {
            return <div className="collection-item" key={todo.id}>
                    <span onClick={() => deleteToDo(todo.id)}> {todo.content} </span>
                    </div>
        })
    ) : (
        <p className="center"> you have no todos </p>
    );
    return (
        <div className="todos collection">
            {todolist}
        </div>
    );
}

export default Todos;