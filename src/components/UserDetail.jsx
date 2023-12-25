import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const UserDetail = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching user data: ", error));
    }, [id]);

    return (
        <div>
            <div>
                <h1>Подробная информация о пользователе:</h1>
                {user ? (
                    <>
                        <p><strong>Имя:</strong> {user.name}</p>
                        <p><strong>Логин:</strong> {user.username}</p>
                        <p><strong>Адрес:</strong> {user.address.street}</p>
                        <p><strong>Телефон:</strong> {user.phone}</p>
                        <p><strong>Работа:</strong> {user.company.name}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default UserDetail;
