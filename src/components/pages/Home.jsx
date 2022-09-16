import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='jumbo'>
      <h1>Welcome to Blog with ReactJs</h1>
      <Link to='/articles' className='button'>Articles</Link>
    </div>  
  )
}
