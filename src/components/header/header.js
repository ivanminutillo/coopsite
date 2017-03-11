import React from 'react'
import {
  NavLink
} from 'react-router-dom'

const Header = () => (
    <section className='main_header'>
        <div className='header_left'>
            <span className='header_logo'></span>
            <NavLink to='/'>
                <h1 className='header_title'>Lipsum</h1>
            </NavLink>
        </div>
        <div className='header_menu'>
            <ul className='menu_list'>
                <li className='list_item'>
                    <NavLink activeClassName='active' to='/about'>About</NavLink>
                </li>
                <li className='list_item'>
                    <NavLink activeClassName='active' to='/joinus'>Partecipa</NavLink>
                </li>
                <li className='list_item'>
                    <NavLink activeClassName='active' to='/services'>Servizi</NavLink>
                </li>
                <li className='list_item'>
                    <a href='#'>Blog</a>
                </li>
                <li className='list_item'>
                    <a href='#'>Forum</a>
                </li>
                <li className='list_item'>
                    <NavLink to='/contactus'>Contact us</NavLink>
                </li>
            </ul>
        </div>
        <div className='header_right'>
            <a href='#'>accedi</a>
            <span className='icon-login'></span>
        </div>
    </section>
)

export default Header