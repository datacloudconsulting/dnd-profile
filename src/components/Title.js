import React, { Component } from 'react';
import logo from '../logo.svg';

import { GiDwarfFace, GiBurningBook } from 'react-icons/gi'

export default class Title extends Component {
    render() {
        const { characterClass } = this.props
        return (
            <>
                <div style={{ display: 'flex', flexWrap: 'no-wrap', alignItems: 'center' }}>
                    <img src={logo} style={{ width: '20%' }} className="App-logo" alt="logo" />
                    <div style={{ margin: '0 auto' }}><h1>DnD Profile</h1>
                        {characterClass ?
                            <div style={{ display: 'flex', flexWrap: 'no-wrap', alignItems: 'center' }}>
                                {characterClass === 'Warrior' ? <GiDwarfFace size={70} /> : ''}
                                {characterClass === 'Wizard' ? <GiBurningBook size={70} /> : ''}
                                <div style={{ margin: '0 10px' }}>You are a {characterClass}!</div>
                            </div> : ''}
                    </div>
                </div>
            </>
        );
    }
}
