import express from 'express';
const fileUpload = require('express-fileupload');
const cors = require('cors');
//const path = require('path');
const jsonConfig = require("../utils/conf.json");
import {defaultRoute} from "../routes/routes";
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(defaultRoute)
//app.use('/imagenes', express.static(path.join(__dirname, 'assets', 'imagenes')));
app.use('/files', express.static(jsonConfig.uploads_path));

app.listen(port, () => {
 console.log(`server is listening on ${port}`);
});
