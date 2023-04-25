<script>
    export let product;
</script>

<a
    href={product.link}
    target="_blank"
    rel="noopener noreferrer"
    class="product-card"
>
    <div class="product-image">
        <img src={product.image} alt={product.title} />
    </div>
    <div class="product-info">
        <p>{product.title}</p>
        <p id="price">${product.price}</p>
    </div>
</a>

<style>
    .product-card {
        display: grid;
        /* grid-template-columns: 1fr 2fr; */
        grid-template-rows: 2fr 1fr;

        padding: 5px;
        background-color: var(--primary-color);
        border: 1px solid var(--secondary-color);
    }

    .product-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-image img {
        width: auto;
        height: auto;
        max-width: 20vmax;
        max-height: 20vmax;
    }

    .product-info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;

        padding: 0 var(--unit);
    }

    #price{
        padding-top: var(--double-unit);
        padding-bottom: var(--double-unit);
    }

    @media only screen and (min-width: 600px) {

        .product-card {
            grid-template-rows: 3fr 1fr;
        }


        .product-image img {
            max-width: 14vmax;
            max-height: 14vmax;
        }

        .product-info {
            padding: var(--double-unit);
        }
    }
</style>
