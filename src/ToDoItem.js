import React from 'react';
import T from 'prop-types';

import { toDoListPropTypes } from "./propTypes";
import CheckBox from './CheckBox';
import Text from './Text';
import Icon from './Icon'; 

export const ToDoItem = ({ todo, onSwitch, onRemove}) => {
     return !!todo && (
        <div className="toDoItem">
            <CheckBox {...{todo, onSwitch}} />
            {console.log(todo)}
            <Text 
                size="10px" 
                color={todo.completed ? "red" : "black"} 
            >
                {todo.text}
            </Text>
            <Icon name="remove" onClick={() => onRemove(todo._id)}/>
        </div>
     );
};


ToDoItem.protoTypes = {
    toDoListPropTypes,
    onRemove: T.func.isRequired, 
};
