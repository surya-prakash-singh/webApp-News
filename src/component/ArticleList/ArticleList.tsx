import React from 'react';

export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
}

interface Props {
  data: Article[]
}

/*
Purpose:- To Strip HTML Tags coming as response
*/
export const stripHtml = (html:string) =>
{
   const tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

/**
 * Article component.
 */
const ArticleList:React.FC<Props> = ({data}): any=> data.map((item:any): any => (
  <div data-testid="articleList" key={item.author + item.title} className="row">
    <div className="card card--fullwidth" tabIndex={0}>
      <div className="row">
        <div>
          <div>
            <div className="bt--wrapper-content">
              <span>Title - </span>
              {item.title}
            </div>
            <div>
              <div className="bt--wrapper-content">
                <span>Author - </span>
                {item.author}
              </div>
              <div>
                {stripHtml(item.description).substring(0,150)}
              </div>
              <div className="bt--wrapper-content">
                <span>Read More - </span>
                <a target="__blank" aria-label={`Read More Link opens in new tab`} href={item.url}>{item.url}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default ArticleList;
