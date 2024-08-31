import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("Button tests", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: white");
  });

  test("should render google button when nothing is passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveStyle("background-color: rgb(53, 122, 232)");
  });

  test("should render inverted button when passed inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const invertedButton = screen.getByRole("button");
    expect(invertedButton).toHaveStyle("background-color: black");
  })

  test("should be disable if isLoading is true", () => {
    render(<Button isLoading={true} />);

    const buttonIsLoading = screen.getByRole("button");
    expect(buttonIsLoading).toBeDisabled();
  })
});
