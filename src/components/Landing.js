import React from 'react'
import {Link} from 'react-router-dom'
import '../css/landing.css'


const Landing = () => {
  return (
    <div className='landingWrapper'>
       <p className='componentLinks'><Link  to='/register'>Register</Link></p>
       <p className='componentLinks' ><Link to='/login'>Login</Link></p>
        
    </div>
  )
}

export default Landing