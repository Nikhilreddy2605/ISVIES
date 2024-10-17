import React from 'react'
import './categories.css'
import { useNavigate } from 'react-router-dom';
import National from "./national_anthem-ai-brush-removebg-bqqvh0qh.png"
import modi from "./modi-removebg-preview.png"
import indianarmy from "./army11.jpg"
import stock from "./stockmarket.jpg"
import source from "./sources2.png"
import sector from "./navy100.png"
import state from "./states.jpg"
import logo from "./Black And White Modern Marketing Agency Round Stamp Business Logo (2).png"
const Categories = () => {
    const navigate1 = useNavigate();
  const go1ToAnotherPage = () => {
    navigate1("/Isvies");
  }
  const navigate2=useNavigate();
  const go2Anotherpage = () =>{
    navigate2("/Army")
  }
  const navigate3 = useNavigate();
  const go3AnotherPage = () =>{
    navigate3("/market")
  }
  const navigate4 = useNavigate();
  const go4AnotherPage = () =>{
    navigate4("/sources")
  }
  const navigate5 = useNavigate();
  const go5AnotherPage = () =>{
    navigate5("/navy")
  }

  return (
    <div className='main3'>
      <div className="log1">
      <img src={logo} className="logo1" alt="logo"></img>
      <p className="name2"><strong>INDIAN STATE VISUALIZATION IN EACH SECTOR</strong></p>
      </div>
    <div className='mainn'>
        <div className='categories'>
            <img src={source} alt="source"className='fs' onClick={()=>go4AnotherPage()}/>
            <img src={indianarmy} alt="indianarmy" className='a' onClick={()=>go2Anotherpage()}/>
            <img src={stock} alt="stock" className='stocks' onClick={()=>go3AnotherPage()}/>
            <img src={sector}  alt="sector" className='S' onClick={()=>go5AnotherPage()}/>
            <img src={state} alt='state' onClick={()=>go1ToAnotherPage()} className='States'/>
        </div>
        <div className='words'>
            <h3 className='w1'>Population:140+crores</h3>
            <h3 className='w1'>Economy:5th in the world</h3>
            <h3 className='w1'>Army:1.4 million</h3>
            <h3 className='w1'>major sector:Agriculture</h3>
            <h3 className='w1'>Currency:Rupees</h3>
        </div>
        <img src={National} alt="National" width={500} height={500} className='india'/>
        <img src={modi} alt="modi" className='modi' height={600}/>
    </div>
    </div>
  )
}

export default Categories