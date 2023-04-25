<script>

    import { onMount } from "svelte";

    let search_term = "";
    let url;


    onMount(() => {
        url = new URL(window.location.href);
        initSearch();
    });


    function initSearch() {

        search_term = url.searchParams.get("kw") || "";
    }


    function search() {
        url.searchParams.set("kw", search_term);
        window.location.href = url;
    }


</script>


<div class="container">

    <div class="wrap">
    
        <form class="search">
    
            <input
            type="text"
            bind:value={search_term}
            autocomplete="off"
            placeholder="Search"
            class="searchTerm" 
            />
        
            <button 
            on:click={search}
            class="searchButton button"
            
            >
                <svg
                    class="w-5 h-5 mr-2 -ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    /></svg
                >
            </button>
        </form>
    </div>
</div>






<style>


.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

.wrap{
  width: 50%;
}

.search {
  width: 100%;
  display: flex;
    justify-content: center;
    align-items: center;
}

.searchTerm {
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 2px;
}



.searchButton {
  width: 40px;
  height: 36px;


  text-align: center;
  cursor: pointer;
  border: none;

}


</style>