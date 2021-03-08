import React from "react";
import Footer from "../component/Footer/Footer";
import { render, screen } from '@testing-library/react';

jest.mock("../component/Footer/Footer.scss",()=>"Footer");

describe('Footer Component', () => {

  it('should render Footer Component', () => {
       render(<Footer />);
      expect(screen.getByTestId("footer")).toBeTruthy()
  });
  
});
