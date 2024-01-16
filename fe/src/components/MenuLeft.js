import "./ComponentsStyles.css";
import FolderIcon from "@mui/icons-material/Folder";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
let menuList = [
  {
    icon: <FolderIcon className="icon-item-menu icon-item-menu-explorer" />,
    iconName: "Explorar",
    code: 1,
  },
  {
    icon: (
      <PhotoSizeSelectActualIcon className="icon-item-menu icon-item-menu-image" />
    ),
    iconName: "Imagenes",
    code: 2,
  },
  {
    icon: <VideoLibraryIcon className="icon-item-menu icon-item-menu-video" />,
    iconName: "Videos",
    code: 3,
  },
  {
    icon: <DescriptionIcon className="icon-item-menu icon-item-menu-doc" />,
    iconName: "Documentos",
    code: 4,
  },
];
const MenuLeft = ({
  typeSelected,
  setTypeSelected,
  foldersPath,
  setFoldersPath,
}) => {
  const [updateComponent, setUpdateComponent] = useState(0);
  const navigate = useNavigate();
  const goBack = () => {
    if (foldersPath.pathList.length > 1) {
      foldersPath.pathList.pop();
      let newPathName =
        foldersPath.pathList.length > 1
          ? foldersPath.pathList[foldersPath.pathList.length - 1]
          : foldersPath.pathList[0];
      foldersPath.path = newPathName;
      setFoldersPath(foldersPath);
      if (newPathName != "") {
        navigate(`/path/${newPathName}`);
      } else {
        navigate(`/`);
      }
    } else if (foldersPath.pathList.length === 1) {
      let newPathName = "";
      foldersPath.pathList = [];
      foldersPath.path = newPathName;
      setFoldersPath(foldersPath);
      if (newPathName != "") {
        navigate(`/path/${newPathName}`);
      } else {
        navigate(`/`);
      }
    } else {
      navigate(`/`);
    }
  };
  useEffect(() => {
    setUpdateComponent((updateComponent) => updateComponent + 1);
  }, [foldersPath.path]);
  return (
    <>
      <div className="menu-items-container">
        {foldersPath.path.length === 0 ? (
          menuList.map((value, key) => (
            <>
              <div
                className="menu-item"
                onClick={() => setTypeSelected(value.iconName)}
              >
                {value.icon} <p className="name-menu-item">{value.iconName}</p>
              </div>
            </>
          ))
        ) : (
          <>
            <div className="menu-item" onClick={() => goBack()}>
              <ArrowBackIcon className="icon-item-menu icon-item-menu-back" />
              <p className="name-menu-item">Volver</p>
            </div>
            <div className="menu-item">
              {menuList[0].icon}{" "}
              <p className="name-menu-item">{foldersPath.path}</p>
            </div>
            <div className="menu-item">
              <CreateNewFolderIcon className="icon-item-menu icon-item-menu-doc" />{" "}
              <p className="name-menu-item">Nueva carpeta</p>
            </div>
            <div className="menu-item">
              <FolderDeleteIcon className="icon-item-menu icon-item-menu-video" />{" "}
              <p className="name-menu-item">Eliminar carpeta</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default MenuLeft;
