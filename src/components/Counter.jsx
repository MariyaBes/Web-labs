import React from "react";

const Counter = (props) => {
    return (
        <div>
            <h3>
                Наш счетчик: {props.counter}
            </h3>

            <button onClick={props.change}>Increment</button>
        </div>
    )
}

export default Counter;