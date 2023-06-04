const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require("./routes")

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected")
        const app = express();
        app.use(cors());
        app.use(bodyParser.json());
        app.use("/api", routes)
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        });

    })
    .catch((err) => console.log(err));


