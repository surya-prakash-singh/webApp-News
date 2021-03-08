import React from "react";
import Header from "../component/Header/Header";
import { render, screen } from '@testing-library/react';

jest.mock("../component/Header/Header.scss",()=>"Header");
jest.mock("../component/Header/Logo",()=>"Logo");

describe('Header Component', () => {

  it('should render Header Component', () => {
       render(<Header />);
      expect(screen.getByTestId("header")).toBeTruthy()
  });
  
});
