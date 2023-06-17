import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button, ButtonThemeEnum } from "./Button";

describe("Button test", () => {
  test("Button without props", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test("Button with class", () => {
    render(<Button theme={ButtonThemeEnum.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
