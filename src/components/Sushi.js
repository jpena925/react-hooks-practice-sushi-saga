import React from "react";

function Sushi({ sushi, onSushiClick }) {


  function handleEatClick(){
    onSushiClick(sushi)
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatClick}>
        {/* Tell me if this sushi has been eaten! */}
        {sushi.eaten ? null : (
          <img
            src={sushi['img_url']}
            alt={"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
