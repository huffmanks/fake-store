const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.post('/cart', (req, res) => {

})

app.get('/:id', async (req, res) => {
    const url = `https://fakestoreapi.com/products/${req.params.id}`;
    const product_request = await fetch(url);
    const data = await product_request.json();

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/css/style.css" />
            <title>Product</title>
        </head>
        <body>
            <header>
                <a href="/"><h1>Fake Store</h1></a>
            </header>
            <div class="container-product">
                <div class="product">
                <h2>${data.title}</h2>
                <h3>$${data.price}</h3>
                <img src="${data.image}" />
                <p>${data.description}</p>
                <button class="btn">Add to Cart</button>
                </div>
            </div>
            <script src="/public/.product.js"></script>
        </body>
    </html>
        `);
});
