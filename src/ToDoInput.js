import React, { useState } from 'react';
import T from 'prop-types';

export const ToDoInput = ({ onAdd }) => {
    const [value, setInputValue] = useState('');

    const onChange = event => setInputValue(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        if(value === '') return;
        onAdd(value);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input {...{ value }} {...{ onChange }}/>
        </form>
    );
};

ToDoInput.propTypes = {
    onAdd: T.func.isRequired,
}
