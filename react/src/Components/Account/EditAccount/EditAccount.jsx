import React, { useState } from "react";
import "./editAccount.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changeUserThunk, getUserThunk } from "../../../Redux/Slices/User/userThunks";

const EditAccount = () => {
  const [message,setMessage] = useState("")
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authData)

  const validate = Yup.object().shape({
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-z0-9A-Z]+$/, "invalid symbols"),
    name: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[a-z0-9A-Z@.]+$/, "invalid symbols"),
  });

  const changeUserInfo = async (values)=>{
    const {payload} = await dispatch(changeUserThunk({newPassword:values.password, newName:values.name}))
    setMessage(payload.message)
    dispatch(getUserThunk())
  }


  return (

      <div className="editAccount">
        <h3>Personal data</h3>
        {
          message.length ? <div className={message.toLowerCase().includes("was changed")? "back_ok":"back_err"}>{message}</div>:""
        }
        <Formik
          initialValues={{
            name:"",
            password:"",
          }}
          onSubmit={(values) => changeUserInfo(values)}
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

              <button type="submit" disabled={!isValid}>
                Change
              </button>
            </form>
          )}
        </Formik>

      </div>

  );
};



export default React.memo(EditAccount);
