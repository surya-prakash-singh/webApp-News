import React from "react";
import App from "../component/App/App";
import { render, screen } from '@testing-library/react';

jest.mock('../component/Header/Header',()=> "Header");
jest.mock('../component/Footer/Footer',()=> "Footer");
jest.mock('../component/Main/Main',()=> "Main");


describe('App Component', () => {

  it('should render App Component', () => {
       render(<App />);
      expect(screen.getByTestId("app")).toBeTruthy()
  });
  
});
