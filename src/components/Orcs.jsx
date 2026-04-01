import React from "react";
import { Orc } from "./Orc";
import { useMagic } from "../hooks/useGame";

const Orcs = () => {
  const {orcs} = useMagic();

  return orcs.map((orc) => <Orc key={orc.id} orc={orc} scale={0.4}/>);
};

export default Orcs;
