import React, {useState} from 'react';

function TodoBoard(props){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    const deleteTodo = (index) => {
        setTodos(
            todos.filter(
                (_, i) => i !== index
            )
        )
    }

    return(
        <>
            <div>
                <h1>To-Do List</h1>
                <input type="text" value={newTodo} placeholder="리액트 가즈아" onChange={event => {
                    setNewTodo(event.target.value)
                }}/>
                <button onClick={() => addTodo(newTodo)}>추가</button>
            </div>

            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>삭제</button>
                </li>
            ))}
        </>
    )
}

export default TodoBoard