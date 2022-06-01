import React from "react";

export const ImgGridItem = ({img}) => {
    //console.log(img);
    return (
        <div className="card animate__animated animate__fadeInDownBig">
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    );
};
