import products from '../assets/products.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductInfo() {
    const { id } = useParams();
    console.log(id);
    const [book, setBook] = useState({});

    useEffect(() => {
        const book = products.filter((product) => {
            if (product.id === parseInt(id)) {
                return product;
            }
        });

        console.log(book);
        setBook(book[0]); // Eftersom filter returnerar en array plockar vi ut första elementet i arrayen
    }, [id]) //När vi har fått ett id från url:en, filtrera ut rätt bok

    return (
        <article>
            <h3>{ book.title }</h3>
            <h4>{ book.author }</h4>
            <p>{ book.text }</p>
        </article>
    )
}

export default ProductInfo;