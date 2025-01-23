import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Details from "./Pages/Details"
import AddPage from "./Pages/AddPage"
import FlowersTable from "./Pages/FlowersTable"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/ftable" element={<FlowersTable />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
