const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

console.log(publicPath);

const app = express();
let port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});

