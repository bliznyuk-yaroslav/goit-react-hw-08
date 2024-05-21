import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <Box
        sx={{
          mr: 3,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "white",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          {isLoggedIn ? (
            <NavLink to="/contacts" className={getNavLinkClass}>
              Contacts
            </NavLink>
          ) : (
            <Tooltip title="You need to log in to access Contacts">
              <span className={clsx(css.link, css.disabled)}>Contacts</span>
            </Tooltip>
          )}
        </Stack>
      </Box>
    </nav>
  );
}
