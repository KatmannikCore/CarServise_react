import React from "react"
import './Header.css'
import mark from '../../access/images/header/mark.png'
import clock from '../../access/images/header/clock.png'
import logo from '../../access/images/header/logoDemo.png'
import phone from '../../access/images/header/phone.png'
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header>
            <div class="header_top">
                <div>
                    <p> Ремонт и обслуживание автомобилей</p>
                    <div class="place">
                        <img src={mark} class="mark"/>
                        <p>Москва, ул. Нагорная, д.3 стр.10</p>
                    </div>
                    <div class="time">
                        <img src={clock} class="clock"/>
                        <p>ПН-ПТ 10:00 – 21:00 СБ-ВС 10:00 – 17:00</p>
                    </div>
                </div>
            </div>
            <div className='header_bottom menu'>
                <img className="logo" src={logo}/>
                <nav className='First'>
                    <Link to="">Главная</Link>
                    <Link to="/about_center">О тех-центре</Link>
                    <Link to=''>Услуги</Link>
                    <Link to="/corporative">Корпоративным клиентам</Link>
                    <Link to=''>Гарантия</Link>
                    <Link>Контакты</Link>
                </nav>
                <div className="order">
                    <img className="phone" src={phone} alt=''/>
                    <div>
                        <nav className="number"> +7 (495) 227-79-45</nav>
                        <div className='button'>Записаться</div>
                    </div>
                </div>
            </div>
        </header>
    )
}