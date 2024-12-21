import Navbar from "./components/Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import CustomerRoute from "./Routes/CustomerRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./state/Authentication/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store => store)
  
  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
