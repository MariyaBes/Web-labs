import React from "react";
import CustomizableImage from "./CustomizableImage";

const ImageContainer = () => {

    const imageStyle = {
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px",
    }

    return(
        <div>
            <CustomizableImage 
                src = "https://images.wallpaperscraft.ru/image/single/planeta_kratery_kosmos_61032_1280x720.jpg"
                width = {700}
                heigth={400}
                alt="Mars"
                style={imageStyle}
            />
        </div>
    )
};

export default ImageContainer;