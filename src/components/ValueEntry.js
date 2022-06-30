import React, { Component } from 'react';

import BorderContainer from './BorderContainer'

export default class ValueEntry extends Component {


    render() {
        const { name, callback } = this.props

        return (
            <BorderContainer>
                <b>{name}</b>
                <p>
                    <input type="number" style={{ width: '30%' }} onChange={e => callback(e.target.value)} />
                </p>
            </BorderContainer>
        )
    }
}
