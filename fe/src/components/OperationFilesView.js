import "./ComponentsStyles.css";
import FolderIcon from "@mui/icons-material/Folder";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import { iconDocuments } from "../utils/iconFiles";
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
  const downloadFile = (nameDownload) => {
    const url_download =`http://localhost:3001/download?name=${nameDownload}`
    console.log({url_download});
    window.location.href = `http://localhost:3001/download?name=${nameDownload}`
    //window.open(url_download, '_blank')
  }
  const ViewFile = () => {
    if (typeSelected === "Imagenes") {
      const image_url = `http://localhost:3001/imagenes/${nameFile}`
      return (
        <>
          <div className="icon-view-operation">
            <div className="icon-recent-description" onClick={() => downloadFile(nameFile)}>
	      <img src={image_url}  height="70" alt={nameFile}/>
              <p className="name-file-operation">{nameFile}</p>
            </div>
          </div>
        </>
      );
    }
    if (typeSelected === "Documentos") {
      const url_download = `/media/ricardo/initdev/github/admin_template_html/utils/uploads/${nameFile}`
      console.log(url_download);
      console.log(nameFile);
      return (
        <>
          <div className="icon-view-operation">
	    <div className="icon-recent-description" onClick={() => downloadFile(nameFile)}>
              {iconDocuments(nameFile.split('.')[1])}
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
            <div className="icon-recent-description" onClick={() => downloadFile(nameFile)}>
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
            <div className="icon-recent-description" onClick={() => downloadFile(nameFile)}>
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
