const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static('public'));

app.post("/data", async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({ msg: req.body });
    } catch (error) {
        res.status(400).json({ error: error });
    }

})

app.listen(3000, () => {
    console.log("running");
})