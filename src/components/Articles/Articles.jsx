import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Articles.scss";
// import './fonts/Doppelganger.otf';

const Articles = () => {
  const { articles, getArticles } = useContext(GlobalContext);
  useEffect(() => {
    getArticles();
  }, []);
  const article = articles.map((article) => {
  const URL = article.url;
  const title = article.title
    const abstract = article.abstract.substring(0, 110);
    const author = article.byline;
    const date = article.published_date.substring(0, 10);
    const img = article.multimedia[0].url;

    const truncateAfterWord = (str, chars, placeholder = '...') =>  str.length < chars ? str : `${str.substr( 0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`;

    return (
      <>
        <div key={article.id} className="article">
          <a href={URL}>
            <img src={img} className="article-img" />
            <div className="article-info">
              <h1 className="article-title">{truncateAfterWord(title,45)}</h1>
              <p className="article-abstract">{truncateAfterWord(abstract,90)}</p>
              <div className="article-a-d">
                <span className="article-author">{author}</span>
                <span className="article-date">{date}</span>
              </div>
            </div>
          </a>
        </div>
      </>
    );
  });
  return <div className="articles">{article}</div>;
};

export default Articles;
