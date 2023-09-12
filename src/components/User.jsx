import React from "react";

const User = (props) => {
    console.log(props.user)
    return (
        <div className="main">
            <p> {props.user.name} </p>
            <p> {props.user.age} </p>
        </div>
    )
}

export default User;