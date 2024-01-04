import "./ComponentsStyles.css";
import FolderIcon from '@mui/icons-material/Folder';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
let menuList = [
  {
    icon: <FolderIcon className="icon-item-menu" />,
    iconName: 'Explorar',
    code: 1,
  },
  {
    icon: <PhotoSizeSelectActualIcon className="icon-item-menu"/> ,
    iconName: 'Imagenes',
    code: 2,
  },
  {
    icon: <VideoLibraryIcon className="icon-item-menu"/> ,
    iconName: 'Videos',
    code: 3
  },
  {
    icon: <DescriptionIcon className="icon-item-menu"/>,
    iconName: 'Documentos',
    code: 4
  },
];
  const MenuLeft = ({typeSelected, setTypeSelected}) => {
  return (
    <>
    <div className="menu-items-container">
      {menuList.map((value, key) => (
      <>
      <div className="menu-item" onClick={() =>setTypeSelected(value.iconName)}>
	{value.icon} <p className="name-menu-item">{value.iconName}</p>
      </div>
  </>
      ))}
    </div>
    </>
  );
}
export default MenuLeft
