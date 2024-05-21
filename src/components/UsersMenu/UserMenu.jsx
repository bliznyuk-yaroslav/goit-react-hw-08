import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={css.container}
    >
      <Typography variant="h6" className={css.username}>
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        style={{ color: "#1976d2", backgroundColor: "white" }}
        onClick={handleLogout}
        className={css.btn}
      >
        Log out
      </Button>
    </Stack>
  );
}
