import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, onSushiClick}) {
  
  const [fourIndex, setFourIndex] = useState(0)

  const fourSushis = sushis
    .slice(fourIndex, fourIndex + 4)
    .map(sushi => <Sushi key={sushi.id} sushi={sushi} onSushiClick={onSushiClick}/>)
  
    function renderNewSushi(){
      setFourIndex((fourIndex) => fourIndex + 4)
    }


  return (
    <div className="belt">
      {fourSushis}
      <MoreButton renderNewSushi={renderNewSushi}/>
    </div>
  );
}

export default SushiContainer;
