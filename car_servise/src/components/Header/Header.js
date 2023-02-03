import React from "react"
import './Header.css'
export default function Header() {
    return (
        <div>
            <div className='AllHeader menu'>
                <img className="logo" src='/images/header/logoDemo.png' alt=''/>
                <nav className='First'>
                    <a href="">Главная</a>
                    <a href="./module/about_center/about_center.htm">О тех-центре</a>
                    <a href=''>Услуги</a>
                    <a href="./module/corporative/corporative.htm">Корпоративным клиентам</a>
                    <a href=''>Гарантия</a>
                    <a>Контакты</a>
                </nav>
                <div className="order">
                    <img className="phone" src='/images/header/phone.png' alt=''/>
                    <div>
                        <nav className="number"> +7 (495) 227-79-45</nav>
                        <div className='button'>Записаться</div>
                    </div>
                </div>
            </div>
        </div>
    )
}