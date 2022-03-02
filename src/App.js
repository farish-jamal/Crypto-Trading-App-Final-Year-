import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Header from "./Component/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    // <BrowserRouter>
       <div>
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
