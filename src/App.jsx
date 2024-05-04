import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";

import "./scss/app.scss";

export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header />
            <div className="content">
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home searchValue={searchValue} />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/pizza/:id" component={Pizza} element={<Pizza />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </SearchContext.Provider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
