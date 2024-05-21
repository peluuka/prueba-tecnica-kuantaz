"use client";
import useFields from "@/hooks/useFields";
import { Box, Button, Grid, TextField } from "@mui/material";
import H2 from "./ui/Title/H2";
import HR from "./ui/HR";
import ModalResult from "./ModalResult";
import { useState } from "react";

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    descripcion: "",
  });
  const fields = useFields();
  const INPUT_TYPE = {
    TextInput: "text",
    TextEmail: "email",
    Textarea: "text",
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return fields !== undefined ? (
    <form onSubmit={onSubmit}>
      <Box sx={{ flexGrow: 1 }}>
        <H2>Formulario Kuantaz</H2>
        <HR />
        <Grid container spacing={2}>
          {fields.data.map(
            ({ label, name, isRequired, disabled, type, value }, index) => (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  name={name}
                  label={label}
                  required={isRequired}
                  // disabled={disabled}
                  defaultValue={value}
                  type={INPUT_TYPE[type] || "text"}
                  multiline={type === "Textarea" ? true : false}
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
            )
          )}
        </Grid>
        <HR />
        <div className="flex justify-end">
          {/* <Button type="submit" color="success" variant="contained">
            <span className="font-medium">Confirmar</span>
          </Button> */}
          <ModalResult result={formData}></ModalResult>
        </div>
      </Box>
    </form>
  ) : (
    <span className="font-medium">Cargando...</span>
  );
}
