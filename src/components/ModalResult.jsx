import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import H2 from "./ui/Title/H2";
import HR from "./ui/HR";

export default function ModalResult({ result }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="success">
        <span className="font-medium">Confirmar</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <div className="flex">
          <div className="content-center mx-auto min-h-screen">
            <div className="bg-white py-7 px-10 rounded-lg">
              <H2 id="title">Respuestas</H2>
              <HR />
              <ul id="description">
                <li>Nombres: {result.nombres}</li>
                <li>Apellidos: {result.apellidos}</li>
                <li>Email: {result.email}</li>
                <li>Descripción: {result.descripcion}</li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
