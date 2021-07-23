import { Link } from "react-router-dom";

import React from "react";

import "./Specialization.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import BigPaper from "../../components/Bigpaper/BigPaper";
import AppScreen from "../../components/AppScreen/AppScreen";
import SubjectCard from "../../components/SubjectCard/SubjectCard";
import Journey from "../../components/Journey/Journey";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import AppButton from "../../components/AppButton/AppButton";

export default function Specialization() {
  return (
    <AppScreen>
      <BigPaper height="80vh" width="70vw">
        <section className="spec-section">
          <Journey steps={5} activeStep={1} />
          <HeaderText align="center">
            What subjects do you specialize in?
          </HeaderText>
          <HeaderText align="center" variant="body1">
            You can choose more than one subject
          </HeaderText>
          <div className="spec-grid-container">
            <SubjectCard subject="mathematics">Mathematics</SubjectCard>
            <SubjectCard subject="chemistry">Chemistry</SubjectCard>
            <SubjectCard subject="physics">Physics</SubjectCard>
            <SubjectCard subject="biology">Biology</SubjectCard>
            <SubjectCard subject="reasoning">Logical Reasoning</SubjectCard>
            <SubjectCard subject="others">Others</SubjectCard>
          </div>
          <span className="spec-button-group">
            <Link to="/login" className="dirtyLink">
              <AppButton startIcon={<ChevronLeft />}>Previous</AppButton>
            </Link>
            <span className="skipNext-group">
              <Link to="/preferances" className="dirtyLink">
                <AppButton>Skip</AppButton>
                <AppButton endIcon={<ChevronRight />} variant="contained">
                  Next
                </AppButton>
              </Link>
            </span>
          </span>
        </section>
      </BigPaper>
    </AppScreen>
  );
}
