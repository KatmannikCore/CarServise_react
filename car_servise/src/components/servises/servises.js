import React from "react"
import Service from "./servise/servise.js"
import './servises.css'

export default function services() {
    const services_description = [
        {name: "Техническое обслуживание", prise: "От 600₽", services: ["Замена тех. жидкостей", "Замена фильтров", "Сброс сервисных интервалов"], id: 0},
        {name: "Шиномонтаж", prise: "От 1500₽", services: ["Балансировка", "Ремонт проколов", "Хранение колёс"], id: 1},
        {name: "3D Сход-развал", prise: "От 1000₽", services: ["Диагностика", "Одна ось", "Обе оси"], id: 2},
        {name: "Диагностика", prise: "От 600₽", services: ["Осмотр подвески", "Осмотр двигателя", "Осмотр навесного оборудования"], id:3 },
        {name: "Ремонт", prise: "От 700₽", services: ["Ремонт подвески", "Замена навесного оборудования", "Ремонт ДВС"], id:4 },
        {name: "Автоэлектрика", prise: "От 300₽", services: ["Компьютерная диагностика", "Ремонт проводки", "Ремонт автоэлектрики"], id:5},
        {name: "Автокондиционер", prise: "От 1000₽", services: ["Заправка кондиционера", "Ремонт кондиционера", "Поиск утечек фриона"], id:6},
        {name: "Шумоизоляция", prise: "От 2000₽", services: ["Шумоизоляция", "Виброизоляция", "Арматурные работы"], id:7},
        {name: "Автозвук", prise: "От 1000₽", services: ["Шумоизоляция", "Виброизоляция", "Арматурные работы"], id:8},
        {name: "Дооснащение", prise: "От 1500₽", services: ["Камеры заднего вида", "Парктроники", "Мультимедиа IOS и Android"], id:9},
    ]
    return (
        <div class="services">
            <div class="wrapper">
            <p>element</p> 
                <div class="columns">
                    {services_description.map(element => (
                      <Service description = {element}/>
                    ))}
                </div>
            </div>
        </div>
    )
}