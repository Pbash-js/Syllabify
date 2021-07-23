import { Link } from "react-router-dom";

import React, { useState } from "react";

import "./Preferances.css";
import colors from "../../colors";
import HeaderText from "../../components/HeaderText/HeaderText";
import BigPaper from "../../components/Bigpaper/BigPaper";
import AppScreen from "../../components/AppScreen/AppScreen";
import { FormControlLabel } from "@material-ui/core";
import Journey from "../../components/Journey/Journey";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import AppButton from "../../components/AppButton/AppButton";
import FormField from "../../components/FormField/FormField";
import { Formik } from "formik";
import { Paper } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import YesNoCard from "../../components/YesNoCard/YesNoCard";

export default function Preferances() {
  return (
    <AppScreen>
      <BigPaper height="80vh" width="70vw">
        <section className="pref-section">
          <Journey steps={5} activeStep={5} />
          <HeaderText align="center">Set your Preferences</HeaderText>
          <Formik
            initialValues={{
              username: "",
              hours: 0,
              english: false,
              hindi: false,
              marathi: false,
              kannada: false,
              telugu: false,
              tamil: false,
              kashmiri: false,
              malyalam: false,
              french: false,
              german: false,
              spanish: false,
              russian: false,
              hasPenTab: true,
            }}
            onSubmit={(values) => console.log(values.hasPenTab)}
          >
            {({ handleSubmit, handleChange, values }) => (
              <form className="pref-form" onSubmit={handleSubmit}>
                <div className="pref-text-inputs">
                  <FormField
                    placeholder="eg. John Does"
                    type="text"
                    name="username"
                    label="Set your username"
                    required
                  />
                  <FormField
                    placeholder={0}
                    type="number"
                    name="hours"
                    label="Set your daily hours"
                    required
                  />
                </div>
                <div>
                  <HeaderText variant="body1">
                    Choose your prefered language
                  </HeaderText>
                  <Paper
                    className="pref-language-select"
                    style={{ backgroundColor: colors.primary.background }}
                  >
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="english"
                          value={values.english}
                        />
                      }
                      label="English"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="hindi"
                          value={values.telugu}
                        />
                      }
                      label="Telugu"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="french"
                          value={values.french}
                        />
                      }
                      label="French"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="hindi"
                          value={values.hindi}
                        />
                      }
                      label="Hindi"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="tamil"
                          value={values.tamil}
                        />
                      }
                      label="Tamil"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="german"
                          value={values.german}
                        />
                      }
                      label="German"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="marathi"
                          value={values.marathi}
                        />
                      }
                      label="Marathi"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="kashmiri"
                          value={values.kashmiri}
                        />
                      }
                      label="Kashmiri"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="spanish"
                          value={values.spanish}
                        />
                      }
                      label="Spanish"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="kannada"
                          value={values.kannada}
                        />
                      }
                      label="Kannada"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="malayalam"
                          value={values.malayalam}
                        />
                      }
                      label="Malayalam"
                    />
                    <FormControlLabel
                      className="muted-text"
                      control={
                        <Checkbox
                          color="primary"
                          onChange={handleChange}
                          name="russian"
                          value={values.russian}
                        />
                      }
                      label="Russian"
                    />
                  </Paper>
                </div>
                <YesNoCard
                  question="Do you have a Pen-Tablet/I-pad with stylus/Android tablet with stylus?"
                  name="hasPenTab"
                />
                <span className="pref-button-group">
                  <Link to="/specialization" className="dirtyLink">
                    <AppButton startIcon={<ChevronLeft />}>Previous</AppButton>
                  </Link>
                  <span className="skipNext-group">
                    <Link to="/dashboard" className="dirtyLink">
                      <AppButton>Skip</AppButton>
                      <AppButton
                        onClick={() => handleSubmit()}
                        endIcon={<ChevronRight />}
                        variant="contained"
                      >
                        Next
                      </AppButton>
                    </Link>
                  </span>
                </span>
              </form>
            )}
          </Formik>
        </section>
      </BigPaper>
    </AppScreen>
  );
}
