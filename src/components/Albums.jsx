import React, {useEffect, useState} from "react";
import axios from "axios";

const Albums = () => {
    const [images, setImages] = useState([]);
    const [albums, setAlbums] = useState([]);
    const albumsPerPage = 2;
    const imagesPerPage = 2;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums', {
            params: {
                _limit: albumsPerPage
            }
        })
            .then(response => response.data)
            .then(json => setAlbums(json))
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos', {
            params: {
                _limit: imagesPerPage
            }
        })
            .then(response => response.data)
            .then(json => setImages(json))
    }, []);

    return (
        <div>
            {albums.map((album) => (
                <div key={album.id}>
                    <h2>
                        {album.title}
                    </h2>
                    <div>
                         {images.map(image => (
                             <img key={image.id} src={image.url} alt="Изображение" />
                         ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Albums;