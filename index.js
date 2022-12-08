require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
const sequelize = require("./db");
const models = require("./models/Models");
const router = require("./router/Router");
const ErrorHandingMiddleware = require('./midleware/ErrorHandingMidleware');




const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


app.use(ErrorHandingMiddleware);
const start = async () => {
    try {
        await sequelize.sync().then(console.log('Database is working'));
        app.listen(PORT, () => console.log(`Server working on port: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();