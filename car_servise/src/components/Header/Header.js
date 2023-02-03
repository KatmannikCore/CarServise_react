import React from "react"
import './Header.css'
import mark from '../../access/images/header/mark.png'
import clock from '../../access/images/header/clock.png'
import logo from '../../access/images/header/logoDemo.png'
import phone from '../../access/images/header/phone.png'
export default function Header() {
    return (
        <header>
            <div class="heder_top">
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
            <div className='heder_bottom menu'>
                <img className="logo" src={logo}/>
                <nav className='First'>
                    <a href="">Главная</a>
                    <a href="./module/about_center/about_center.htm">О тех-центре</a>
                    <a href=''>Услуги</a>
                    <a href="./module/corporative/corporative.htm">Корпоративным клиентам</a>
                    <a href=''>Гарантия</a>
                    <a>Контакты</a>
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