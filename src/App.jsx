import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={ <Articles />} />
      </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
