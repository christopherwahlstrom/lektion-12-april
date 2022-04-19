import './ProductItem.css';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { product } = props;
    const path = `/produkt/${product.id}`;

    return (
        <article className='product-item'>
            <h3>{ product.title }</h3>
            <h4>{ product.author }</h4>
            <button className='product__button'>
                <Link to={ path }>Läs mer</Link>
            </button>
        </article>
    )
}

export default ProductItem;