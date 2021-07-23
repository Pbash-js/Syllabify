import React from "react";
import { Typography } from "@material-ui/core";

import "./HeaderText.css";
export default function HeaderText(props) {
  return (
    <Typography className="header-text" variant="h5" {...props}>
      {props.children}
    </Typography>
  );
}
