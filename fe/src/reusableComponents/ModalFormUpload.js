import Modal from "react-modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./ReusableStyles.css";
import React, { useRef } from "react";

const ModalFormUpload = ({ showModalLoad, setShowModalLoad }) => {
  const fileInputRef = useRef(null);
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "200px",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const uploadFile = async (e) => {
    console.log(e.target.value);
    setShowModalLoad(false);
    e.preventDefault();

    const formData = new FormData();
    formData.append("test", e.target.files[0]);

    try {
      const response = await fetch("http://192.168.0.161:3001/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  return (
    <>
      <Modal
        isOpen={showModalLoad}
        onRequestClose={setShowModalLoad}
        contentLabel="Modal Form"
        style={customStyles}
      >
        <lavel className="input-upload-file">
          <input
            style={{ display: "none" }}
            type="file"
            onChange={uploadFile}
            ref={fileInputRef}
          ></input>
          Subir Archivo
        </lavel>
        <Button
          className="button-load"
          variant="outlined"
          onClick={handleButtonClick}
        >
          Cargar
        </Button>
      </Modal>
    </>
  );
};
export default ModalFormUpload;
