import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                _limit: 10
            }
        })
            .then(response => response.data)
            .then(json => setUsers(json))
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <li>
                        <div className="list">
                            <h1 className="name">Имя: {user.name}</h1>
                            <h2 className="username">Логин: {user.username}</h2>

                            <Link to={`/${user.id}`}>
                                <button className="button">
                                    Подробнее
                                </button>
                            </Link>

                        </div>
                    </li>
                </div>
            ))}
        </div>
    )
}

export default User;
