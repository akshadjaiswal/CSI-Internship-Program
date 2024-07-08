import React from 'react'

const UserImage = ({UserImage,width}) => {
  const w = width || 2;
  return (
    <div className="userImage">
        <img src={UserImage} alt="randomUser" className=' rounded-full  object-cover border '  style={{width:`${w}rem`}}/>
    </div>
  )
}

export default UserImage
