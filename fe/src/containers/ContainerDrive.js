import "./ContainerStyles.css";
import RecentsFiles from "../components/RecentsFiles";
import SearchFile from "../components/SearchFile";
import OperationsFiles from "../components/OperationsFiles";
const ContainerDrive = () => {
  return (
    <>
      <div className="container">
	<div className="sections">
	  <RecentsFiles />
	  <SearchFile />
	  <OperationsFiles />
        </div>
      </div>
    </>
  );
};

export default ContainerDrive;

