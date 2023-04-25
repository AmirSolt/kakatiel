export const load = ({ params }) => {



    async function fetchCards() {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        return data;
    }


    return {
        products: fetchCards()
    }
}