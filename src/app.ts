import express from 'express';
const fileUpload = require('express-fileupload');
const cors = require('cors');
import {defaultRoute} from "../routes/routes";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(defaultRoute)

app.listen(port, () => {
 console.log(`server is listening on ${port}`);
});
