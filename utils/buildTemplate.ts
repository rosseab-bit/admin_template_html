const fs = require("fs");

export class BuildTemplate {
  async ping(req: any, res: any) {
    console.log(req.body.replace);
    try {
      // datos de prueba
      //let replaceList = [{replace:"{nombre-cliente}", data:"Ricardo Benitez"}, {replace:"{n&uacute;mero-documento}", data:"34367197"}] 
      //let replaceList = [{replace:"{nombre-cliente}", data:"Ricardo Benitez"}] 

      /* lectura de archivo que se subio a la carpeta upload con el nombre enviado para prcesar y los datos */
      let data = fs.readFileSync(__dirname +"/uploads/"+req.body.file, "utf8").toString(); 
      /* lectura de archivo que se subio a la carpeta upload con el nombre enviado para prcesar y los datos */

      /* recorro la lista con las palabras a reemplazar en el archivo */
      let dataBuildReplace:string = data;
      for(let item of req.body.replace){
	console.log(item.replace, item.data);
	dataBuildReplace = dataBuildReplace.replace(item.replace, item.data)
      };
      /* recorro la lista con las palabras a reemplazar en el archivo */

      /* cargo archivo a escribir con los reemplazos realizados */
      let dataBuild = fs.createWriteStream(__dirname +"/uploads/20230822_movistar_fibraBuild.html", "utf8");
      dataBuild.write(dataBuildReplace)
      /* cargo archivo a escribir con los reemplazos realizados */


    } catch (err) {
      console.error(err); // En caso de error se debe mostrar
    }
    res.status(200).json({ response: "pong" });
  }

  async buildTemplate(req: any, res: any) {
    console.log(req.body);
    res.status(200).json({ build: "success" });
  }
  async uploadTemplate(req: any, res: any) {
    let sampleFile;
    let uploadPath;

    console.log(req.files);

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.test;
    uploadPath = __dirname + "/uploads/" + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err: any) {
      if (err) return res.status(500).send(err);

      res.status(200).json({"file upload": "Success"});
    });
  }
}
