import React from 'react'
import logo from './Black And White Modern Marketing Agency Round Stamp Business Logo (2).png'
import './andhrapradesh.css'
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar,Doughnut,Line } from 'react-chartjs-2'
import revenueData from "../rajasthanrevenue.json"

const Rajasthan = () => {
  return (
    <div>
        <div className='log'>
            <img src={logo} className='logo' alt='logo'></img>
            <p className="name"><strong>INDIAN STATE VISUALIZATION IN EACH SECTOR</strong></p>
        </div>
        <h1 className='ap'>Rajasthan</h1>
        <div className='barchart'> 
            <Bar 
               data={{
                labels:["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
                datasets:[
                    {
                        label:"Debts in crores",
                        data:[185000,248000,220000,250000,280000,250000,340000,448000,450000,550000,650000],
                        backgroundColor:["orangered"]
                    }
                ]
               }}
            />
            <Doughnut 
                  data={{
                    labels:["Agriculture","Tourism","Mining and Minerals","Manufacturing and Industry","Energy","Handicrafts","Education and Research"],
                    datasets:[
                        {
                            label:"sector in percentage wise",
                            data:[24,19,17,16,12,9,5],
                            backgroundColor:[
                                "#153448",
                                "#41B06E",
                                "#141E46",
                                "#FF4191",
                                "#973131",
                                "#FF7F3E",
                                "#808836"
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

export default Rajasthan