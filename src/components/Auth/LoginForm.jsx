import { Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../state/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginUser({userData:values,navigate}))
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            error={!ErrorMessage("email")}
            helperText={
              <ErrorMessage
                name="email"
                render={(msg) => <span className="text-red-600">{msg}</span>}
              />
            }
            margin="normal"
          />
          <Field
            as={TextField}
            type="password"
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            error={!ErrorMessage("password")}
            helperText={
              <ErrorMessage
                name="password"
                render={(msg) => <span className="text-red-600">{msg}</span>}
              />
            }
            margin="normal"
          />
          <Button className="mt-5" type="submit" fullWidth variant="contained">
            Login
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{mt:3}}>
        Don't have an account?
        <Button size="small" onClick={() => navigate("/account/register")}>
          register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
