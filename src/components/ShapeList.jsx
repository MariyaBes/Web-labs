import React from "react";

const ShapeList = ({ shape, delShapes }) => {

    return (
        <div>
            <h1>Список фигур: </h1>
            {shape.map((shape, index) => (
                <div key={index}>
                    <li>{shape}</li>
                    <button
                        className="btnClick"
                        onClick={() => delShapes(index)}>
                        Удалить фигуру
                    </button>
                </div>
            ))}
        </div>
    );
};


export default ShapeList;