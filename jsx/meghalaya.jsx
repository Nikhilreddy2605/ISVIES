import React from 'react'
import logo from './Black And White Modern Marketing Agency Round Stamp Business Logo (2).png'
import './andhrapradesh.css'
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar,Doughnut,Line } from 'react-chartjs-2'
import revenueData from "../../meghalayarevenue.json"

const Meghalaya = () => {
  return (
    <div>
        <div className='log'>
            <img src={logo} className='logo' alt='logo'></img>
            <p className="name"><strong>INDIAN STATE VISUALIZATION IN EACH SECTOR</strong></p>
        </div>
        <h1 className='ap'>Meghalaya</h1>
        <div className='barchart'> 
            <Bar 
               data={{
                labels:["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
                datasets:[
                    {
                        label:"Debts in crores",
                        data:[4500,7515,7327,11000,11049,12670,14000,17750,18457,17333,72000],
                        backgroundColor:["orangered"]
                    }
                ]
               }}
            />
            <Doughnut 
                  data={{
                    labels:["Agriculture","Forestry","Mining","Tourism","Handicrafts and Handlooms","Education","Services","Energy"],
                    datasets:[
                        {
                            label:"sector in percentage wise",
                            data:[22,16,14,13,11,9,8,7],
                            backgroundColor:[
                                "#982B1C",
                                "#FF8343",
                                "#179BAE",
                                "#4158A6",
                                "#FF4E88",
                                "#7C00FE",
                                "#708871",
                                "#399918"
                            ],
                        }
                    ]
                   }}
                
            />
            
        </div>
        <div className='linechart'>
            <Line data={{
                labels:revenueData.map((data)=> data.label),
                datasets:[
                    {
                        label:"Revenue",
                        data:revenueData.map((data)=>data.revenue),
                        backgroundColor:"red",
                        borderColor:"red",
                    },
                    {
                        label:"Cost",
                        data:revenueData.map((data)=>data.cost),
                        backgroundColor:"blue",
                        borderColor:"blue",
                    },
                ]
            }} />
        </div>

        </div>
  )
}

export default Meghalaya