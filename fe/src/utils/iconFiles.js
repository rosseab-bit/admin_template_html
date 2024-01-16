import "../components/ComponentsStyles.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";
import AirplayIcon from "@mui/icons-material/Airplay";
import FolderIcon from '@mui/icons-material/Folder';
const iconDocuments = (type) => {
  if (type === "pdf") {
    return (
      <>
        <PictureAsPdfIcon className="icon-item-recent icon-item-recent-pdf" />
      </>
    );
  } else if (type === "docx") {
    return (
      <>
        <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />
      </>
    );
  } else if (type === "doc") {
    return (
      <>
        <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />
      </>
    );
  } else if (type === "txt") {
    return (
      <>
        <ArticleIcon className="icon-item-recent icon-item-recent-txt" />
      </>
    );
  } else if (type === "pptx") {
    return (
      <>
        <AirplayIcon className="icon-item-recent icon-item-recent-txt" />
      </>
    );
  } else {
    return (
      <>
        <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />
      </>
    );
  }
};
const iconType = {
  pdf: {
    icon: (
      <PictureAsPdfIcon className="icon-item-recent icon-item-recent-pdf" />
    ),
  },
  docx: {
    icon: (
      <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />
    ),
  },
  doc: {
    icon: (
      <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />
    ),
  },
  txt: {
    icon: <ArticleIcon className="icon-item-recent icon-item-recent-txt" />,
  },
  pptx: {
    icon: <AirplayIcon className="icon-item-recent icon-item-recent-txt" />,
  },
  expo: {
    icon: <FolderIcon className="icon-item-recent icon-item-menu-explorer" />
  },
};

const choiceTypeIcon = (fileName) => {
  let getExt = fileName.split('.');
  let lengtList = getExt.length;
  let typeExt = Object.keys(iconType);
  if ( getExt[lengtList -1] === "jpg" || getExt[lengtList -1] === "png"){
    return {response:'image'}
  } else if (typeExt.find((itemList)=>  itemList === getExt[lengtList -1])){
    return {response:'typeok', type:getExt[lengtList -1]}
  } else {
    return 'explorer'
  }
};

export { iconDocuments, iconType, choiceTypeIcon };
