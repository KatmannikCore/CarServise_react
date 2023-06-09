import React from "react"
import './footer.css'
import logoDemo from "../../access/images/footer/logoDemo.png"
export default function footer() {
    return (
        <footer>
            <div>
                <div class="sub_footer">
                    <div>
                        <p>Ремонт, обслуживание и дооснащение <br/> в ТЕХЦЕНТРЕ СТО АВТО</p>
                    </div>
                    <div class="logo">
                        <img src={logoDemo} alt=""/>
                    </div>
                    <div>
                        <p>Остались вопросы? Задай их специалисту!</p>
                        <div class="button_cont">
                            <button>Заказать обратный званок</button>
                        </div>
                    </div>
                </div>
                <div class="deep_footer">
                    <p>2001-2022 ООО «СТОАВТО», г. Москва. Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}