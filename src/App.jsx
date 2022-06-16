import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';

import Articles from "./components/Articles/Articles";
import Submit from "./components/Submit/Submit"
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={ <Articles />} />
        <Route path="/submit" element={ <Submit />} />
      </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
