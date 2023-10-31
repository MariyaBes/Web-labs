const Books = (props) => {
    const { items = [], addToOrder } = props;

    return (
        <div className="books">
            {items.map((book) => (
                <Book key={book.id} addToOrder={addToOrder} {...book} />
            ))}
        </div>
    );
};

const Book = (props) => {
    const { id, title, price, addToOrder } = props;

    return (
        <div className="book">
            <h2 className="book-title">{title}</h2>
            <span><strong>{price}</strong> рублей</span>
            <button className="book-buttom" onClick={() => addToOrder(id)}>Buy</button>
        </div>
    );
};

export { Books };