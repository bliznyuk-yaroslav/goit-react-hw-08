import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.link}>
      <NavLink className={css.linkBtn} to="/register">
        Register
      </NavLink>
      <NavLink className={css.linkBtn} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
