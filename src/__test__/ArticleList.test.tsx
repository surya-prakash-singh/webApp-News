import React from "react";
import { render, screen } from "@testing-library/react";

import ArticleList, { stripHtml } from "../component/ArticleList/ArticleList";

describe("ArticleList", () => {
  it("should check stripHTML strips html from a string", () => {
    const input = "<li>Article</li>";
    const expected = "Article";
    const actual = stripHtml(input);

    expect(actual).toBe(expected);
  });
  
  it("should render ArticleList with structured data", () => {
    const articles = [
      {
        author: "Tariq Panja",
        description:
          "The authorities are investigating the club’s relationship with a company that produced disparaging content about Lionel Messi, Gerard Piqué and other star players.",
        title: "Police Raid F.C. Barcelona's Offices",
        url:
          "https://www.nytimes.com/2021/03/01/sports/soccer/barcelona-barcagate-bartomeu.html",
      },
    ];
    render(<ArticleList data={articles} />);
    expect(screen.getByTestId("articleList")).toBeTruthy();
  });
});
