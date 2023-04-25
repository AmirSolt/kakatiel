export const load = ({ params }) => {



    async function fetchProduct(id) {
        let response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        let data = await response.json();
        return data;
    }


    return {
        product: fetchProduct(params.id)
    }
}