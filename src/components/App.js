import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

// App
// |__Header
// |__MainContainer
//     |__SearchBar
//     |__StockContainer
//         |__Stock (All stocks)
//     |__PortfolioContainer
//         |__Stock (My stocks)

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
