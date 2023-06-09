import React from 'react';
import "./Application.css"
export default function Application() {
    return (
        <div className="order_form">
            <p>Заполните форму и мы с вами свяжемся </p>
            
            <form action="../../mail.php" method="POST">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Имя, отчество</span>
                    </div>
                    <input type="text" name="user_name" className="form-control"/>
                    <input type="text" name="user_last-name" className="form-control"/>
                </div> 
                {/* <hr style="opacity: 0;"/> */}
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Ваш автомобиль</span>
                    </div>
                    <input type="text" name="auto" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" name="phone" id="inputGroup-sizing-sm">Номер телефона</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <button type="submit"  className="btn btn-warning">Записаться</button>
            </form>
        </div>
    )}