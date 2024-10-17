import React from 'react'
import logo from './Black And White Modern Marketing Agency Round Stamp Business Logo (2).png'
import './andhrapradesh.css'
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar,Doughnut,Line } from 'react-chartjs-2'
import revenueData from "../manipurrevenue.json"

const Manipur = () => {
  return (
    <div>
        <div className='log'>
            <img src={logo} className='logo' alt='logo'></img>
            <p className="name"><strong>INDIAN STATE VISUALIZATION IN EACH SECTOR</strong></p>
        </div>
        <h1 className='ap'>Manipur</h1>
        <div className='barchart'> 
            <Bar 
               data={{
                labels:["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
                datasets:[
                    {
                        label:"Debts in crores",
                        data:[8670,8000,2000,7722,14347,19668,19689,6000,20000,23000,43000],
                        backgroundColor:["orangered"]
                    }
                ]
               }}
            />
            <Doughnut 
                  data={{
                    labels:["Agriculture","Handicrafts and Handlooms","Tourism","Education and Reserach","Manufacturing and Industry","Services","Forestry and Natural Resources"],
                    datasets:[
                        {
                            label:"sector in percentage wise",
                            data:[23,18,16,13,11,10,9],
                            backgroundColor:[
                                "#0D9276",
                                "#436850",
                                "#561C24",
                                "#D04848",
                                "#280274",
                                "#0B60B0",
                                "#FF9843",
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

export default Manipur