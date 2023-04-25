<script>
    
    import { onMount } from "svelte";

    export let filters = {};
    let url;



    onMount(() => {
        url = new URL(window.location.href);
        initFilter();
    });



    function initFilter(){
        for (const [key, value] of Object.entries(filters)) {
            filters[key] = url.searchParams.get(key) || "";
        }
    }


    function toggleDisplayFilter(){
        const filter = document.getElementById("filter-content");
        filter.classList.toggle("hidden");
    }


    function filter() {
        for (const [key, value] of Object.entries(filters)) {
            url.searchParams.set(key, value);
        }
        window.location.href = url;
    }


</script>


<button id="show-filter-button" class="button" on:click={toggleDisplayFilter}>
    Filter
    <svg aria-hidden="true" class="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>
</button>


<div id="filter-content" class="hidden">


    <div id="exit-container">

        <button id="exit-button" class="button-inverted" on:click={toggleDisplayFilter}>
            X
        </button>
    </div>


    <form id="filters-container">
        <div class="flex flex-col gap-2">
            <label for="category">Category</label>
            <select
                id="category"
                bind:value={filters.category}
                on:change={filter}
            >
                <option value="">All</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
            </select>
        </div>
        <div class="flex flex-col gap-2">
            <label for="price">Price</label>
            <select
                id="price"
                bind:value={filters.price}
                on:change={filter}
            >
                <option value="">All</option>
                <option value="1">Price 1</option>
                <option value="2">Price 2</option>
                <option value="3">Price 3</option>
            </select>
        </div>
        <div class="flex flex-col gap-2">
            <label for="color">Color</label>
            <select
                id="color"
                bind:value={filters.color}
                on:change={filter}
            >
                <option value="">All</option>
                <option value="1">Color 1</option>
                <option value="2">Color 2</option>
                <option value="3">Color 3</option>
            </select>
        </div>
        <div class="flex flex-col gap-2">
            <label for="size">Size</label>
            <select
                id="size"
                bind:value={filters.size}
                on:change={filter}
            >
                <option value="">All</option>
                <option value="1">Size 1</option>
                <option value="2">Size 2</option>
                <option value="3">Size 3</option>
            </select>
        </div>
        <button id="apply-button" class="button-inverted" type="button" on:click={filter}>Apply</button>
    </form>
</div>











<style>

    #exit-container{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        
    }

    #filters-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }




/* breakpoint for mobile and desktop */
@media only screen and (min-width: 600px) {

    

        #filter-content{
            /* box-sizing: border-box; */
            position: fixed;
            display: block;
            width: auto;
            max-width: 20%;
            height: 100%;
            top: 15%;
            left: 0;
            padding: 10px;
            background-color: white;
            border-right: 1px solid #f6f6f6;
            z-index: 1;

        }

        #show-filter-button{
            display: none;
        }

        #exit-button{
            display: none;
        }
    }

    
    @media only screen and (max-width: 600px) {

        #filter-content{
            position: fixed;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 10px;
            z-index: 1;

        }
    }
</style>