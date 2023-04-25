<script>

    import Card from '$lib/components/product/card.svelte';

    export let products;



</script>



<div id="container">
    {#each products as product}
        <Card product={product} />
    {/each}
</div>




<style>



@media only screen and (min-width: 600px){

        #container{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

}


@media only screen and (max-width: 600px) {


    #container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
}

</style>