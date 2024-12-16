import React, { useState } from 'react';

function TodoBoard(props) {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [editTodoIndex, setEditTodoIndex] = useState(null);
    const [editTodoValue, setEditTodoValue] = useState("");

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const startEditing = (index, todo) => {
        setEditTodoIndex(index);
        setEditTodoValue(todo);
    };

    const updateTodo = () => {
        if (editTodoIndex !== null) {
            const updatedTodos = todos.map((todo, index) =>
                index === editTodoIndex ? editTodoValue : todo
            );
            setTodos(updatedTodos);
            setEditTodoIndex(null);  // 끝나면 편집 상태 리셋
            setEditTodoValue('');    // 편집값 리셋
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-md">
            <h1 className="text-4xl font-semibold mb-4 text-center">To-Do List</h1>

            <div className="flex space-x-2 mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                    placeholder="리액트 가즈아"
                    className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                <button
                    onClick={() => addTodo(newTodo)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    추가
                </button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center p-3 mb-2 bg-gray-700 rounded-lg shadow-sm"
                    >
                        {editTodoIndex === index ? (
                            <input
                                type="text"
                                value={editTodoValue}
                                onChange={(e) => setEditTodoValue(e.target.value)}
                                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            />
                        ) : (
                            <span>{todo}</span>
                        )}

                        <div className="flex space-x-2">
                            <button
                                onClick={() => deleteTodo(index)}
                                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                삭제
                            </button>

                            {editTodoIndex === index ? (
                                <button
                                    onClick={updateTodo}
                                    className="px-3 py-1 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                                >
                                    수정 완료
                                </button>
                            ) : (
                                <button
                                    onClick={() => startEditing(index, todo)}
                                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                >
                                    수정
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoBoard;