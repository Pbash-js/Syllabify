import React from "react";
import { useFormikContext } from "formik";
import { InputLabel, TextField } from "@material-ui/core";

import "./FormField.css";

export default function FormField({
  type,
  name,
  label,
  placeholder,
  ...otherProps
}) {
  const { handleChange } = useFormikContext();

  return (
    <div className="label-container">
      <InputLabel className="small-text-label">
        {label ? label : name[0].toUpperCase() + name.slice(1, name.end)}
        {otherProps.required && <span style={{ color: "red" }}>*</span>}
      </InputLabel>
      <TextField
        onChange={handleChange}
        fullWidth
        hiddenLabel
        type={type}
        name={name}
        placeholder={placeholder}
        variant="outlined"
        className="text-input"
        {...otherProps}
      ></TextField>
    </div>
  );
}
