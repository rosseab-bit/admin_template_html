import "./ComponentsStyles.css";
import FolderIcon from "@mui/icons-material/Folder";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
let menuList = [
  {
    icon: <FolderIcon className="icon-item-recent icon-item-recent-folder" />,
    iconName: "Carpetas",
    code: 1,
  },
  {
    icon: <PhotoSizeSelectActualIcon className="icon-item-recent icon-item-recent-image" />,
    iconName: "Imagenes",
    code: 2,
  },
  {
    icon: <VideoLibraryIcon className="icon-item-recent icon-item-recent-video" />,
    iconName: "Videos",
    code: 3,
  },
  {
    icon: <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />,
    iconName: "Documentos",
    code: 4,
  },
];
const OperationFilesView = ({ typeSelected, nameFile }) => {
  const ViewFile = () => {
    if (typeSelected === "Imagenes") {
      return (
        <>
          <div className="icon-view-operation">
            <div className="icon-recent-description">
              {menuList[1].icon}
              <p className="name-file-operation">{nameFile}</p>
            </div>
          </div>
        </>
      );
    }
    if (typeSelected === "Documentos") {
      return (
        <>
          <div className="icon-view-operation">
            <div className="icon-recent-description">
              {menuList[3].icon}
              <p className="name-file-operation">{nameFile}</p>
            </div>
          </div>
        </>
      );
    }
    if (typeSelected === "Videos") {
      return (
        <>
          <div className="icon-view-operation">
            <div className="icon-recent-description">
              {menuList[2].icon}
              <p className="name-file-operation">{nameFile}</p>
            </div>
          </div>
        </>
      );
    }
    if (typeSelected === "Carpetas") {
      return (
        <>
          <div className="icon-view-operation">
            <div className="icon-recent-description">
              {menuList[0].icon}
              <p className="name-file-operation">{nameFile}</p>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
    <ViewFile />
    </>);
};
export default OperationFilesView;
