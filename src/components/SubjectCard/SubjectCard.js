import React, { useState } from "react";
import { Card, Checkbox, ButtonBase } from "@material-ui/core";

import "./SubjectCard.css";
import HeaderText from "../HeaderText/HeaderText";
import { Typography } from "@material-ui/core";

export default function SubjectCard({ subject, ...otherProps }) {
  const [value, setValue] = useState(false);

  return (
    <ButtonBase onClick={() => setValue(!value)} rip>
      <Card className="subject-card">
        <div className="subject-image-container">
          <div className={`subject-image subject-image-${subject}`}></div>
        </div>
        <Typography variant="h6">{otherProps.children}</Typography>
        <Checkbox
          className="subject-radio"
          color="primary"
          disableRipple
          checked={value}
        />
      </Card>
    </ButtonBase>
  );
}
