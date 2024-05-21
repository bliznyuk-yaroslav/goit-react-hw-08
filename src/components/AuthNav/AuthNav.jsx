import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import Stack from "@mui/material/Stack";

export default function AuthNav() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <NavLink className={css.linkBtn} to="/register">
        Register
      </NavLink>
      <NavLink className={css.linkBtn} to="/login">
        Log In
      </NavLink>
    </Stack>
  );
}
