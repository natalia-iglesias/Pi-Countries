import React from 'react';
import style from '../Landing/LandingPage.module.css'
import {Link} from 'react-router-dom';




export default function LandingPage() {
  return (
    <div className={style.bkg}>
        <Link to = '/home'>
            <button className={style.btn}>Start</button>
        </Link>
        <h1 className= {style.h1}>Country Page</h1>
    </div>
  )
}