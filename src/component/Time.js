import React from 'react'
import './Time.css'

const date = new Date();
let hour = date.getHours();
let text="";
const timeColor = { };

if(hour>=1 && hour<=11){
    text = "Good Morning";
    timeColor.color = "green";
}
else if(hour>=12 && hour<=15){
    text = "Good Afternoon";
    timeColor.color = "red";
}
else if(hour>=16 && hour<=19){
    text = "Good evening";
    timeColor.color = "orange";
}
else if(hour>=20 && hour<=24){
    text = "Good Night";
    timeColor.color = "black";
}


export default function Time() {
    return (
        <div className="container">
            <h1 className="heading">Hello sir, <span style={timeColor}>{text}</span></h1>

        </div>
    )
}
