import React from "react";
import "./CardWithTitle.css";

import { Paper, Typography } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import { FileCrossRedIcon } from "../../AppIcons";
import AppButton from "../AppButton/AppButton";
export default function CardWithTitle({
  title,
  subtitle,
  buttonComponent = <ArrowRightAlt />,
  topIcon = <FileCrossRedIcon />,
  useTop = false,
  useButton = false,
  ...otherProps
}) {
  return (
    <Paper>
      <div className="title-container">
        {useTop && <div className="title-icon-container">{topIcon}</div>}
        <div className="title-header">
          <Typography variant="h6">{title}</Typography>
          <span className="end-button-panel">
            <Typography variant="body2" className="muted-text">
              {subtitle}
            </Typography>
            {useButton && (
              <AppButton variant="text" color="secondary">
                {buttonComponent}
              </AppButton>
            )}
          </span>
        </div>
        {otherProps.children}
      </div>
    </Paper>
  );
}
