import React from "react";
import SearchBar from "./SearchBar";
import "./Main.scss";
import ArticleList from "../ArticleList/ArticleList";

/**
 * Main component.
 */
const Main: React.FC = () => {
  const [articles, setArticle] = React.useState([]);
  const [error, setError] = React.useState<boolean>(true);

  if(articles.length){
    document.querySelector(".wrapper-footer")?.classList?.replace("wrapper--footer-absolute","wrapper--footer-relative");
  }else{
    document.querySelector(".wrapper-footer")?.classList?.replace("wrapper--footer-relative","wrapper--footer-absolute");
  }
  return (
    <div data-testid="main" className="bt--container-main">
      <h1> BT React Code Test - by Surya Prakash Singh - 08/03/2021 </h1>
{      /** * Search Bar component. */
}      <SearchBar populateArticle={setArticle} status={setError} />
{      /** Articles List */
}      <div>
        {!error && articles && articles?.length > 0 ? (
          <div className="bt--wrapper-artice">
              <div className="card">
                  <h2 aria-live="polite">Your Search Resuls</h2>
                  </div>
            <ArticleList data={articles} />
          </div>
        ) : (
          /*If No Match Found for the query String* */
          !error &&
          articles &&
          articles.length === 0 && (
            <div key="post--not-found" className="row">
              <div className="column">
                <div className="card">
                  <h2 aria-live="polite">No Post matching your query found!</h2>
                  </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Main;
