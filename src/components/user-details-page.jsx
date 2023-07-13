import React from 'react'
import { useSelector } from 'react-redux'
import Breadcrumb from './navbar'

export default function UserDetailsPage () {
  const user = useSelector(state => state.userReducer.activeUser)

  return (
    <div className='container p-5'>
      <Breadcrumb />
      <div className='row'>
        <div className='card mt-5 mb-5 mr-5 shadow pointer'>
          <div className='row'>
            <div className='col-md-5 col-xs-12 col-sm-5 d-flex justify-content-center'>
              <img className='card-img' src={user.avatar} alt='' />
            </div>
            <div
              className='col-md-5 col-xs-12 col-sm-5 p-5'
              style={{ textAlign: 'left' }}
            >
              <h5 className='card-title underline'>Basic Details {user.id}</h5>
              <h6 className='card-title'>Username : {user.username}</h6>
              <h6 className='card-title'>
                Fullname : {user.first_name + user.last_name}
              </h6>
              <h6 className='card-text'>Email : {user.email}</h6>
              <h6 className='card-text'>Gender : {user.gender}</h6>
              <h6 className='card-text'>Phone Number : {user.phone_number}</h6>
              <h6 className='card-text'>
                Social Insurance Number : {user.social_insurance_number}
              </h6>
              <h6 className='card-text'>DOB : {user.date_of_birth}</h6>
              <hr />
              <h5 className='card-title underline'>Address</h5>
              <h6 className='card-title'>City : {user.address.city}</h6>
              <h6 className='card-title'>
                Address :{' '}
                {user.address.street_name +
                  ' ' +
                  user.address.street_address +
                  ' ' +
                  user.address.zip_code}
              </h6>
              <h6 className='card-text'>State : {user.address.state}</h6>
              <h6 className='card-text'>Country : {user.address.country}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
