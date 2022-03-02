import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import { makeStyles } from '@material-ui/core';
import Header from "./Component/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";

function App() {
  const useStyles = makeStyles(() =>({
    App:{
      backgroundColor : "#000",
      color: "#fff",
      minHeight: "100vh"
  }
  }))

  const classes = useStyles();
  return (
    // <BrowserRouter>
       <div className={classes.App}>
         <Header />
         <Routes >
           <Route path="/" element={<HomePage />}  exact />
           <Route path="/coin/:id" element={<CoinPage />} />
         </Routes>
       </div>
    // </BrowserRouter>
  );
}

export default App;
