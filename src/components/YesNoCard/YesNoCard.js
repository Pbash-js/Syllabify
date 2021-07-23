import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import "./YesNoCard.css";
import { Button } from "@material-ui/core";
import AppButton from "../AppButton/AppButton";
import { useFormikContext } from "formik";

export default function YesNoCard(props) {
  const { setFieldValue } = useFormikContext();
  const [select, toggleSelect] = useState(true);

  const handleCardChange = (yesno) => {
    setFieldValue(`${props.name}`, yesno, true);
    toggleSelect(yesno);
  };

  return (
    <Paper className="yesnocard">
      <Typography variant="body1">{props.question}</Typography>
      <div className="yesno">
        <AppButton
          variant={select ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleCardChange(true)}
        >
          Yes
        </AppButton>
        <AppButton
          variant={!select ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleCardChange(false)}
        >
          No
        </AppButton>
      </div>
    </Paper>
  );
}
