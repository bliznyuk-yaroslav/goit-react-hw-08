import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import css from "./RegistrationForm.module.css";
import Button from "@mui/material/Button";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        toast.success("Success!!!");
      })
      .catch((error) => {
        toast.error("This account already exists");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>
        <Button
          style={{ width: "200px" }}
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          type="submit"
          className={css.btn}
        >
          Register
        </Button>
      </Form>
    </Formik>
  );
}
