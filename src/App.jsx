import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./state/Authentication/Action";
import { findCart } from "./state/Cart/Action";
import Routers from "./Routes/Routers";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store => store)
  
  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
    dispatch(findCart(auth.jwt || jwt))
  },[auth.jwt])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers/>
    </ThemeProvider>
  );
}

export default App;
