import React, { setState, useState } from 'react';
import './App.css';

import Title from './components/Title'
import ValueEntry from './components/ValueEntry';
import SelectEntry from './components/SelectEntry';
import BorderContainer from './components/BorderContainer';

function App() {

  const [characterClass, setCharacterClass] = useState(null)
  const [life, setLife] = useState(0)
  const [strength, setStrength] = useState(0)

  const WARRIOR = 'Warrior'
  const WIZARD = 'Wizard'

  const classesList = ['', WARRIOR, WIZARD]

  return (
    <div className="App">
      <Title characterClass={characterClass} />
      <div style={{ display: 'flex', flexWrap: 'no-wrap' }}>
        <div style={{ width: '20%' }}>
          <SelectEntry name='Character Class' values={classesList} callback={e => setCharacterClass(e)} />
          <ValueEntry name='Life' callback={e => setLife(e)} />
          <ValueEntry name='Strength' callback={e => setStrength(e)} />
        </div>
        <div style={{ width: '40%' }}>
          <BorderContainer>
            <b>Resistance</b>
            <p>Your resistance is (life + strength)/2<br />(+ 2 if you are a warrior)</p>
            <p>Resistance: {Math.round((parseInt(life) + parseInt(strength)) / 2, 0) + (characterClass === WARRIOR ? 2 : 0)}</p>
          </BorderContainer>
        </div>
        <div style={{ width: '40%' }}>
          <BorderContainer>
            <b>Magic</b>
            {characterClass === WIZARD ? <>
              <p>Magic is life + 10</p>
              <p>Magic: {parseInt(life) + 10}</p></>
              :
              <p>Only wizards have magic level</p>}
          </BorderContainer>
        </div>
      </div>

    </div>
  );
}

export default App;
