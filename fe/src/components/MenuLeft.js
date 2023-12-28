import "./ComponentsStyles.css";
import FolderIcon from '@mui/icons-material/Folder';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
let menuList = [
  {
    icon: <FolderIcon />,
    iconName: 'Carpetas',
    code: 1,
  },
  {
    icon: <PhotoSizeSelectActualIcon /> ,
    iconName: 'Imagenes',
    code: 2,
  },
  {
    icon: <VideoLibraryIcon /> ,
    iconName: 'Videos',
    code: 3
  },
  {
    icon: <DescriptionIcon />,
    iconName: 'Documentos',
    code: 4
  },
];
const MenuLeft = () => {
  return (
    <>
    <div className="menu-items-container">
      {menuList.map((value, key) => (
      <>
      <div className="menu-item">
	{value.icon} <p className="name-menu-item">{value.iconName}</p>
      </div>
  </>
      ))}
    </div>
    </>
  );
}
export default MenuLeft
