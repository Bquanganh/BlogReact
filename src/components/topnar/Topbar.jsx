import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar(){
    const user= false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/write" >WRITE</Link>
                    </li>
                    <li className="topListItem">
                     {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user?(

                    <img className="topImg" src="https://cdna.artstation.com/p/assets/images/images/008/544/918/medium/dax-pandhi-001a.jpg?1513451468" alt="" />
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}