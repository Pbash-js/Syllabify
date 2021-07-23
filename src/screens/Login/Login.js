import { Link } from "react-router-dom";

import React, { useState } from "react";
import { InputAdornment, Button, Typography } from "@material-ui/core";
import { Formik } from "formik";
import { RemoveRedEye, ChevronRight } from "@material-ui/icons";

import "./Login.css";

import FormField from "../../components/FormField/FormField";
import HeaderText from "../../components/HeaderText/HeaderText";
import BigPaper from "../../components/Bigpaper/BigPaper";
import AppScreen from "../../components/AppScreen/AppScreen";

export default function Login() {
  const [showPass, toggleShowPass] = useState();

  return (
    <AppScreen>
      <BigPaper height="80vh" width="70vw">
        <div className="login-section-container">
          <section className="login-section">
            <div className="login-image" />
            <div className="login-form-area">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  password2: "",
                }}
                onSubmit={(values) => console.log(values)}
              >
                {({ handleSubmit, handleChange }) => (
                  <form className="login-form" onSubmit={handleSubmit}>
                    <div
                      className="company-logo small"
                      style={{ margin: 0, alignSelf: "center" }}
                    />
                    <div className="text-inputs">
                      <FormField
                        placeholder="Enter your name"
                        type="name"
                        name="name"
                      />
                      <FormField
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                      />
                      <FormField
                        placeholder="Enter password"
                        type={showPass ? "text" : "password"}
                        name="password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <RemoveRedEye
                                style={{ opacity: 0.5 }}
                                onClick={() => toggleShowPass(!showPass)}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormField
                        placeholder="Re-enter password"
                        type="password"
                        name="password2"
                      />
                    </div>
                    <span className="login-button-group">
                      <Link to="/specialization" className="dirtyLink">
                        <Button
                          endIcon={<ChevronRight />}
                          style={{
                            textTransform: "none",
                            alignSelf: "flex-start",
                            maxLines: 1,
                            fontSize: "0.8rem",
                            display: "flex",
                            fontWeight: "bold",
                          }}
                          variant="contained"
                          color="primary"
                        >
                          Sign Up
                        </Button>
                      </Link>
                      <Typography
                        className="small-text"
                        style={{
                          display: "block !important",
                          textAlign: "center",
                          paddingLeft: "0.5rem",
                        }}
                      >
                        Already have an account?
                        <span style={{ display: "block" }}>
                          <a href="/">Sign In</a>
                        </span>
                      </Typography>
                    </span>
                  </form>
                )}
              </Formik>
            </div>
          </section>
        </div>
      </BigPaper>
      <span className="login-footer">
        <Typography className="muted-text">Privacy Policy</Typography>

        <Typography className="muted-text">Terms {"&"} Conditions</Typography>
      </span>
    </AppScreen>
  );
}
