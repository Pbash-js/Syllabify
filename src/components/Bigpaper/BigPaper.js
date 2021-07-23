import React from "react";
import { Paper } from "@material-ui/core";
import "./BigPaper.css";
export default function BigPaper({ height, width, ...otherProps }) {
  return (
    <Paper
      className="big-paper"
      style={{ minHeight: height, minWidth: width }}
      {...otherProps}
    >
      {otherProps.children}
    </Paper>
  );
}
