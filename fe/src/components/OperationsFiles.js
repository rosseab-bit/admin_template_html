import "./ComponentsStyles.css";
import MenuLeft from "./MenuLeft";

const OperationsFiles = ({typeSelected, setTypeSelected}) => {
  return (
    <>
    <div className="operations-container">
      <div className="menu-section">
	<MenuLeft typeSelected={typeSelected} setTypeSelected={setTypeSelected} />
      </div>
      <div className="files-section">
	<p>Seleccionaste ver: {typeSelected}</p>
      </div>
    </div>
    </>
  );
}
export default OperationsFiles;
