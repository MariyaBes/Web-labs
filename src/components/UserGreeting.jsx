import React from "react";

const UserGreeting = (props) => {
    return (
        <div>
            <p>Привет, {props.user}!</p>
            <button className="btnClick" onClick={props.isLogout}>Выйти</button>
        </div>
    )
};

export default UserGreeting;