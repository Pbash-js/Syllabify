import React, { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  Paper,
  Button,
  Tabs,
  Tab,
  withStyles,
} from "@material-ui/core";

import "./Dashboard.css";
import Image from "../../img/INRIcon.png";

import AppScreen from "../../components/AppScreen/AppScreen";
import HeaderText from "../../components/HeaderText/HeaderText";
import { Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import colors from "../../colors";
import TaskPanel from "../../components/TaskPanel/TaskPanel";
import { FileCrossRedIcon, FilePlusGreenIcon } from "../../AppIcons";
import { ArrowRightAlt } from "@material-ui/icons";
import CardWithTitle from "../../components/CardWithTitle/CardWithTitle";

export default function Dashboard(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppScreen>
      <Drawer variant="permanent">
        <div className="dashboard-logo">
          <div className="company-logo small" />
        </div>
        <div className="drawer">
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="primary"
            TabIndicatorProps={ArrowRightAlt}
          >
            <Tab value={0} label="Dashboard"></Tab>
            <Tab label="Item Two" value={1} />
            <Tab label="Item Three" value={2} />
          </Tabs>
        </div>
      </Drawer>
      <AppBar position="fixed" className="appbar" color="white">
        <Toolbar variant="dense" className="toolbar">
          <Button>User</Button>
        </Toolbar>
      </AppBar>
      <div className="non-drawer">
        <HeaderText>Welcome Back, Nishtha</HeaderText>
        <div className="priority-carousel">
          <CardWithTitle
            useTop
            useButton
            title="See What's On Priority?"
            subtitle={
              <div>
                Complete{" "}
                <span className="red-text bold-text">
                  12 rejected questions
                </span>{" "}
                to earn <span className="red-text bold-text">Rs. 30/q</span>
              </div>
            }
          />

          <CardWithTitle
            useTop
            useButton
            title={
              <Typography variant="body1" className="muted-text">
                New Tasks
              </Typography>
            }
            subtitle={
              <Typography variant="h6" color="black">
                <span style={{ color: "#000" }}>12</span>
              </Typography>
            }
            topIcon={<FilePlusGreenIcon />}
            buttonComponent={
              <ArrowRightAlt style={{ color: colors.success.main }} />
            }
          />
        </div>
        <div className="main-dash">
          <Paper>
            <div className="task-list-container">
              <div className="task-list-header">
                <Typography variant="h6">
                  Complete tasks to start at Syllabify
                </Typography>
                <span className="end-button-panel">
                  <Typography variant="body1" className="muted-text">
                    Select one to proceed
                  </Typography>
                </span>
              </div>
              <Typography variant="body1" className="muted-text">
                Friday
              </Typography>
              <div className="task-list">
                <TaskPanel status="Assigned" />
                <TaskPanel status="Rejected" />
                <TaskPanel status="Completed" />
              </div>
            </div>
          </Paper>
          <CardWithTitle title="Best Practices" />
        </div>
        <div className="side-dash">
          <Paper className="money-earned-container">
            <div className="money-earned">
              <div className="money-earned-left">
                <div className="inr-icon" />
                <Typography variant="h6">255</Typography>
              </div>
              <Typography className="money-earned-currency" color="primary">
                INR
              </Typography>
            </div>
          </Paper>
          <CardWithTitle title="Points Progress">
            <div className="daily-goal">
              <div className="daily-goal-background"></div>
            </div>
          </CardWithTitle>
          <CardWithTitle title="Leaderboard">
            <AppButton fullWidth variant="outlined" color="primary">
              View All Rankings
            </AppButton>
          </CardWithTitle>
          <CardWithTitle title="Contact Us" />
        </div>
      </div>
    </AppScreen>
  );
}
