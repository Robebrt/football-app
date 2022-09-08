import React from 'react';
import FootballLogo from './assets/shoot.png'
import './Header.css'

export default function Header(){
    return (
        <div className='navbar'>
            <div className='title-logo'>
                Football APP
                <img className="football-logo" src={FootballLogo} alt="Football Logo"></img>
            </div>
            <div className='menu'>
                <a>Matches</a>
                <a>Leagues</a>
                <a>Tables</a>
            </div>
        </div>
    )
}