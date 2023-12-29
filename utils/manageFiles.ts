const fs = require("fs");
export class ManageFiles {
  /* obtengo todos los archivos y carpetas de uploads */
  async listFiles(req: any, res: any) {
    console.log(req.body);
    fs.readdir(
      "/home/hunter/Escritorio/developer/github/admin_template_html/utils/uploads",
      (err: any, files: any) => {
        if (err) {
          console.error("Error al leer el directorio:", err);
          res.status(404).json({ error: err });
          return;
        }

        files.forEach((file: any) => {
          console.log(file);
        });
        res.status(200).json({ files: files });
      }
    );
  }

  /* obtengo los archivos y carpetas de uploads y filtro por imagenes */
  async listImages(req: any, res: any) {
    console.log(req.body);
    let listImg: any[] = [];
    fs.readdir(
      "/home/hunter/Escritorio/developer/github/admin_template_html/utils/uploads",
      (err: any, files: any) => {
        if (err) {
          console.error("Error al leer el directorio:", err);
          res.status(404).json({ error: err });
          return;
        }

        files.forEach((file: any) => {
          console.log(file);
          let tmp: any[] = file.split(".");
          let tmpLength: number = tmp.length;
          if (
            tmp[tmpLength - 1] === "jpg" ||
            tmp[tmpLength - 1] === "png" ||
            tmp[tmpLength - 1] === "jpeg"
          ) {
            listImg.push(file);
          }
        });
        res.status(200).json({ files: listImg });
        console.log({ listImg });
      }
    );
  }
  /* obtengo todos los archivos y carpetas de uploads y filtro por documentos */
  async listDocs(req: any, res: any) {
    console.log(req.body);
    let listDocs: any[] = [];
    fs.readdir(
      "/home/hunter/Escritorio/developer/github/admin_template_html/utils/uploads",
      (err: any, files: any) => {
        if (err) {
          console.error("Error al leer el directorio:", err);
          res.status(404).json({ error: err });
          return;
        }

        files.forEach((file: any) => {
          console.log(file);
          let tmp: any[] = file.split(".");
          let tmpLength: number = tmp.length;
          if (
            tmp[tmpLength - 1] === "pdf" ||
            tmp[tmpLength - 1] === "xlsx" ||
            tmp[tmpLength - 1] === "docx" ||
            tmp[tmpLength - 1] === "html" ||
            tmp[tmpLength - 1] === "xml" ||
            tmp[tmpLength - 1] === "txt" ||
            tmp[tmpLength - 1] === "pptx"
          ) {
            listDocs.push(file);
          }
        });
        res.status(200).json({ files: listDocs });
        console.log({ listDocs });
      }
    );
  }
  async listVideos(req: any, res: any) {
    console.log(req.body);
    let listVideos: any[] = [];
    fs.readdir(
      "/home/hunter/Escritorio/developer/github/admin_template_html/utils/uploads",
      (err: any, files: any) => {
        if (err) {
          console.error("Error al leer el directorio:", err);
          res.status(404).json({ error: err });
          return;
        }

        files.forEach((file: any) => {
          console.log(file);
          let tmp: any[] = file.split(".");
          let tmpLength: number = tmp.length;
          if (
            tmp[tmpLength - 1] === "mp4" ||
            tmp[tmpLength - 1] === "avi" ||
            tmp[tmpLength - 1] === "3gp" ||
            tmp[tmpLength - 1] === "mov" ||
            tmp[tmpLength - 1] === "flv" ||
            tmp[tmpLength - 1] === "mkv" ||
            tmp[tmpLength - 1] === "wmv" ||
            tmp[tmpLength - 1] === "m4v" ||
            tmp[tmpLength - 1] === "ogv" ||
            tmp[tmpLength - 1] === "webm"
          ) {
            listVideos.push(file);
          }
        });
        res.status(200).json({ files: listVideos});
        console.log({ listVideos});
      }
    );
  }
}
