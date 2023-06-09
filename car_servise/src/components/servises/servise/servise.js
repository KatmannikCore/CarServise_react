import React from "react"
import './servise.css'
import img1 from "../../../access/images/servises/TO.jpg"
import img2 from "../../../access/images/servises/Tire_fitting.jpg"
import img3 from "../../../access/images/servises/collapse.jpg"
import img4 from "../../../access/images/servises/Diagnostics.jpg"
import img5 from "../../../access/images/servises/Repair.jpg"
import img6 from "../../../access/images/servises/Auto_electrician.jpg"
import img7 from "../../../access/images/servises/Car_air_conditioner.jpg"
import img8 from "../../../access/images/servises/Noise_isolation.jpg"
import img9 from "../../../access/images/servises/car_audio.jpeg"
import img10 from "../../../access/images/servises/Add_equipment.jpg"
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
export default function service(props) {
    function loc(){
        window.location.href=`./corporative/${props.description.id}`
    }
    const img = {
        backgroundImage: `url(${images[props.description.id]})`
    }
    return (
        <div className="coll" onClick={loc}>
            <p className="service_index">0</p>
            <div className="container">
                <div className="front" style={img}>
                    <div className="inner">
                        <p>{props.description.name}</p>
                        <span>{props.description.prise}</span>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <p>
                            {props.description.services[0]}<br/><br/>
                            {props.description.services[1]}<br/><br/>
                            {props.description.services[2]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}