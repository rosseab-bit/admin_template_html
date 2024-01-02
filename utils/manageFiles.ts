const fs = require("fs");
const path = require("path");
export class ManageFiles {
  /* obtengo todos los archivos y carpetas de uploads */
  async listFiles(req: any, res: any) {
    console.log(req.body);
    fs.readdir(
      "/media/ricardo/initdev/github/admin_template_html/utils/uploads",
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
      "/media/ricardo/initdev/github/admin_template_html/utils/uploads",
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
      "/media/ricardo/initdev/github/admin_template_html/utils/uploads",
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
      "/media/ricardo/initdev/github/admin_template_html/utils/uploads",
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
        res.status(200).json({ files: listVideos });
        console.log({ listVideos });
      }
    );
  }

  async downloadFile(req: any, res: any) {
    const file_name = req.query.name;
    const filePath = path.join(__dirname, "/uploads/", file_name); // Ruta completa del archivo que deseas servir

    // Verificar si el archivo existe
    fs.access(filePath, fs.constants.F_OK, (err: any) => {
      if (err) {
        return res.status(404).send("Archivo no encontrado");
      }

      // Configurar las cabeceras para indicar que es un archivo para descargar
      const file_download = `attachment; filename=${req.query.name}`;
      res.setHeader("Content-Disposition", file_download);
      res.setHeader("Content-Type", "application/octet-stream");

      // Crear un stream de lectura y enviar el archivo al cliente
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    });
  }
  async listRecentsFiles(req: any, res: any) {
    console.log(req);
    let only_files: any[] = [];
    fs.readdir(
      "/media/ricardo/initdev/github/admin_template_html/utils/uploads",
      (err: any, files: any) => {
        if (err) {
          console.error("Error al leer el directorio:", err);
          res.status(404).json({ error: err });
          return;
        }

        files.forEach((file: any) => {
          let route_file: string = `/media/ricardo/initdev/github/admin_template_html/utils/uploads/${file}`;
          fs.stat(route_file, (err: any, stats: any) => {
            if (err) {
              return console.error(
                "Error al obtener información del archivo:",
                err
              );
            }
            if (stats.isFile()) {
              console.log(`${file} - última modificación: ${stats.mtime}`);
              only_files.push({
                nombre: file,
                fechaModificacion: stats.mtime,
              });
            }
          });
          console.log(file);
          console.log(only_files);
        });
        only_files.sort((a, b) => b.fechaModificacion - a.fechaModificacion);
        const ultimosArchivos = only_files.slice(0, 5);
	console.log('ULTIMOS');
        ultimosArchivos.forEach((archivo: any) => {
          console.log(
            `${archivo.nombre} - última modificación: ${archivo.fechaModificacion}`
          );
        });
        res.status(200).json({ files: files });
      }
    );
  }
}
