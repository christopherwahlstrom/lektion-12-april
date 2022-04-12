import './ProductItem.css';

function ProductItem(props) {
    const { product } = props;

    return (
        <article className='product-item'>
            <h3>{ product.title }</h3>
            <h4>{ product.author }</h4>
            <button>Läs mer</button>
        </article>
    )
}

export default ProductItem;