import React, {useEffect, useState} from "react";
import axios from "axios";

const Albums = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1')
        .then(response => response.data)
        .then(json => setImages(json.data))
    }, []);

    return (
        <div>
            {images.map((image) => (
                <img key={image.id} src={image.url} alt="Изображение" />
            ))}
        </div>
    )
}

export default Albums;