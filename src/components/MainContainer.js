import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setAllStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [stockFilter, setStockFilter] = useState("None")

  useEffect(() => (
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(data => setAllStocks(data.sort((a, b) => a.ticker.localeCompare(b.ticker))))
      .catch(error => alert(error))
  ), [])

  function buyStock(stockId) {
    const filteredStock = allStocks.filter((stock) => stock.id === stockId)
    const addStock = filteredStock[0]

    if (portfolioStocks.some((stock) => stock.id === addStock.id)) {
      alert("You already own that stock!")
      return null
    } else {
      setPortfolioStocks([...portfolioStocks, addStock])
    }
  }

  function sellStock(stockId) {
    const updatedStocks = portfolioStocks.filter((stock) => stock.id !== stockId)
    setPortfolioStocks(updatedStocks)
  }

  function sortByTicker() {
    const copiedArr = [...allStocks]
    const sortedStocks = copiedArr.sort((a, b) => a.ticker.localeCompare(b.ticker))
    setAllStocks(sortedStocks)
  }

  function sortByPrice() {
    const copiedArr = [...allStocks]
    const sortedStocks = copiedArr.sort((a, b) => a.price - b.price)
    setAllStocks(sortedStocks)
  }

  function filterStocks(type) {
    setStockFilter(type)
  }

  const stocksToDisplay = allStocks.filter((stock) => {
      if (stockFilter === "None") return true;
      return stock.type === stockFilter
  })

  return (
    <div>
      <SearchBar sortByTicker={sortByTicker} sortByPrice={sortByPrice} filterStocks={filterStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer allStocks={stocksToDisplay} buyStock={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks} sellStock={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
