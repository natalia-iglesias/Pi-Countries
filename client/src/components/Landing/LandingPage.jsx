import React from 'react';
//import style from 'LandingPage.module.css'
import {Link} from 'react-router-dom';




export default function LandingPage() {
  return (
    <div>
        <h1>Country Page</h1>
        <Link to = '/home'>
            <button>Start</button>
        </Link>
    </div>
  )
}