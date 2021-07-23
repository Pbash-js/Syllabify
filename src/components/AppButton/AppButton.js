import React from "react";
import { Button } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import "./AppButton.css";

export default function AppButton(props) {
  return (
    <Button variant="text" color="primary" className="app-button" {...props}>
      {props.children}
    </Button>
  );
}
