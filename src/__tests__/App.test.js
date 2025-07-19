import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text identifying the content of the image", () => {
  render(<App />);

  const personalImage = screen.getByAltText(/personal image/i)

  expect(personalImage).toBeInTheDocument();
});

test("displays a second-level heading with the text `About Me`", () => {
    render(<App />)

    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    })

    expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
    render(<App />)

    const biographyParagraph = screen.getByText(/here is my biography/i);

    expect(biographyParagraph).toBeInTheDocument();
})

test("renders links to GitHub and LinkedIn", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
