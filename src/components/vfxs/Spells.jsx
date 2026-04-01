import React from 'react'
import Void from './Void'
import { useState } from 'react';
import { button, useControls } from 'leva';
import Ice from './Ice';
import Fire from './Fire';
import { useMagic } from '../../hooks/useGame';

const Spells = () => {

    const [count, setCount] = useState(0);

    useControls("Debug", {
      Restart: button(() => setCount((c) => c + 1)),
    });

    const {spells} = useMagic();

    return spells.map((spell) =>
        spell.name === "void" ? (
          <Void key={spell.id} position={spell.position} />
        ) : spell.name === "fire" ? (
          <Fire key={spell.id} position={spell.position} />
        ) : (
          <Ice key={spell.id} position={spell.position} />
        )
      );
}

export default Spells