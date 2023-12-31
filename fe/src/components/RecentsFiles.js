import "./ComponentsStyles.css";
import FolderIcon from "@mui/icons-material/Folder";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
let recentList = [
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
const RecentsFiles = () => {
  return (
    <>
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
    </>
  );
};
export default RecentsFiles;
