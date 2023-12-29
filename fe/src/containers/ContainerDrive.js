import "./ContainerStyles.css";
import RecentsFiles from "../components/RecentsFiles";
import SearchFile from "../components/SearchFile";
import OperationsFiles from "../components/OperationsFiles";
import ModalFormUpload from "../reusableComponents/ModalFormUpload";
import { useState } from "react";
const ContainerDrive = () => {
  const [typeSelected, setTypeSelected] = useState("");
  const [showModalLoad, setShowModalLoad] = useState(false);
  const [ searchFile, setSearchFile ] = useState('');
  return (
    <>
      <div className="container">
        <div className="sections">
          <SearchFile
            showModalLoad={showModalLoad}
	  setShowModalLoad={setShowModalLoad}
	  searchFile={searchFile}
	  setSearchFile={setSearchFile}
          />
          <RecentsFiles />
          <OperationsFiles
            typeSelected={typeSelected}
            setTypeSelected={setTypeSelected}
          />
        </div>
      </div>
      <ModalFormUpload showModalLoad={showModalLoad} setShowModalLoad={setShowModalLoad} />
    </>
  );
};

export default ContainerDrive;
