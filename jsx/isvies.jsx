import React from "react";
import "./isvies.css";
import andhra from "./andhra.png";
import arunachal from "./arunachal.png";
import assam from "./assam.jpg";
import bihar from "./bihar.jpg";
import chhattisgarh from "./chhattisgarh.png";
import goa from "./goa.jpg";
import gujarat from "./Gujarat.webp";
import haryana from "./haryana.jpg";
import himachal from "./himachal.jpg";
import jharkhand from "./jharkhand.jpg";
import karnataka from "./Karnataka.jpg";
import kerla from "./kerala.jpg"
import madhyaPradesh from "./madhyapradesh.png"
import maharastra from "./maharashtra.jpg"
import manipur from "./Manipur.png"
import meghalaya from "./meghalaya.png"
import mizoram from "./mizoram3.webp"
import nagaland from "./nagaland.png"
import odisha from "./odisha2.jpg"
import punjab from "./punjab.jpg"
import rajasthan from "./rajasthan.jpg"
import sikkim from "./sikkim.png"
import tamilNadu from "./Tamilnadu2.jpg"
import telangana from "./telangana.jpg"
import tripura from "./tripura.jpg"
import uttarPradesh from "./Uttarpradesh.jpeg"
import uttarakhand from "./uttarakhand.webp"
import westBengal from "./west_bengal.png"
import logo from "./Black And White Modern Marketing Agency Round Stamp Business Logo (2).png"
import { useNavigate} from "react-router-dom";
const Isvies = () => {
  const navigate = useNavigate();
  const goToAnotherPage = () => {
    navigate("/AndhraPradesh");
  }
  const navigate2 = useNavigate();
  const go2ToAnotherPage = () => {
    navigate2("/ArunachalPradesh");
  }
  const navigate3 = useNavigate();
  const go3ToAnotherPage = () => {
    navigate3("/Assam");
  }
  const navigate4 = useNavigate();
  const go4ToAnotherPage = () => {
    navigate4("/Bihar");
  }
  const navigate5 = useNavigate();
  const go5ToAnotherPage = () => {
    navigate5("/Chhattisgarh");
  }
  const navigate6 = useNavigate();
  const go6ToAnotherPage = () => {
    navigate6("/Goa");
  }
  const navigate7 = useNavigate();
  const go7ToAnotherPage = () => {
    navigate7("/Gujarat");
  }
  const navigate8 = useNavigate();
  const go8ToAnotherPage = () => {
    navigate8("/Haryana");
  }
  const navigate9 = useNavigate();
  const go9ToAnotherPage = () => {
    navigate9("/Himachal Pradesh");
  }
  const navigate10 = useNavigate();
  const go10ToAnotherPage = () => {
    navigate10("/Jharkhand");
  }
  const navigate11 = useNavigate();
  const go11ToAnotherPage = () => {
    navigate11("/Karnataka");
  }
  const navigate12 = useNavigate();
  const go12ToAnotherPage = () => {
    navigate12("/Kerla");
  }
  const navigate13 = useNavigate();
  const go13ToAnotherPage = () => {
    navigate13("/MadhyaPradesh");
  }
  const navigate14 = useNavigate();
  const go14ToAnotherPage = () => {
    navigate14("/Maharashtra");
  }
  const navigate15 = useNavigate();
  const go15ToAnotherPage = () => {
    navigate15("/Manipur");
  }
  const navigate16 = useNavigate();
  const go16ToAnotherPage = () => {
    navigate16("/Meghalaya");
  }
  const navigate17 = useNavigate();
  const go17ToAnotherPage = () => {
    navigate17("/Mizoram");
  }
  const navigate18 = useNavigate();
  const go18ToAnotherPage = () => {
    navigate18("/Nagaland");
  }
  const navigate19 = useNavigate();
  const go19ToAnotherPage = () => {
    navigate19("/Odisha");
  }
  const navigate20 = useNavigate();
  const go20ToAnotherPage = () => {
    navigate20("/Punjab");
  }
  const navigate21 = useNavigate();
  const go21ToAnotherPage = () => {
    navigate21("/Rajasthan");
  }
  const navigate22 = useNavigate();
  const go22ToAnotherPage = () => {
    navigate22("/Sikkim");
  }
  const navigate23 = useNavigate();
  const go23ToAnotherPage = () => {
    navigate23("/TamilNadu");
  }
  const navigate24 = useNavigate();
  const go24ToAnotherPage = () => {
    navigate24("/Telangana");
  }
  const navigate25 = useNavigate();
  const go25ToAnotherPage = () => {
    navigate25("/Tripura");
  }
  const navigate26 = useNavigate();
  const go26ToAnotherPage = () => {
    navigate26("/UttarPradesh");
  }
  const navigate27 = useNavigate();
  const go27ToAnotherPage = () => {
    navigate27("/UttaraKhand");
  }
  const navigate28 = useNavigate();
  const go28ToAnotherPage = () => {
    navigate28("/WestBengal");
  }
  return (
    <div className="main2">
      <div className="log">
      <img src={logo} className="logo" alt="logo"></img>
      <p className="name"><strong>INDIAN STATE VISUALIZATION IN EACH SECTOR</strong></p>
      </div>
      <div className="andhra">
        <h1 onClick={()=>goToAnotherPage()}>Andhra Pradesh</h1>
        <img src={andhra} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go2ToAnotherPage()}>Arunachal Pradesh</h1>
        <img src={arunachal} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go3ToAnotherPage()}>Assam</h1>
        <img src={assam} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go4ToAnotherPage()}>Bihar</h1>
        <img src={bihar} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go5ToAnotherPage()}>Chhattisgarh</h1>
        <img src={chhattisgarh} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go6ToAnotherPage()}>Goa</h1>
        <img src={goa} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go7ToAnotherPage()}>Gujarat</h1>
        <img src={gujarat} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go8ToAnotherPage()}>Haryana</h1>
        <img src={haryana} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go9ToAnotherPage()}>Himachal Pradesh</h1>
        <img src={himachal} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go10ToAnotherPage()}>Jharkhand</h1>
        <img src={jharkhand} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go11ToAnotherPage()}>Karnataka</h1>
        <img src={karnataka} alt="andhra" height={200} width={200} />
      </div>
      <div className="andhra">
        <h1 onClick={()=>go12ToAnotherPage()}>Kerala</h1>
        <img src={kerla} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go13ToAnotherPage()}>Madhya Pradesh</h1>
        <img src={madhyaPradesh} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go14ToAnotherPage()}>Maharashtra</h1>
        <img src={maharastra} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go15ToAnotherPage()}>Manipur</h1>
        <img src={manipur} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go16ToAnotherPage()}>Meghalaya</h1>
        <img src={meghalaya} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go17ToAnotherPage()}>Mizoram</h1>
        <img src={mizoram} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go18ToAnotherPage()}>Nagaland</h1>
        <img src={nagaland} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go19ToAnotherPage()}>Odisha</h1>
        <img src={odisha} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go20ToAnotherPage()}>Punjab</h1>
        <img src={punjab} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go21ToAnotherPage()}>Rajasthan</h1>
        <img src={rajasthan} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go22ToAnotherPage()}>Sikkim</h1>
        <img src={sikkim} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go23ToAnotherPage()}>Tamil Nadu</h1>
        <img src={tamilNadu} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go24ToAnotherPage()}>Telangana</h1>
        <img src={telangana} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go25ToAnotherPage()}>Tripura</h1>
        <img src={tripura} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go26ToAnotherPage()}>Uttar Pradesh</h1>
        <img src={uttarPradesh} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go27ToAnotherPage()}>Uttarakhand</h1>
        <img src={uttarakhand} alt="andhra" height={200} width={200}/>
      </div>
      <div className="andhra">
        <h1 onClick={()=>go28ToAnotherPage()}>West Bengal</h1>
        <img src={westBengal} alt="andhra" height={200} width={200}/>
      </div>
    </div>
  );
};

export default Isvies;
