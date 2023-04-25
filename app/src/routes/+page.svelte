
<script>



    import Search from '$lib/components/product/search.svelte';
    import Filter from '$lib/components/product/filter.svelte';
    import Grid from '../lib/components/product/grid.svelte';


    export let data;
    let {products} = data;

</script>



<div id="main-explore">

    <Search />

    <div class="second-row">
        <p>
            {products.length} products found
        </p>
    
        <Filter />
    </div>
    
    <Grid products={products} />

</div>    




<style>


@media only screen and (min-width: 600px) {
    #main-explore{
    
        width: 80%;
        margin-left: 20%;
        padding: 0 3%;
    }

    #main-explore *{
        margin: 5px 0;
    }
}

@media only screen and (max-width: 600px) {

    .second-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
    }
}
</style>
