import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Layout from "./components/Layout";

import "./scss/app.scss";

export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Routes>
          <Route path="React-pizza-app" element={<Layout />}>
            <Route index element={<Home searchValue={searchValue} />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pizza/:id" component={Pizza} element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

export default App;
