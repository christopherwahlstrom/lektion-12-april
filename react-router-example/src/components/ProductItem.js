import './ProductItem.css';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { product } = props;
    const path = `/produkt/${product.id}`;

    return (
        <article className='product-item'>
            <h3>{ product.title }</h3>
            <h4>{ product.author }</h4>
            <Link to={ path }>Läs mer</Link>
        </article>
    )
}

export default ProductItem;