//test document 
//placed in test folder inside src with name followed by .test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);//executes component to check
    const heroImage = screen.getByAltText("Hero");//gets the image to be checked
    //matches expected image to image rendered
    expect(heroImage).toBeInTheDocument();
    // Checks the correct image file is used
    expect(heroImage).toHaveAttribute(
      "src",
      "media/images/homeHero.png"
    );
  });

  test("renders signup button", () => {
    render(<Hero />);//executes component to check
    // find button by role
    const signupButton = screen.getByRole("button", {
      name: /signup now/i
    });
    // Confirms button is rendered
    expect(signupButton).toBeInTheDocument();
    // Ensures correct Bootstrap styling
    expect(signupButton).toHaveClass("btn-primary");
  });

});
