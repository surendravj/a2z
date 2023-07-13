import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  const path = window.location.pathname

  const paths = path.split('/').filter(p => p !== '') // Split the path and remove empty segments

  return (
    <nav
      aria-label='breadcrumb'
      className='navbar-light bg-light d-flex justify-content-left align-items-center  '
    >
      <ol className='breadcrumb mt-2 px-5 '>
        <li className='breadcrumb-item'>
          <Link to='/'>Home</Link>
        </li>
        {paths.map((segment, index) => {
          const link = `/${paths.slice(0, index + 1).join('/')}`
          const isLast = index === paths.length - 1

          return (
            <li
              className={`breadcrumb-item${isLast ? ' active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
              key={link}
            >
              {isLast ? (
                segment
              ) : (
                <Link style={{ textTransform: 'capitalize' }} to={path}>
                  {segment}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
