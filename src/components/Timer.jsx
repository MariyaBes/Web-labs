import React, {useEffect, useState} from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
    };
    const stopTimer = () => {
        setIsRunning(false);
    };
    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
    };
    return (
        <div>
            <h2>Применение хука useEffect для работы с таймером</h2>
            <div>
                <p>Время: {time} секунд</p>
                <button className="book-buttom" onClick={startTimer}>Старт</button>
                <button className="book-buttom" onClick={stopTimer}>Стоп</button>
                <button className="book-buttom" onClick={resetTimer}>Сброс</button>
            </div>
        </div>
    );
}
