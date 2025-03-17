import React from 'react'

const Profile = ({name, age, status}) => {
  return (
    <div className='container border border-secondary rounded mb-2 p-3'>
        <p> Name : {name} </p>
        <p> Age : {age} </p>
        <p> Status : {status ? "Active" : "Inactive"} </p>
        <button className='btn btn-outline-primary'>Details</button>
    </div>
  )
}

export default Profile