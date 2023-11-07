import React, {useEffect, useState} from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(
        {
            name: '',
            body: ''
        })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: 2
            }
        })
            .then(response => response.data)
            .then(json => setPosts(json))
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments', {
            params: {
                _limit: 2
            }
        })
            .then(response => response.data)
            .then(json => setComments(json))
    }, []);

    const createComment = (id, postId, name, body) => {
        axios.post('https://jsonplaceholder.typicode.com/comments', {
            postId: Date.now(),
            name: newComment.name,
            body: newComment.body
        })
            .then(response => {
                console.log("отправлен", response.data);
                setComments([...comments, response.data]);
                setNewComment({
                    name: '',
                    body: ''
                });
            })
    }

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>
                        Заголовок поста: {post.title}
                    </h2>
                    <p>
                        <strong>Контент:</strong> {post.body}
                    </p>

                    <div className={'mb-container'}>
                        {comments.map(comm => (
                            <div key={comm.id} className={'gap-posts'}>
                                <h3>
                                    Имя пользователя: {comm.name}
                                </h3>
                                <h4>
                                    Почта: {comm.email}
                                </h4>

                                <p>
                                    <strong>Оставленный комментарий:</strong> {comm.body}
                                </p>

                                <div className={'inputs'}>
                                    <input
                                        id={comm.userId}
                                        type={'text'}
                                        placeholder={'Введите свое имя...'}
                                        className={'input-name'}
                                        value={newComment.name}
                                        onChange={(e) => setNewComment({
                                            ...newComment,
                                            name: e.target.value
                                        })}
                                    />

                                    <textarea
                                        id={comm.userId}
                                        placeholder={'Оставить свой комментарий...'} className={'input-comment'}
                                        value={newComment.body}
                                        onChange={(e) => setNewComment({
                                            ...newComment,
                                            body: e.target.value
                                        })}
                                    />
                                    <button
                                        id={comm.userId}
                                        className={'book-buttom'}
                                        onClick={createComment}
                                    >Отправить данные</button>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            ))}
        </div>
    )
}

export default Posts;