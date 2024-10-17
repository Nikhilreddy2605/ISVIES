import React from 'react'
import logo from './Black And White Modern Marketing Agency Round Stamp Business Logo (2).png'
import './andhrapradesh.css'
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar,Doughnut,Line } from 'react-chartjs-2'
import revenueData from "../uttarakhandrevenue.json"

const Uttarakhand = () => {
  return (
    <div>
        <div className='log'>
            <img src={logo} className='logo' alt='logo'></img>
            <p className="name"><strong>INDIAN STATE VISUALIZATION IN EACH SECTOR</strong></p>
        </div>
        <h1 className='ap'>UttaraKhand</h1>
        <div className='barchart'> 
            <Bar 
               data={{
                labels:["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
                datasets:[
                    {
                        label:"Debts in crores",
                        data:[35000,32000,38000,44000,54000,56000,66000,64000,68679,90000,84000],
                        backgroundColor:["orangered"]
                    }
                ]
               }}
            />
            <Doughnut 
                  data={{
                    labels:["Tourism","Agriculture","Hydropower","Forestry and Timber","Education and Research","Manufacturing","Handicrafts and Cottage Industries"],
                    datasets:[
                        {
                            label:"sector in percentage wise",
                            data:[24,18,14,13,12,10,9],
                            backgroundColor:[
                                "#BFCFE7",
                                "#739072",
                                "#C6A969",
                                "#7BD3EA",
                                "#756AB6",
                                "#B80000",
                                "#FF9800"
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

export default Uttarakhand