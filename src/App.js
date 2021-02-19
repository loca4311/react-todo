import React, { useState } from 'react';
import uuid from 'react-uuid';

import Text from './Text';
import { ToDoInput } from './ToDoInput';
import { ToDoItem } from "./ToDoItem";

export const App = () => {
    const [todos, setTodos] = useState([]);

    const onAdd = text => setTodos([
        ...todos,
        {   
            _id: uuid(),
            text,
            completed: false,
        }
    ]);

    const onSwitch = todoId => 
        setTodos(
            todos.map(
                todo => todoId === todo._id
                ? { ...todo, completed: !todo.completed}
                : todo,
            )
        ) 

    const onRemove = todoId => setTodos(
        todos.filter(todo => todoId !== todo._id )
    );

    return (
        <div className="application">
            <Text size="10px" >Todos</Text>
            <ToDoInput onAdd={onAdd} />
            <div className="toDoList">
                {todos.map(
                    todo => <ToDoItem 
                        key={todo._id}
                        {...{todo}}
                        onSwitch={onSwitch}
                        onRemove={onRemove}
                    />
                )}

            </div>
            
        </div>
    );
};