<script>
    import Search from "$lib/components/product/search.svelte";
    import Filter from "$lib/components/product/filter.svelte";
    import Grid from "../lib/components/product/grid.svelte";

    export let data;
    let { products } = data;
</script>

<div id="main-explore">
    <div class="first-row">
        <Search />
    </div>

    <div class="second-row">
        <p>
            {products.length} products found
        </p>

        <Filter />
    </div>

    <Grid {products} />
</div>

<style>

    #main-explore {
        width: 100%;
    }

    .first-row {
        margin-top: 1vmax;
    }
    .second-row {
        margin-top: 3vmax;
        margin-bottom: 1vmax;
    }

    .second-row > * {
        margin: 0 10px;
    }



    @media only screen and (min-width: 600px) {
        #main-explore {
            width: 80%;
            margin-left: 20%;
            padding: 0 3%;
        }
    }

    @media only screen and (max-width: 600px) {


        .second-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px;
        }

        .first-row {
            margin-top: 3vmax;
        }
        .second-row {
            margin-bottom: 2vmax;
        }
    }
</style>
