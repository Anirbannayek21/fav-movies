import React from 'react';
import sdata from '../sdata';

function Heading(){
    return (
        <div className="container" style={{backgroundColor:"rgb(174, 180, 178)"}}>
            <h1 style={{textAlign:"center",padding:"1rem"}}>My favourite {sdata.length} web series</h1>
        </div>
    )
}

export default Heading;