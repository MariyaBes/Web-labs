import React, { useState } from 'react';

const Product = (props) => {
    const [sortedProduct, setSortedProduct] = useState([...props.product]);

    const sortByName = () => {
        const sortedByName = [...sortedProduct].sort((a, b) => a.name.localeCompare(b.name));
        setSortedProduct(sortedByName);
    };

    const sortByPrice = () => {
        const sortedByPrice = [...sortedProduct].sort((a, b) => a.price - b.price);
        setSortedProduct(sortedByPrice);
    };

    const sortByDefault = () => {
        const sortedbyDef = [...sortedProduct].sort((a,b) => a.id - b.id);
        setSortedProduct(sortedbyDef);
    }

    return (
        <div>
            {sortedProduct.map((item, key) => (
                <div className="borderMap" key={key}>
                    <p><strong>ID:</strong> {item.id}</p>
                    <p><strong>Название:</strong> {item.name}</p>
                    <p><strong>Цена:</strong> {item.price} рублей</p>
                    <p><strong>Описание:</strong> {item.desc}</p>
                </div>
            ))}
            <button className="btnClick" onClick={sortByName}>Отсортировать по названию</button>
            <button className="btnClick" onClick={sortByPrice}>Отсортировать по цене</button>
            <button className="btnClick" onClick={sortByDefault}>По умолчанию</button>
        </div>
    );
}

export default Product;