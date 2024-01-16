import "./ComponentsStyles.css";
import FolderIcon from "@mui/icons-material/Folder";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import { iconDocuments, iconType, choiceTypeIcon } from "../utils/iconFiles";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { connection } from "../utils/conf";

let menuList = [
  {
    icon: <FolderIcon className="icon-item-recent icon-item-recent-folder" />,
    iconName: "Carpetas",
    code: 1,
  },
  {
    icon: (
      <PhotoSizeSelectActualIcon className="icon-item-recent icon-item-recent-image" />
    ),
    iconName: "Imagenes",
    code: 2,
  },
  {
    icon: (
      <VideoLibraryIcon className="icon-item-recent icon-item-recent-video" />
    ),
    iconName: "Videos",
    code: 3,
  },
  {
    icon: (
      <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />
    ),
    iconName: "Documentos",
    code: 4,
  },
];
const OperationFilesView = ({
  typeSelected,
  nameFile,
  foldersPath,
  setFoldersPath,
}) => {
  const navigate = useNavigate();
  const downloadFile = (nameDownload) => {
    let popUp =
      choiceTypeIcon(nameDownload) != "explorer" &&
      window.confirm("Se se descargara el contenido, continuar?");
    if (popUp === true && choiceTypeIcon(nameDownload) != "explorer") {
      const url_download = `http://${connection.back_ip}:${connection.port}/download?name=${nameDownload}`;
      window.location.href = `http://${connection.back_ip}:${connection.port}/download?name=${nameDownload}`;
      //window.open(url_download, '_blank')
    } else if (choiceTypeIcon(nameDownload) === "explorer") {
      let newPath = foldersPath;
      newPath.path = nameDownload;
      newPath.pathList.push(nameDownload);
      setFoldersPath(newPath);
      navigate(`/path/${nameDownload}`)
    }
  };
  const ViewFile = () => {
    const image_url = `http://${connection.back_ip}:${connection.port}/files/${nameFile}`;
    if (typeSelected === "Imagenes") {
      return (
        <>
          <div className="icon-view-operation">
            <div
              className="icon-recent-description"
              onClick={() => downloadFile(nameFile)}
            >
              <img
                src={image_url}
                className="image-operation-view"
                alt={nameFile}
              />
              <p className="name-file-operation">{nameFile}</p>
            </div>
          </div>
        </>
      );
    }
    if (typeSelected === "Documentos") {
      const url_download = `/media/ricardo/initdev/github/admin_template_html/utils/uploads/${nameFile}`;
      return (
        <>
          <div className="icon-view-operation">
            <div
              className="icon-recent-description"
              onClick={() => downloadFile(nameFile)}
            >
              {iconDocuments(nameFile.split(".")[1])}
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
            <div
              className="icon-recent-description"
              onClick={() => downloadFile(nameFile)}
            >
              {menuList[2].icon}
              <p className="name-file-operation">{nameFile}</p>
            </div>
          </div>
        </>
      );
    }
    if (typeSelected === "Explorar") {
      return (
        <>
          <div className="icon-view-operation">
            <div
              className="icon-recent-description"
              onClick={() => downloadFile(nameFile)}
            >
              {choiceTypeIcon(nameFile).response === "image" ? (
                <img
                  src={image_url}
                  className="image-operation-view"
                  alt={nameFile}
                />
              ) : choiceTypeIcon(nameFile).response === "typeok" ? (
                iconType[choiceTypeIcon(nameFile).type].icon
              ) : (
                iconType.expo.icon
              )}
              <p className="name-file-operation">{nameFile}</p>
            </div>
          </div>
        </>
      );
    }
  };

  useEffect(() => {
  }, []);
  return (
    <>
      <ViewFile />
    </>
  );
};
export default OperationFilesView;
