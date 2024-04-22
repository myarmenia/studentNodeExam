import React, { useState } from "react";
import "./signIn_signUp.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../Redux/Slices/Auth/authThunks";
import { setAuthToken } from "../../Utils/accontUtils";

const SignUp = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const validate = Yup.object().shape({
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-z0-9A-Z]+$/, "invalid symbols")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-z0-9A-Z@.]+$/, "invalid symbols"),
    name: Yup.string()
      .required("Required")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-zA-Z.]+$/, "invalid symbols"),
    confirmPassword: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .oneOf([Yup.ref("password")], "Your passwords do not match.")
      .matches(/^[a-z0-9A-Z]+$/, "invalid symbols")
      .required("Required"),
  });

  const signUpFunc = async (values) => {
    const { payload } = await dispatch(signUpThunk({ ...values }));
    setMessage(payload.message);
    if (payload.message.toLowerCase().includes("successfully")) {
      setTimeout(() => {
        window.location.href = "/user/signin";
      }, "2000");
    }
  };

  return (
    <div className="signIn_div">
      <div className="signIn_content">
        <div className="sign_title">Registration</div>
        {message.length ? (
          <div
            className={
              message.toLowerCase().includes("successfully")
                ? "back_ok"
                : "back_err"
            }
          >
            {message}
          </div>
        ) : (
          ""
        )}
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => signUpFunc(values)}
          validationSchema={validate}
          validateOnBlur
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            isValid,
          }) => (
            <form className="signIn_form" onSubmit={handleSubmit}>
              <div className="form_inp">
                <input
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                  placeholder="Name"
                />

                {errors.name && touched.name && <p>{errors.name}</p>}
              </div>
              <div className="form_inp">
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  placeholder="Email"
                />

                {errors.email && touched.email && <p>{errors.email}</p>}
              </div>
              <div className="form_inp">
                <input
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  placeholder="Password"
                />

                {errors.password && touched.password && (
                  <p>{errors.password}</p>
                )}
              </div>
              <div className="form_inp">
                <input
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="confirmPassword"
                  placeholder="Confirm password"
                />

                {errors.confirmPassword && touched.confirmPassword && (
                  <p>{errors.confirmPassword}</p>
                )}
              </div>

              <button type="submit" disabled={!isValid}>
                Registration
              </button>
            </form>
          )}
        </Formik>
        <div className="go_to_signUp">
          You already have an account?
          <NavLink to={"/user/signin"}>Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SignUp);
