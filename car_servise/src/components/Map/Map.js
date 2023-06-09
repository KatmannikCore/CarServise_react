import React from "react"
import './Map.css'
export default function Map(){
    return(
        <map>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A317bc1555dc33e4117d8aaad75c5d68fb9e4fd5e2ade691a33c290a944813f7e&amp;source=constructor"
                width="900" height="420" frameBorder="0"></iframe>
        </map>
    )
}