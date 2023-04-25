<script>
    export let product;
</script>

<a href="/product/{product.id}" class="product-card">
    <div class="product-image">
        <img src={product.image} alt={product.title} />
    </div>
    <div class="product-info">
        <p>{product.title}</p>
        <p>${product.price}</p>
    </div>
</a>

<style>
    .product-card {
        display: grid;
        /* grid-template-columns: 1fr 2fr; */
        grid-template-rows: 2fr 1fr;

        padding: 5px;
        background-color: #fff;
        border: 1px solid #f6f6f6;
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
        justify-content: center;
        align-items: start;
    }
    .product-info *{
        margin: 2px;
    }
</style>
