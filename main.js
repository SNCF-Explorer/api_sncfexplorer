const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/index");

app.use(express.json());

app.get("/", (req, res) => {
    // res.statusCode("200");
    res.json("Page ok");
});

routes(app);
const errorHandler = (err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;

    res.status(status).json({ error: message });
};
app.use(errorHandler);

app.listen(port, () => {
    console.log(`API ready on http://localhost:${port}`);
});