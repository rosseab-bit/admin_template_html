import "../components/ComponentsStyles.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from '@mui/icons-material/Article';
import AirplayIcon from '@mui/icons-material/Airplay';
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
  }else if (type === "doc") {
    return (
      <>
        <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />
      </>
    );
  }else if (type === "txt") {
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
  }else {
    return (
      <>
        <DescriptionIcon className="icon-item-recent icon-item-recent-documents" />
      </>
    );
  }

};

export { iconDocuments };
