import Modal from "react-modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ModalFormUpload = ({ showModalLoad, setShowModalLoad }) => {
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
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
        <p>Seleccione archivo a cargar.</p>
        <input type="file" onChange={uploadFile}></input>
      </Modal>
    </>
  );
};
export default ModalFormUpload;
