import "./app.css"
import { useLazyQuery } from "@apollo/client";
import { GET_REGION } from "./graphql/query";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/productPage";




function App() {
  const [getInfo, { data }] = useLazyQuery(GET_REGION);
  console.log(data)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} getInfo={getInfo} />} />

        <Route path="/productPage" element={<ProductPage data={data} />} />
      </Routes>
    </Router>


  )
}

export default App