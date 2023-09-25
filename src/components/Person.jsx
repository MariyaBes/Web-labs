import React from "react";

const Person = (props) => {
    return (
        <div className="person">
            <div className="name">
                <p>Name: {props.person.name} </p>
            </div>

            <div className="sapec">
                <div className="age">
                    <p>Age: {props.person.age}</p>
                </div>
                <div className="email">
                    <p>Email: {props.person.email}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Person;