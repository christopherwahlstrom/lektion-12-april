import products from '../assets/products.json';

import ProductItem from '../components/ProductItem';

function Products() {
    const productItems = products.map((product) => {
        return <ProductItem product={ product } key={ product.id } />
    });

    return (
        <section className='products'>
            { productItems }
        </section>
    )
}

export default Products;