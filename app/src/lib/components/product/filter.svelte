<script>
    import { onMount } from "svelte";

    export let filters = {};
    let url;
    let hasFilterChanged = false;

    onMount(() => {
        url = new URL(window.location.href);
        initFilter();
    });

    function initFilter() {
        for (const [key, value] of Object.entries(filters)) {
            filters[key] = url.searchParams.get(key) || "";
        }
    }

    function toggleDisplayFilter() {
        const filter = document.getElementById("filter-content");
        filter.classList.toggle("hidden");
    }

    function filter() {
        for (const [key, value] of Object.entries(filters)) {
            url.searchParams.set(key, value);
        }
        window.location.href = url;
    }

    function filterChanged() {
        hasFilterChanged = true;
    }
</script>

<button id="show-filter-button" class="button" on:click={toggleDisplayFilter}>
    Filter &nbsp;
    <svg
        aria-hidden="true"
        class="icon-filter-ds"
        focusable="false"
        viewBox="0 0 24 24"
        role="img"
        width="24px"
        height="24px"
        fill="none"
        ><path
            stroke="currentColor"
            stroke-width="1.5"
            d="M21 8.25H10m-5.25 0H3"
        /><path
            stroke="currentColor"
            stroke-width="1.5"
            d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clip-rule="evenodd"
        /><path
            stroke="currentColor"
            stroke-width="1.5"
            d="M3 15.75h10.75m5 0H21"
        /><path
            stroke="currentColor"
            stroke-width="1.5"
            d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clip-rule="evenodd"
        /></svg
    >
</button>

<div id="filter-content" class="hidden">
    <div id="exit-container">
        <button
            id="exit-button"
            class="button-inverted"
            on:click={toggleDisplayFilter}
        >
            X
        </button>
    </div>

    <form id="filters-container">
        <div class="flex flex-col gap-2">
            <label for="category">Category</label>
            <select
                id="category"
                bind:value={filters.category}
                on:change={filterChanged}
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
                on:change={filterChanged}
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
                on:change={filterChanged}
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
                on:change={filterChanged}
            >
                <option value="">All</option>
                <option value="1">Size 1</option>
                <option value="2">Size 2</option>
                <option value="3">Size 3</option>
            </select>
        </div>
        {#if hasFilterChanged}
            <button
                id="apply-button"
                class="button-inverted"
                type="button"
                on:click={filter}>Apply</button
            >
        {/if}
    </form>
</div>

<style>
    #filter-content {
        /* box-sizing: border-box; */
        position: fixed;
        left:0;
        top: 15%;
        width: 20%;
        height: 100%;
        padding: var(--double-unit);
        background-color: var(--primary-color);
        z-index: 1;
    }

    #exit-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    #filters-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: var(--double-unit);
    }

    #apply-button {
        width: 80%;
    }


    @media only screen and (min-width: 600px)  {
        #filter-content {
            display:block;
        }

        #show-filter-button {
            display: none;
        }
        #filters-container {
            margin-left: var(--quad-unit);
        }
        #exit-button {
        display: none;
    }

    }

    @media only screen and (max-width: 600px) {
        #filter-content {
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        #show-filter-button {
            display: flex;
        }

        #filters-container {
            margin-left: var(--unit);
        }
    }
</style>
