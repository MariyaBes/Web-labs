import './App.css';
import React, {useEffect, useState} from 'react';
import PostService from "./API/PostService";
import {useFetching} from "./hooks/useFetching";
import {usePosts} from "./hooks/usePosts";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Loader from "./components/UI/Loader/Loader";
import PostList from "./components/PostList";
import Pagination from "./components/UI/pagination/Pagination";
import { getPageCount } from "./utils/page";
import {usePagination} from "./hooks/usePagination";

function App() {
    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);

    const pagesArray = usePagination(totalPages);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const [fetching, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetching();
    }, [page]);

    const changePage = (p) => {
        setPage(p);
    };

    return (
        <div className="App">
            <div className='app-header-title'>
                <h1 className="app-header-title__head">Программирование и поддержка веб-приложений</h1>
                <h2 className="app-header-title__desc"><strong>Пагинация.</strong></h2>
            </div>

            <hr style={{margin:"15px 0"}}/>
            <MyButton onClick={() => setModal(true)}>Создать пост </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                postError && <h1>Error ${postError}</h1>
            }
            {
                isLoading
                    ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    : <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            }
            <Pagination
                totalPages={totalPages}
                changePage={changePage}
                page={page}
                pagesArray={pagesArray}
            />
        </div>
    );
}

export default App;

