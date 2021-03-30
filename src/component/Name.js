import React from 'react';

const time = new Date().toLocaleTimeString();
const date = new Date().toLocaleDateString();

const heading = {
    color: "#fa9191",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: " bold",
    textShadow: "0px 2px 4px #ffe9c5",
    margin: "70px 0",
};
// const img1 = "https://picsum.photos/200/300";


function Name() {
    return (
        <>
            <h1 style={heading}>My name is Anirban</h1>
            <p style={heading}>Today's Date : {date}</p>
            <p style={heading}>current Time : {time}</p>
            {/* <img className="img" src={img1} alt="random img1" /> */}
        </>
    )
}

export default Name;
