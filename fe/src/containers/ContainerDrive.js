import "./ContainerStyles.css";
import RecentsFiles from "../components/RecentsFiles";
import SearchFile from "../components/SearchFile";
import OperationsFiles from "../components/OperationsFiles";
import ModalFormUpload from "../reusableComponents/ModalFormUpload";
import { useState, useEffect } from "react";
const ContainerDrive = () => {
  const [typeSelected, setTypeSelected] = useState("");
  const [showModalLoad, setShowModalLoad] = useState(false);
  const [searchFile, setSearchFile] = useState("");
  const [switchSearchRecent, setSwitchSearchRecent] = useState(false);

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
          <OperationsFiles
            typeSelected={typeSelected}
            setTypeSelected={setTypeSelected}
          />
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
