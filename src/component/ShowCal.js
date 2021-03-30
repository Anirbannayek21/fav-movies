import React from 'react';
import {add, sub, mul,div} from './calculator';


function ShowCal(){
    return (
        <>
            <ol>
                <li>sum of two number : {add(40,5)}</li>
                <li>subtraction of two number : {sub(40,5)}</li>
                <li>multipication of two number : {mul(40,5)}</li>
                <li>division of two number : {div(40,3)}</li>
            </ol>
        </> 
    );
};

export default ShowCal;