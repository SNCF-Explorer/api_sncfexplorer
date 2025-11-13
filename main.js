const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.statusCode("200");
    res.json("Page ok");
});

app.listen(port, () => {
    console.log(`API ready on http://localhost:${port}`);
});
