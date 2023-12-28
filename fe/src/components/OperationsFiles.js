import "./ComponentsStyles.css";
import MenuLeft from "./MenuLeft";

const OperationsFiles = () => {
  return (
    <>
    <div className="operations-container">
      <div className="menu-section">
	<MenuLeft />
      </div>
      <div className="files-section">
	Files
      </div>
    </div>
    </>
  );
}
export default OperationsFiles;
