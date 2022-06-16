import { createContext,useReducer } from 'react';
import axios from "axios";
import AppReducer from "./AppReducer"

const ARTICLES_SECTION = "fashion"
const API_KEY= "rGWlSKS7Rc6HGPbSd1kFOKfa3dkuzFTC"
const initialState = {
  articles: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getArticles = async () => {
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${ARTICLES_SECTION}.json?api-key=${API_KEY}`);
    dispatch({
      type: "GET_ARTICLES",
      payload: res.data.results,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        articles: state.articles,
        getArticles,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
