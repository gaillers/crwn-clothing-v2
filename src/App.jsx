import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const App = () => {
  const Shop = () => {
    return <h1>Shop</h1>;
  };

  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
        {/* <Route path */}
      </Route>
    </Routes>
  );
};

export default App;
