import React from "react";

function TodoItem(props){
    const deleteTodo = (index) => {
        setTodos(
            todos.filter(
                (_, i) => i !== index
            )
        )
    }

    return (
        <>
            <h3>List</h3>
            <ul>
                {
                    <li key={props.index}>
                        {props.todo}
                        <button onClick={() => deleteTodo(props.index)}>삭제</button>
                    </li>
                }
            </ul>
        </>
)
}

export default TodoItem;