import React from "react";

const ShapeList = ({ shape }) => {
    return(
        <div>
            <h1>Список фигур: </h1>
            {shape.map((shapes, index) =>
                (<li key={index}>{shapes}</li>)
            )}
        </div>
    )
}

export default ShapeList;