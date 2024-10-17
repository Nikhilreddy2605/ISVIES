import React from 'react'
import logo from './Black And White Modern Marketing Agency Round Stamp Business Logo (2).png'
import './andhrapradesh.css'
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar,Doughnut,Line } from 'react-chartjs-2'
import revenueData from "../biharrevenue.json"

const Bihar = () => {
  return (
    <div>
        <div className='log'>
            <img src={logo} className='logo' alt='logo'></img>
            <p className="name"><strong>INDIAN STATE VISUALIZATION IN EACH SECTOR</strong></p>
        </div>
        <h1 className='ap'>Bihar</h1>
        <div className='barchart'> 
            <Bar 
               data={{
                labels:["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
                datasets:[
                    {
                        label:"Debts in crores",
                        data:[16000,12000,18500,27000,29000,32000,37700,43000,56000,68000,64000],
                        backgroundColor:["orangered"]
                    }
                ]
               }}
            />
            <Doughnut 
                  data={{
                    labels:["Agriculture","Forestry","Hydropower","Tourism","Handcrafts and handlooms","Pharmaceuticals and Biotechnology"],
                    datasets:[
                        {
                            label:"sector in percentage wise",
                            data:[25,21,18,15,14,7],
                            backgroundColor:[
                                "#F6FB7A",
                                "#1A3636",
                                "#536493",
                                "#399918",
                                "#433D8B",
                                "#36C2CE",
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

export default Bihar