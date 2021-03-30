import React from 'react';
// import { Button, Card } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Card.css'


function Cards(props) {
    return (
        <div className="card" style={{width:'18rem'}}>
            <img src={props.img} className="card-img-top" height='300px' alt="pics"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.site}</p>
                    <a href={props.link} className="btn btn-primary" target="_blank" rel="noreferrer">watch now</a>
                </div>
        </div>
    )
}

export default Cards;