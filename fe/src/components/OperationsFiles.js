import "./ComponentsStyles.css";
import MenuLeft from "./MenuLeft";
import { useState, useEffect } from "react";
import GetFiles from "../utils/GetFiles";
import OperationFilesView from "./OperationFilesView";
const OperationsFiles = ({ typeSelected, setTypeSelected }) => {
  const [dataView, setDataView] = useState([]);

  useEffect(() => {
    setDataView([]);
    const getDataFiles = async () => {
      if (typeSelected === "Imagenes") {
        try {
          const response = await fetch("http://192.168.0.161:3001/listimg");
          const getData = await response.json();
          console.log("se pide info de imagenes", getData);
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
        }
      }
      if (typeSelected === "Documentos") {
        try {
          const response = await fetch("http://192.168.0.161:3001/listdoc");
          const getData = await response.json();
          console.log("se pide info de imagenes", getData);
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
        }
      }
      if (typeSelected === "Videos") {
        try {
          const response = await fetch("http://192.168.0.161:3001/listvideo");
          const getData = await response.json();
          console.log("se pide info de imagenes", getData);
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
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
