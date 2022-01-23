import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const api_url = "https://s3.amazonaws.com/open-to-cors/assignment.json";
    const response = await fetch(api_url);
    const data = await response.json();
    const OrderList = data;
    const products = OrderList.products;
    const keys = Object.keys(products);
    keys.sort((a, b) => { return products[b].popularity - products[a].popularity; })
    res.render("index", {products: products, keys : keys});
    console.log(products);
});

app.listen(500);