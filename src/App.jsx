import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CardDetails from "./Pages/CardDetails";
import Form from "./Pages/Form";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/details" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
