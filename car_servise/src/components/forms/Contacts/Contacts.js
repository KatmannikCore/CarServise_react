import React from 'react';
import "./Contacts.css"
export default function Contacts(props) {
    return (
        <div class="modal_wrapper" hidden>
        <div class="modal_window">
            <div class="close">x</div>
            <div class="sub_modal">
                <div class="modal_two">
                    <div class="text">
                        <h3>Москва, ул. Нагорная, д.3 стр.10</h3>
                        <p>ПН-ПТ 10:00 – 21:00 СБ-ВС 10:00 – 17:00</p>
                        <p><strong>Номер телефона:</strong> +7 (495) 227-79-45</p>
                    </div>
                    <div class="logo">
                        <img src="../../../images/header/logoDemo.png" alt=""/>
                    </div>
                </div>
                <div class="map">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A317bc1555dc33e4117d8aaad75c5d68fb9e4fd5e2ade691a33c290a944813f7e&amp;source=constructor" width="900" height="420" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    )
}