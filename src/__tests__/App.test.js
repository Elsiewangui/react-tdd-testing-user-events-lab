import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);
  
  // Check if the label and input for name are present
  const nameLabel = screen.getByLabelText(/Name:/i);
  const nameInput = screen.getByRole('textbox', { name: /Name:/i });
  
  expect(nameLabel).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  
  // Check if the label and input for email are present
  const emailLabel = screen.getByLabelText(/Email:/i);
  const emailInput = screen.getByRole('textbox', { name: /Email:/i });
  
  expect(emailLabel).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});


test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />);
  const checkboxes = screen.getAllByRole('checkbox');

  expect(checkboxes.length).toBe(2);
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />);
  const checkboxes = screen.getAllByRole('checkbox');

  checkboxes.forEach(checkbox => {
    expect(checkbox).not.toBeChecked();
  });
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />);
  const nameInput = screen.getByLabelText(/Name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);

  userEvent.type(nameInput, 'Elsie Wangui');
  userEvent.type(emailInput, 'elsie.wangui@example.com');

  expect(nameInput.value).toBe('Elsie Wangui');
  expect(emailInput.value).toBe('elsie.wangui@example.com');
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App />);
  const checkboxes = screen.getAllByRole('checkbox');

  checkboxes.forEach(checkbox => {
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox); // click again to uncheck
    expect(checkbox).not.toBeChecked();
  });
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App />);
  const submitButton = screen.getByRole('button', { Name: /submit/i });

  userEvent.click(submitButton);

  const message = screen.getByText(/thank you for subscribing/i);
  expect(message).toBeInTheDocument();
});
