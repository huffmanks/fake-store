const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
};

getProducts().then((data) => {
    data.map((item, i) => {
        // const container = document.querySelector('.container');
        const products = document.createElement('div');
        products.classList.add('products');
        products.innerHTML = `
        <a href="/${data[i].id}">
            <img src="${data[i].image}" />
        </a>
       `;
        document.querySelector('.container-products').appendChild(products);
    });
});
