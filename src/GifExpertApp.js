import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { ImageGrid } from "./components/ImageGrid";

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    const handleAdd = (newCategory) => {
        for ( let i = 0; i < categories.length; ++i ) {
            if ( categories[i] === newCategory ) {
                alert('Ya está agregado');
                return;
            }
        }
        setCategories( [newCategory, ...categories]);
    };

    return (
        <>
        <h2>Gif Expert App</h2>
        <AddCategory addCategory={handleAdd}/>
        <hr/>
            { categories.map( category => (
                <ImageGrid key={category} category={category} />
            ))}
        </>
    );
};

export default GifExpertApp;
