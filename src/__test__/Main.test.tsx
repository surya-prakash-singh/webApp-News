import React from "react";
import Main from "../component/Main/Main";
import { render, screen } from '@testing-library/react';

jest.mock("../component/Main/Main.scss",()=>"Main");
jest.mock("../component/Main/SearchBar",()=>"SearchBar");
jest.mock("../component/ArticleList/ArticleList",()=>"ArticleList");

describe('Header Component', () => {

  it('should render Header Component', () => {
       render(<Main />);
      expect(screen.getByTestId("main")).toBeTruthy()
  });
  
});
