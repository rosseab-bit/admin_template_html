"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileUpload = require('express-fileupload');
const cors = require('cors');
//const path = require('path');
const routes_1 = require("../routes/routes");
const app = (0, express_1.default)();
const port = 3001;
app.use(cors());
app.use(express_1.default.json());
app.use(fileUpload());
app.use(routes_1.defaultRoute);
//app.use('/imagenes', express.static(path.join(__dirname, 'assets', 'imagenes')));
app.use('/imagenes', express_1.default.static('/media/ricardo/initdev/github/admin_template_html/utils/uploads'));
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
