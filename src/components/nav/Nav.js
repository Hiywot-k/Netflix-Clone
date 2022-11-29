import React, {useState,useEffect}from 'react'
import "./nav.css"
import NavLinks from './navLinks'

function Nav() {
  // for the nav BG to be black on scr[l 
  // initial value is false b/c we want to change after certain time
  const[nav,setNav]=useState(false)
  // since we want BG to change when we scr[l up, we need event listner
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        setNav(true);
      }else setNav(false)
    })
  },[]) 
  return (
    <div className={`nav ${nav && "nav_black"}`}>
        <img className='nav_logo' src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'/>
        {/* <div className='nav_link'>
        <ul >
          <NavLinks urlLinks="/home" urlName="Home"/>
          <NavLinks urlLinks="/tv" urlName="TV Shows"/>
          <NavLinks urlLinks="movies" urlName="Movies"/>
          <NavLinks urlLinks="/new" urlName="New & Popullar"/>
          <NavLinks urlLinks="mylist" urlName="My List"/>
          <NavLinks urlLinks="brows" urlName="Brows by Languages"/>
        </ul>
        </div> */}
        <div className='nav_avatar'>
          <img alt="File:Netflix-avatar.png" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" decoding="async" width="40" height="30" data-file-width="20" data-file-height="20"></img>
        </div>

    </div>
  )
}

export default Nav