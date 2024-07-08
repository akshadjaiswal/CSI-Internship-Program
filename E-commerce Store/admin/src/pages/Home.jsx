import React from 'react'
import {userData} from '../constants/dummyData.js'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Chart from '../components/Chart';
import WidgetSM from '../components/WidgetSM.jsx';
import WidgetLg from '../components/WidgetLg.jsx';
const Home = () => {
  return (
    <div className="homepage flex flex-col gap-4 w-full">
      <div className="numbers flex  justify-center items-center gap-2  md:gap-4 ">
      <div className="revenue flex flex-col gap-2 p-2 md:p-8 rounded-lg border border-slate-200 shadow-md">
        <p>Revenue</p>
        <div className="values flex flex-wrap gap-6 ">
          <p className=' md:text-2xl font-semibold'>₹ 2,415</p>
          <div className="rate flex items-center gap-2">
            <p>-11.4</p>
            <ArrowDownwardIcon className=' text-red-600' />
          </div>
        </div>
        <p className='text-sm text-slate-400'>compared to last month</p>

      </div>
      <div className="sales flex flex-col gap-2 p-2 md:p-8 rounded-lg border border-slate-200 shadow-md">
        <p>Sales</p>
        <div className="values flex flex-wrap gap-6 ">
          <p className='  md:text-2xl  font-semibold'>₹ 4,415</p>
          <div className="rate flex items-center gap-2">
            <p>-1.4</p>
            <ArrowDownwardIcon className=' text-red-600' />
          </div>
        </div>
        <p className='text-sm  text-center text-slate-400'>compared to last month</p>

      </div>
      <div className="cost flex flex-col gap-2 p-2 md:p-8 rounded-lg border border-slate-200 shadow-md">
        <p>Cost</p>
        <div className="values flex flex-wrap gap-6 ">
          <p className='  md:text-2xl font-semibold'>₹ 2,225</p>
          <div className="rate flex items-center gap-2">
            <p>+2.4</p>
            <ArrowUpwardIcon className=' text-green-600' />
          </div>
        </div>
        <p className='text-sm text-slate-400'>compared to last month</p>

      </div>
      </div>
      <div className="chart">
      <Chart data={userData} title={"Monthly Active Users"} grid={true} dataKey={"active users"}/>
      </div>

      <div className="latest flex gap-6 flex-col  md:flex-row">
        <WidgetSM/>
        <WidgetLg/>
      </div>
    


    </div>
  )
}

export default Home
