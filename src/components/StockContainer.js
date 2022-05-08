import React from "react";
import Stock from "./Stock";

function StockContainer( { allStocks, buyStock } ) {
  return (
    <div>
      <h2>Stocks</h2>
      {allStocks.map((stock) => (
        <Stock key={stock.id} {...stock} buyStock={buyStock}  />
      ))}
    </div>
  );
}

export default StockContainer;
