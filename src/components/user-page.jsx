import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { setActiveUser, setUsers } from '../state/user'
import Breadcrumb from './navbar'
import Loader from './loader'

export default function UserPage () {
  let { count } = useParams()

  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch()

  const userLoader = useCallback(async () => {
    const promises = []
    for (var i = 0; i < count; i++) {
      promises.push(
        (await fetch('https://random-data-api.com/api/v2/users')).json()
      )
    }
    dispatch(setUsers(await Promise.all(promises)))
  }, [count, dispatch])

  useEffect(() => {
    userLoader()
  }, [userLoader])

  return (
    <div>
      <div className='container py-5 px-5'>
        <Breadcrumb />
        {users.length === 0 ? (
          <Loader />
        ) : (
          <div className='row'>
            {users.length &&
              users.map((user, index) => {
                return (
                  <div className='col-md-3 col-sm-3 col-xs-12 mr-2 pointer'>
                    <div
                      className='card border-secondary mt-2 mb-2 mr-5 shadow-sm pointer '
                      style={{ width: '18rem' }}
                    >
                      <img
                        className='card-img-top img-fluid'
                        src={user.avatar}
                        alt='avatar'
                      />
                      <div className='card-body border-secondary'>
                        <h5 className='card-title'>{user.id}</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>
                          {user.username}
                        </h6>
                        <p className='card-text mb-2 text-muted'>
                          {user.first_name + user.last_name}
                        </p>
                        <Link
                          onClick={() => dispatch(setActiveUser(user))}
                          to={`/user/${user.id}`}
                          className='card-link'
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        )}
      </div>
    </div>
  )
}
