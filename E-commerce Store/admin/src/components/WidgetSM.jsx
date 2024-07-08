import React from 'react'
import { randomUser } from '../assets'
import UserImage from './UserImage';
import { newMembers } from '../constants/dummyData';
import VisibilityIcon from '@mui/icons-material/Visibility';
const WidgetSM = () => {
  return (
 <div className="smallwidget p-4 border border-slate-200 rounded-xl shadow-lg">
    <p className='p-2 font-semibold'>
        New Join Members
    </p>
    {
        newMembers.map((member,index)=>(
            <div className="member flex items-center justify-evenly p-2 gap-4 border border-slate-200 rounded-xl my-1 shadow-md">
                <div className="img">
                <UserImage UserImage={member.userImage}/>
                </div>
           <div className="info">
            <p>{member.username}</p>
           </div>

            <div className="display flex items-center gap-2  bg-purple-100 rounded-xl p-1 ">
<VisibilityIcon/>
<p>Display</p>
            </div>
            </div>
        ))
    }

 </div>
  )
}

export default WidgetSM
