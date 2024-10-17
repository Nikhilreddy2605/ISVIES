import React from "react";
import Isaies from "../../isaies";
import Categories from "./categories";
import Signup from "./signup";
import ProtectedRoutes from "../utils/protectedRoutes";
import Navy from "./navy";
import Army from "./army";
import Source from "./Sources";
import TradingViewWidget from "../../market";
import {Route,Routes, BrowserRouter } from "react-router-dom";
import Isvies from "../../isvies";
import AndhraPradesh from "./andhrapradesh";
import ArunachalPradesh from "./arunachalpradesh";
import Assam from "./Assam";
import Bihar from "./bihar";
import Chhattisgarh from "../../chhattisgarh";
import Goa from "./goa";
import Gujarat from "./gujarat";
import Haryana from "./haryana";
import Himachal from "../../himachal";
import Jharkhand from "../../jharkhand";
import Karnataka from "../../karnataka";
import Kerla from "../../kerla";
import MadhyaPradesh from "../../madhyapradesh";
import Maharashtra from "../../maharastra";
import Manipur from "../../manipur";
import Meghalaya from "../../meghalaya";
import Mizoram from "../../mizoram";
import Nagaland from "./nagaland";
import Odisha from "./odisha";
import Punjab from "./punjab";
import Rajasthan from "./rajasthan";
import Sikkim from "./sikkim";
import TamilNadu from "./tamilnadu";
import Telangana from "./telangana";
import Tripura from "./tripura";
import UttarPradesh from "./uttar pradesh";
import Uttarakhand from "./uttarakhand";
import WestBengal from "./westbengal";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/Categories" element={<Categories />} />
      <Route path="/Army" element={<Army />} />
      <Route path="/market" element={<TradingViewWidget />} />
      <Route path="/navy" element={<Navy />}></Route>
      <Route path="/Sources" element={<Source/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/isvies' element={<Isvies />} />
      <Route path="/" element={<Isaies/>}></Route>
      <Route path="/andhrapradesh" element={<AndhraPradesh/>}></Route>
      <Route path="/arunachalpradesh" element={<ArunachalPradesh/>}></Route>
      <Route path="/Assam" element={<Assam/>}></Route>
      <Route path="/Bihar" element={<Bihar/>}></Route>
      <Route path="/chhattisgarh" element={<Chhattisgarh/>}></Route>
      <Route path="/goa" element={<Goa/>}></Route>
      <Route path="/gujarat" element={<Gujarat />}></Route>
      <Route path="/haryana" element={<Haryana/>}></Route>
      <Route path="/himachal pradesh" element={<Himachal/>}></Route>
      <Route path="/Jharkhand" element={<Jharkhand/>}></Route>
      <Route path="/Karnataka" element={<Karnataka/>}></Route>
      <Route path="/Kerla" element={<Kerla/>}></Route>
      <Route path="/MadhyaPradesh" element={<MadhyaPradesh/>}></Route>
      <Route path="/Maharashtra" element={<Maharashtra/>}></Route>
      <Route path="/Manipur" element={<Manipur/>}></Route>
      <Route path="/Meghalaya" element={<Meghalaya/>}></Route>
      <Route path="/Mizoram" element={<Mizoram/>}></Route>
      <Route path="/Nagaland" element={<Nagaland/>}></Route>
      <Route path="/Odisha" element={<Odisha/>}></Route>
      <Route path="/Punjab" element={<Punjab/>}></Route>
      <Route path="/Rajasthan" element={<Rajasthan/>}></Route>
      <Route path="/Sikkim" element={<Sikkim/>}></Route>
      <Route path="/TamilNadu" element={<TamilNadu/>}></Route>
      <Route path="/Telangana" element={<Telangana/>}></Route>
      <Route path="/Tripura" element={<Tripura/>}></Route>
      <Route path="/UttarPradesh" element={<UttarPradesh/>}></Route>
      <Route path="/uttaraKhand" element={<Uttarakhand/>}></Route>
      <Route path="/WestBengal" element={<WestBengal/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  );
};
export default App;
