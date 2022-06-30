import React, { Component } from 'react';

function BorderContainer(props) {


    return (
        <div style={{ border: '1px solid black', borderRadius: '20px', minHeight: '100px', margin: '10px', display: 'flex', flexDirection: 'column', rowWrap: 'nowrap', alignItems: 'center' }}>
            {props.children}
        </div>
    )

}

export default BorderContainer