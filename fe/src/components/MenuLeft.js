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
import { connection } from "../utils/conf";
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
  dataView,
  setDataView,
}) => {
  const [updateComponent, setUpdateComponent] = useState(0);
  const navigate = useNavigate();
  const goBack = async () => {
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
    const getPathFiles = async (path) => {
      try {
        const response = await fetch(
          `http://${connection.back_ip}:${
            connection.port
          }/listfile?ruta=${path.pathList.join("/")}`
        );
        const getData = await response.json();
        setDataView(getData.files);
      } catch (err) {
        console.log("error al traer la data: ", err);
        setDataView([]);
      }
    };
    getPathFiles(foldersPath);
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
