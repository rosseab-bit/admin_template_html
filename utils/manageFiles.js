"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageFiles = void 0;
const fs = require("fs");
class ManageFiles {
    /* obtengo todos los archivos y carpetas de uploads */
    listFiles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            fs.readdir("/home/hunter/Escritorio/developer/github/admin_template_html/utils/uploads", (err, files) => {
                if (err) {
                    console.error("Error al leer el directorio:", err);
                    res.status(404).json({ error: err });
                    return;
                }
                files.forEach((file) => {
                    console.log(file);
                });
                res.status(200).json({ files: files });
            });
        });
    }
    /* obtengo los archivos y carpetas de uploads y filtro por imagenes */
    listImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let listImg = [];
            fs.readdir("/home/hunter/Escritorio/developer/github/admin_template_html/utils/uploads", (err, files) => {
                if (err) {
                    console.error("Error al leer el directorio:", err);
                    res.status(404).json({ error: err });
                    return;
                }
                files.forEach((file) => {
                    console.log(file);
                    let tmp = file.split(".");
                    let tmpLength = tmp.length;
                    if (tmp[tmpLength - 1] === "jpg" ||
                        tmp[tmpLength - 1] === "png" ||
                        tmp[tmpLength - 1] === "jpeg") {
                        listImg.push(file);
                    }
                });
                res.status(200).json({ files: listImg });
                console.log({ listImg });
            });
        });
    }
    /* obtengo todos los archivos y carpetas de uploads y filtro por documentos */
    listDocs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let listDocs = [];
            fs.readdir("/home/hunter/Escritorio/developer/github/admin_template_html/utils/uploads", (err, files) => {
                if (err) {
                    console.error("Error al leer el directorio:", err);
                    res.status(404).json({ error: err });
                    return;
                }
                files.forEach((file) => {
                    console.log(file);
                    let tmp = file.split(".");
                    let tmpLength = tmp.length;
                    if (tmp[tmpLength - 1] === "pdf" ||
                        tmp[tmpLength - 1] === "xlsx" ||
                        tmp[tmpLength - 1] === "docx" ||
                        tmp[tmpLength - 1] === "html" ||
                        tmp[tmpLength - 1] === "xml" ||
                        tmp[tmpLength - 1] === "txt" ||
                        tmp[tmpLength - 1] === "pptx") {
                        listDocs.push(file);
                    }
                });
                res.status(200).json({ files: listDocs });
                console.log({ listDocs });
            });
        });
    }
    listVideos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let listVideos = [];
            fs.readdir("/home/hunter/Escritorio/developer/github/admin_template_html/utils/uploads", (err, files) => {
                if (err) {
                    console.error("Error al leer el directorio:", err);
                    res.status(404).json({ error: err });
                    return;
                }
                files.forEach((file) => {
                    console.log(file);
                    let tmp = file.split(".");
                    let tmpLength = tmp.length;
                    if (tmp[tmpLength - 1] === "mp4" ||
                        tmp[tmpLength - 1] === "avi" ||
                        tmp[tmpLength - 1] === "3gp" ||
                        tmp[tmpLength - 1] === "mov" ||
                        tmp[tmpLength - 1] === "flv" ||
                        tmp[tmpLength - 1] === "mkv" ||
                        tmp[tmpLength - 1] === "wmv" ||
                        tmp[tmpLength - 1] === "m4v" ||
                        tmp[tmpLength - 1] === "ogv" ||
                        tmp[tmpLength - 1] === "webm") {
                        listVideos.push(file);
                    }
                });
                res.status(200).json({ files: listVideos });
                console.log({ listVideos });
            });
        });
    }
}
exports.ManageFiles = ManageFiles;
