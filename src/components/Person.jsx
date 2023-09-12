import React from "react";

const Person = ({ name, age, email }) => {
    return (
        <div className="person">
            <div className="name">
                <p>Name: {name} </p>
            </div>

            <div className="sapec">
                <div className="age">
                    <p>Age: {age}</p>
                </div>
                <div className="email">
                    <p>Email: {email}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Person;