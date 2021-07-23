import { ButtonBase } from "@material-ui/core";
import React, { useState } from "react";
import {
  SecurityRounded,
  Info,
  PersonAddRounded,
  CheckCircle,
  RemoveCircle,
} from "@material-ui/icons";

import AppButton from "../AppButton/AppButton";
import "./TaskPanel.css";
import { Paper } from "@material-ui/core";
import { KeyIcon } from "../../AppIcons";

export default function TaskPanel({
  title = "Assignment",
  subject = "Subject",
  selected,
  subjectInfo,
  money = 0,
  questions = 1,
  status = "Assigned",
}) {
  const [topics, topicsVisible] = useState(false);

  return (
    <ButtonBase className="task-panel" selected="true">
      <div className="task-icon">
        <KeyIcon />
      </div>
      <div className="task-title-container">
        <div className="task-title bold-text">{title}</div>
        <div className="small-text muted-text task-subject-info">
          {subject}
          <div className="task-topics-info">
            {topics && <div className="task-hidden-subjects"></div>}

            <Info
              fontSize="small"
              onMouseEnter={() => topicsVisible(true)}
              onMouseLeave={() => topicsVisible(false)}
            />
          </div>
        </div>
      </div>
      <div className="task-general-info">
        <div className="task-title small-text bold-text">{money}Rs/q</div>
        <div className="small-text muted-text task-subject-info">
          {questions} questions
        </div>
      </div>
      <div className="task-status-info">
        <div
          className={`
        task-status task-status-${status} bold-text small-text`}
        >
          {status == "Assigned" && <PersonAddRounded fontSize="inherit" />}
          {status == "Rejected" && <RemoveCircle fontSize="inherit" />}
          {status == "Completed" && <CheckCircle fontSize="inherit" />}
          {status}
        </div>
      </div>
      <AppButton
        disableTouchRipple
        variant={selected ? "contained" : "outlined"}
      >
        Continue
      </AppButton>
    </ButtonBase>
  );
}
