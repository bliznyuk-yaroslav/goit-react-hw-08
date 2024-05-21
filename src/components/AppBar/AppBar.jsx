import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UsersMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
export default function ResponsiveAppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Navigation />
        </Box>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
}
