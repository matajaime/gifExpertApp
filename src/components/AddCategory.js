import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({addCategory}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(event);
        if ( inputValue != '' ) {
            addCategory(inputValue);
            setInputValue('');    
        }
    };

    const cleanInput = (event) => {
        event.target.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
        <h4>Add Category</h4>
        <input type="text" value={inputValue} placeholder="Ingresa una categoria" 
        onChange={handleInputChange} onFocus={cleanInput}/>
        </form>
    );
};

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired
}
