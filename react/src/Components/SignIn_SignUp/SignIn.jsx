import React, { useState } from "react";
import "./signIn_signUp.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../Redux/Slices/Auth/authThunks";
import { setAuthToken } from "../../Utils/accontUtils";

const SignIn = () => {
  const [isRemeber,setIsRemeber] = useState(false)
  const [message,setMessage] = useState("")
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authData)

  const validate = Yup.object().shape({
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-z0-9A-Z]+$/, "invalid symbols")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-z0-9A-Z@.]+$/, "invalid symbols"),
  });

  const signinFunc = async (values)=>{
    const {payload} = await dispatch(signInThunk({...values}))
    if(payload.access_token){
      setAuthToken(payload.access_token,payload.refresh_token,isRemeber)
      window.location.href = "/user/account"
    }else{
      setMessage(payload.message)
    }
  }


  return (
    <div className="signIn_div">
      <div className="signIn_content">
        <div className="sign_title">Login</div>
        {
          message.length ? <div className="back_err">{message}</div>:""
        }
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => signinFunc(values)}
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

              <div className="remember">
                <input type="checkbox" onChange={(e)=>setIsRemeber(!isRemeber)}/> <span>Remember Me</span>
              </div>
              <button type="submit" disabled={!isValid}>
                Login
              </button>
            </form>
          )}
        </Formik>
        <div className="go_to_signUp">
          Don't have an account yet?{" "}
          <NavLink to={"/user/signup"}>Register</NavLink>
        </div>

      </div>
    </div>
  );
};

export default React.memo(SignIn);
