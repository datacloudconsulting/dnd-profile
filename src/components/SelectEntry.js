import React, { Component } from 'react';

import BorderContainer from './BorderContainer'

export default class SelectEntry extends Component {


    render() {
        const { name, values, callback } = this.props

        return (
            <BorderContainer>
                <b>{name}</b>
                <p>
                    <select type="number" onChange={e => callback(e.target.value)}>
                        {values.map((e, index) => <option key={index + ' - ' + e}>{e}</option>)}
                    </select>
                </p>
            </BorderContainer>
        )
    }
}
