/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const CustomizableImage = ({ src, alt, width, height, style }) => {
    return (
        <div>
            <img src={src} alt={alt} width={width} height={height} style={style}></img>
        </div>
    )
};

export default CustomizableImage;