import React, {useEffect, useState} from "react";
const useLocalStorage = (defaultValue, key) => {
    const getValue = () => {
        const storageString = localStorage.getItem(key);

        if (storageString) {
            return JSON.parse(storageString);
        }

        return defaultValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;