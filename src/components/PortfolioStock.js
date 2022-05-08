import React from "react";

function PortfolioStock( { id, ticker, name, type, price, sellStock } ) {
  
  return (
    <div>
      <div className="card" onClick={() => sellStock(id)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default PortfolioStock;
