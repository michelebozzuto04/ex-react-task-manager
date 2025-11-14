import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='headerContainer'>
            <nav>
                <ul className='headerList'>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "navActive" : ""
                            }
                            to={'/'}
                        >
                            Le tue task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "navActive" : ""
                            }
                            to={'/add'}
                        >
                            Aggiungi task
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar