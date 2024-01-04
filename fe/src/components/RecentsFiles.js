import "./ComponentsStyles.css";
import { useState, useEffect } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import CircularProgress from "@mui/material/CircularProgress";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from "@mui/material/Box";

let recentList = [
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
/*
      <div className="recent-container">
        {recentList.map((value, key) => (
	<>
	<div className="icon-recent-description">
	  {value.icon}
	  <p className="name-file-operation">{value.iconName}</p>
	</div>
    </>
        ))}
      </div>
 */
const RecentsFiles = () => {
  const [dataRecents, setDataRecents] = useState([]);
  const [updateComponent, setUpdateComponent] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);
  const getRecentFiles = async () => {
    try {
      const response = await fetch("http://192.168.0.153:3001/recents");
      const data = await response.json();
      console.log(data);
      setDataRecents(data.files);
      setShowSpinner(false);
    } catch (err) {
      console.log(err);
      setShowSpinner(false);
    }
  };
  useEffect(() => {
    setShowSpinner(true);
    getRecentFiles();
    console.log("data recentes", { dataRecents });
  }, []);
  useEffect(() => {
    setUpdateComponent(updateComponent + 1);
  }, [dataRecents]);
  const openRecents = (nameFile) => {
    let popUp =  window.confirm("Se abrira el contenido en una nueva pestaña, continuar?")
    let url_open = `http://localhost:3001/files/${nameFile}`
    if (popUp === true){
      window.open(url_open, '_blank');
    }
  }
  const downloadFile = (nameDownload) => {
    let popUp =  window.confirm("Se se descargara el contenido, continuar?")
    const url_download =`http://localhost:3001/download?name=${nameDownload}`
    if (popUp === true){
      window.location.href = `http://localhost:3001/download?name=${nameDownload}`
    }
    //window.open(url_download, '_blank')
  }
  return (
    <>
      {showSpinner ? (
        <>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </>
      ) : (
        <div className="container-items-recents">
          {dataRecents.slice(0,4).map((item) => (
            <>
              <p>
                {item.nombre} <br></br> {item.fechaModificacion} <br></br>
		<DownloadIcon className="icon-download-recents" onClick={() => downloadFile(item.nombre)} />
		<OpenInNewIcon className="icon-download-recents" onClick={() => openRecents(item.nombre)}/>
              </p>
            </>
          ))}
        </div>
      )}
    </>
  );
};
export default RecentsFiles;
