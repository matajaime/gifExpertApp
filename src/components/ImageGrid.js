import React, {useEffect, useState} from "react";
import { ImgGridItem } from "./ImgGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const ImageGrid = ({category}) => {
    
    //const[gifs, setGifs] = useState([]);
    //useEffect( () => {
    //    getGifs(category).then( setGifs );
    //}, [ category ]);

    const {loading, data:images} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        { loading ? <p>Cargando...</p> : 
        <div className="card-grid">
            { images.map((gif)=>{
                return <ImgGridItem key={gif.id} img={gif} />;
            })}
        </div>}
        </>
    )
};

ImageGrid.propTypes = {
    category: PropTypes.string.isRequired
}
