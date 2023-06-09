import React from "react"
import './Benefits.css'
import benefits_1 from "../../access/images/benefits/1.svg"
import benefits_2 from "../../access/images/benefits/2.svg"
import benefits_3 from "../../access/images/benefits/3.svg"
import benefits_4 from "../../access/images/benefits/4.svg"
import benefits_5 from "../../access/images/benefits/5.svg"
import benefits_6 from "../../access/images/benefits/6.svg"
import benefits_7 from "../../access/images/benefits/7.svg"
import benefits_8 from "../../access/images/benefits/8.svg"
import benefits_9 from "../../access/images/benefits/9.svg"
export default function Benefits(){
    return(
        <benefits>
            <h1>9 преимуществ нашего авто тех-центра</h1>
            <div className="benefits_wrapper">
                <div className="benefits_content">
                    <div className="benefit_item">
                        <div className="benefit_img">
                            <div className="benefit_img_wrapper">
                                <div className="ztl-icon"></div>
                                <div className="benefit_img_content">
                                    <div className="benefit_img_content_wrapper"><img src={benefits_1} alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Низкие цены</p>
                        <p className="benefit_text">В нашем тех центре вы всегда можете быть уверены, что ваш автомобиль
                            ремонтируется по адекватному прайсу по структурированным нормо-часам в зависимости от
                            автомобиля. Мы не включаем сопутствующие расходники в наряд-заказ, не заманиваем клиентов
                            заведомо ложной стоимостью работ. </p>
                    </div>
                    <div className="benefit_item">
                        <div className="benefit_item">
                            <div className="benefit_img">
                                <div className="benefit_img_wrapper">
                                    <div className="ztl-icon"></div>
                                    <div className="benefit_img_content">
                                        <div className="benefit_img_content_wrapper"><img src={benefits_2} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Сертифицированный автосервис</p>
                        <p className="benefit_text">Наш тех центр ежегодно проходит сертификацию, в том числе по ГОСТ Р
                            51709-2001. Так же мы являемся сертифицированным сервисом BOSH. Мы используем только
                            оригинальные каталоги и программное обеспечение, для наилучшего качества ремонта любых
                            автомобилей.</p>
                    </div>
                    <div className="benefit_item">
                        <div className="benefit_item">
                            <div className="benefit_img">
                                <div className="benefit_img_wrapper">
                                    <div className="ztl-icon"></div>
                                    <div className="benefit_img_content">
                                        <div className="benefit_img_content_wrapper"><img src={benefits_3} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Опытный персонал</p>
                        <p className="benefit_text">Мы очень внимательно подходим к подбору персонала и можем
                            гарантировать, что ваш автомобиль будет ремонтироваться только опытными специалистами,
                            которые регулярно проходят переподготовку и курсы для повышения квалификации.</p>
                    </div>
                    <div className="benefit_item">
                        <div className="benefit_item">
                            <div className="benefit_img">
                                <div className="benefit_img_wrapper">
                                    <div className="ztl-icon"></div>
                                    <div className="benefit_img_content">
                                        <div className="benefit_img_content_wrapper"><img src={benefits_4} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Гарантия на работу</p>
                        <p className="benefit_text">Наши сотрудники используют метод двойного контроля, что позволяет
                            нам с уверенностью давать гарантию на любые виды работ сроком от полугода до 2-х лет.
                            Обратившись к нам, вы можете быть уверены, что вам не откажут в гарантии по надуманной
                            причине, любую проблему мы всегда стараемся решить в пользу клиента.</p>
                    </div>
                    <div className="benefit_item">
                        <div className="benefit_item">
                            <div className="benefit_img">
                                <div className="benefit_img_wrapper">
                                    <div className="ztl-icon" ></div>
                                    <div className="benefit_img_content">
                                        <div className="benefit_img_content_wrapper"><img src={benefits_5} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Современное оборудование</p>
                        <p className="benefit_text">Мы работаем только на современном оборудование, регулярно докупаем и
                            обновляем наш “парк”. Специализированное оборудование позволяет нам быстро и качественно
                            выполнять любые виды даже самых сложных работ по авто.</p>
                    </div>
                    <div className="benefit_item">
                        <div className="benefit_item">
                            <div className="benefit_img">
                                <div className="benefit_img_wrapper">
                                    <div className="ztl-icon"></div>
                                    <div className="benefit_img_content">
                                        <div className="benefit_img_content_wrapper"><img src={benefits_6} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Подбор запчастей</p>
                        <p className="benefit_text">Подбирая вам запчасти, наши сотрудники помогут выбрать, посоветуют
                            оригинальные запчасти или хорошие аналоги. Подскажут где можно сэкономить, а где лучше
                            поставить только оригинал. Заказывая запчасти у нас, вы можете быть уверены в их качестве
                            т.к. мы работаем только с проверенными годами поставщиками.</p>
                    </div>
                    <div className="benefit_item">
                        <div className="benefit_item">
                            <div className="benefit_img">
                                <div className="benefit_img_wrapper">
                                    <div className="ztl-icon"></div>
                                    <div className="benefit_img_content">
                                        <div className="benefit_img_content_wrapper"><img src={benefits_7} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Оперативное выполнение работ</p>
                        <p className="benefit_text">Любые работы мы стремимся выполнить в максимально сжаты сроки, но не
                            в ущерб качеству. За счет оптимизации работы и оперативной доставке запчастей, вы всегда
                            сможете понять сроки выполнения ремонтных работ по вашему авто.</p>
                    </div>
                    <div className="benefit_item">
                        <div className="benefit_item">
                            <div className="benefit_img">
                                <div className="benefit_img_wrapper">
                                    <div className="ztl-icon"></div>
                                    <div className="benefit_img_content">
                                        <div className="benefit_img_content_wrapper"><img src={benefits_8} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Свой склад запчастей</p>
                        <p className="benefit_text">У нас большой склад запасных частей, который регулярно обновляется и
                            пополняется. Это позволяет нам снизить цену для клиентов и ускорить процесс ремонта вашего
                            автомобиля.</p>
                    </div>
                    <div className="benefit_item">
                        <div className="benefit_item">
                            <div className="benefit_img">
                                <div className="benefit_img_wrapper">
                                    <div className="ztl-icon"></div>
                                    <div className="benefit_img_content">
                                        <div className="benefit_img_content_wrapper"><img src={benefits_9} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="benefit_name">Зона комфорта для клиентов</p>
                        <p className="benefit_text">Чтобы время ожидания ремонта вашего автомобиля прошло для вас быстро
                            и приятно, у нас оборудована клиентская комната с чаем и кофе, большим телевизором, игровой
                            приставкой и бесплатным Wi-Fi/ </p>
                    </div>
                </div>
            </div>
        </benefits>
    )
}