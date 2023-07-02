import React from 'react'

const Profile = ({params}: any) => {
  return (
    <div>
        <h1>Profile</h1>
        <hr />
        <p className='text-4xl'>{params.id}</p>
    </div>
  )
}

export default Profile
