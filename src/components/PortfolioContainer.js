import React from "react";
import PortfolioStock from "./PortfolioStock";

function PortfolioContainer( { portfolioStocks, sellStock } ) {
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map((stock) => (
        <PortfolioStock key={stock.id} {...stock} sellStock={sellStock} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
