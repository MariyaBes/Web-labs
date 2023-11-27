import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Countries from "./components/Countries";
import CustomPagination from "./components/Pagination";
import {Container, Button } from "@mui/material";



function App() {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCurr, setPageCurr] = useState(1)
    const [countPage] = useState(10)

    useEffect(() => {
        const getCountries = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
            } catch (error) {
                console.error('Error: ', error);
            } finally {
                setLoading(false);
            }
        };

        getCountries();
    }, []);

    const lastCountryI = pageCurr * countPage
    const firstCountryI = lastCountryI - countPage
    const countCountry = countries.slice(firstCountryI, lastCountryI)

    const onPageChange = (value) => {
        setPageCurr(value);
    };

    const nextPage = () => {
        setPageCurr(prev => prev + 1)
    }
    const prevPage = () => {
        setPageCurr((prev) => (prev > 1 ? prev - 1 : 1))
    }

    const firstPage = () => {
        setPageCurr(prev => 1)
    }
    const lastPage = () => {
        const lastPageNumber = Math.ceil(countries.length / countPage);
        setPageCurr(lastPageNumber)
    }

    return (
        <div className="App">
          <div className='app-header-title'>
            <h1 className="app-header-title__head">Программирование и поддержка веб-приложений</h1>
            <h2 className="app-header-title__desc"><strong>Пагинация.</strong></h2>
          </div>
            <Container>
                <Countries countries={countCountry} loading={loading}/>
                <CustomPagination page={countPage} totalCountries={countries.length} onPageChange={onPageChange} />

                <Button className={'btn-prev-page'} onClick={prevPage}>
                    Назад
                </Button>
                <Button className={'btn-next-page'} onClick={nextPage}>
                    Вперед
                </Button>
                <Button className={'btn-prev-page'} onClick={firstPage}>
                    В начало
                </Button>
                <Button className={'btn-next-page'} onClick={lastPage}>
                    В конец
                </Button>
            </Container>

        </div>
    );
}

export default App;

