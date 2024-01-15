import "./ComponentsStyles.css";
import MenuLeft from "./MenuLeft";
import { useState, useEffect } from "react";
import GetFiles from "../utils/GetFiles";
import OperationFilesView from "./OperationFilesView";
import { connection } from "../utils/conf";
const OperationsFiles = ({ typeSelected, setTypeSelected }) => {
  const [dataView, setDataView] = useState([]);

  useEffect(() => {
    setDataView([]);
    const getDataFiles = async () => {
      if (typeSelected === "Imagenes") {
        try {
          const response = await fetch(`http://${connection.back_ip}:${connection.port}/listimg`);
          const getData = await response.json();
          console.log("se pide info de imagenes", getData);
          setDataView(getData.files);
        } catch (err) {
	  console.log("error al traer la data: ", err);
	  setDataView([]);
        }
      }
      if (typeSelected === "Documentos") {
        try {
          const response = await fetch(`http://${connection.back_ip}:${connection.port}/listdoc`);
          const getData = await response.json();
          console.log("se pide info de imagenes", getData);
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
	  setDataView([]);
        }
      }
      if (typeSelected === "Videos") {
        try {
          const response = await fetch(`http://${connection.back_ip}:${connection.port}/listvideo`);
          const getData = await response.json();
          console.log("se pide info de imagenes", getData);
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
	  setDataView([]);
        }
      }
      if (typeSelected === "Explorar") {
        try {
          const response = await fetch(`http://${connection.back_ip}:${connection.port}/listfile`);
          const getData = await response.json();
          console.log("se pide info de imagenes", getData);
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
	  setDataView([]);
        }
      }

    };
    getDataFiles();
    console.log("datos recibidos del fetch: ", dataView.files);
  }, [typeSelected]);
  console.log(dataView);
  return (
    <>
      <div className="operations-container">
        <div className="menu-section">
          <MenuLeft
            typeSelected={typeSelected}
            setTypeSelected={setTypeSelected}
          />
        </div>
        <div className="files-section">
          {dataView.map((value, key) => (
            <OperationFilesView typeSelected={typeSelected} nameFile={value} />
          ))}
        </div>
      </div>
    </>
  );
};
export default OperationsFiles;
