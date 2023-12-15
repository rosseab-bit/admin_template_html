"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRoute = void 0;
const express_1 = require("express");
const build_1 = require("../controller/build");
exports.defaultRoute = (0, express_1.Router)();
exports.defaultRoute.get('/ping', build_1.Controller.ping);
exports.defaultRoute.post('/ping', build_1.Controller.buildTemplate);
exports.defaultRoute.post('/upload', build_1.Controller.uploadTemplate);
