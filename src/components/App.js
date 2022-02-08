import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
	const [sushis, setSushis] = useState([]);
  const [wallet, setWallet] = useState(20)


  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        const updatedSushis = data.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushis(updatedSushis);
      });
  }, []);

  function handleSushiClick(sushi){
    if(wallet >= sushi.price){
      const updatedSushis = sushis.map(elem => {
        if(elem.id === sushi.id) {
          return {...elem, eaten: true}
        } else {
          return elem
        }
      })
      setSushis((sushis) => updatedSushis)
      setWallet((wallet) => wallet - sushi.price)
    } else {
      alert('YOU NEED MORE MONEY')
    }
  }

	return (
		<div className="app">
			<SushiContainer sushis={sushis} onSushiClick={handleSushiClick}/>
			<Table wallet={wallet}/>
		</div>
	);
}

export default App;
