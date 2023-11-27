import React from 'react'

const Countries = ({
    countries,
    loading
                   }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className={'list-countries'}>
            {countries.map((country, index) => (
                <li key={index} className={'list-countries__item'}>
                    {country.name.common}
                    <img src={country.flags?.png} alt={'Flag'} className={'list-countries__image'} width={'100'} height={'60'}/>
                </li>
            ))}
        </ul>
    );
}

export default Countries