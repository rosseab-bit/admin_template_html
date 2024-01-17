import "./ComponentsStyles.css";
import MenuLeft from "./MenuLeft";
import { useState, useEffect } from "react";
import GetFiles from "../utils/GetFiles";
import OperationFilesView from "./OperationFilesView";
import { useParams } from "react-router-dom";
import { connection } from "../utils/conf";
const OperationsFiles = ({
  typeSelected,
  setTypeSelected,
  foldersPath,
  setFoldersPath,
}) => {
  const [dataView, setDataView] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setDataView([]);
    const getDataFiles = async () => {
      if (typeSelected === "Imagenes") {
        try {
          const response = await fetch(
            `http://${connection.back_ip}:${connection.port}/listimg`
          );
          const getData = await response.json();
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
          setDataView([]);
        }
      }
      if (typeSelected === "Documentos") {
        try {
          const response = await fetch(
            `http://${connection.back_ip}:${connection.port}/listdoc`
          );
          const getData = await response.json();
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
          setDataView([]);
        }
      }
      if (typeSelected === "Videos") {
        try {
          const response = await fetch(
            `http://${connection.back_ip}:${connection.port}/listvideo`
          );
          const getData = await response.json();
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
          setDataView([]);
        }
      }
      if (typeSelected === "Explorar") {
        try {
          const response = await fetch(
            `http://${connection.back_ip}:${connection.port}/listfile`
          );
          const getData = await response.json();
          setDataView(getData.files);
        } catch (err) {
          console.log("error al traer la data: ", err);
          setDataView([]);
        }
      }
    };
    getDataFiles();
  }, [typeSelected]);
  return (
    <>
      <div className="operations-container">
        <div className="menu-section">
          <MenuLeft
            typeSelected={typeSelected}
            setTypeSelected={setTypeSelected}
            foldersPath={foldersPath}
            setFoldersPath={setFoldersPath}
            dataView={dataView}
            setDataView={setDataView}
          />
        </div>
        <div className="files-section">
          {dataView.map((value, key) => (
            <OperationFilesView
              typeSelected={typeSelected}
              nameFile={value}
              foldersPath={foldersPath}
              setFoldersPath={setFoldersPath}
              dataView={dataView}
              setDataView={setDataView}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default OperationsFiles;
