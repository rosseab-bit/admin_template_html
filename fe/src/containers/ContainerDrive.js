import "./ContainerStyles.css";
import RecentsFiles from "../components/RecentsFiles";
import SearchFile from "../components/SearchFile";
import OperationsFiles from "../components/OperationsFiles";
import ModalFormUpload from "../reusableComponents/ModalFormUpload";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
const ContainerDrive = () => {
  const [typeSelected, setTypeSelected] = useState("");
  const [showModalLoad, setShowModalLoad] = useState(false);
  const [searchFile, setSearchFile] = useState("");
  const [switchSearchRecent, setSwitchSearchRecent] = useState(false);
  const [foldersPath, setFoldersPath] = useState({path: "", pathList:[]});
  const [ updateComponent, setUpdateComponent ] = useState(0);

    const location = useLocation();
  useEffect(() => {
    console.log('locacion de la ruta actual: ', location);
  },[]);
  let updateKey = foldersPath.path;
  useEffect(() => {
    setUpdateComponent(updateComponent => updateComponent +1);
  },[updateKey])

  return (
    <>
        <div className="container">
          <SearchFile
            showModalLoad={showModalLoad}
            setShowModalLoad={setShowModalLoad}
            searchFile={searchFile}
            setSearchFile={setSearchFile}
            switchSearchRecent={switchSearchRecent}
            setSwitchSearchRecent={setSwitchSearchRecent}
          />
          <div className="sections">
            <RecentsFiles
              searchFile={searchFile}
              switchSearchRecent={switchSearchRecent}
              setSwitchSearchRecent={setSwitchSearchRecent}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <OperationsFiles
                    typeSelected={typeSelected}
                    setTypeSelected={setTypeSelected}
                    foldersPath={foldersPath}
                    setFoldersPath={setFoldersPath}
                  />
                }
              />
              <Route
	      path="/path/:id"
                element={
                  <OperationsFiles
                    typeSelected={typeSelected}
                    setTypeSelected={setTypeSelected}
                    foldersPath={foldersPath}
                    setFoldersPath={setFoldersPath}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      <ModalFormUpload
        showModalLoad={showModalLoad}
        setShowModalLoad={setShowModalLoad}
      />
    </>
  );
};

export default ContainerDrive;
