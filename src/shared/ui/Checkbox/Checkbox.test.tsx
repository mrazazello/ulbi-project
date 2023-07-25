import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox test", () => {
  test("Checkbox rendered", () => {
    render(<Checkbox name="test" placeholder="test checkbox" />);
    expect(screen.getByText("test checkbox")).toBeInTheDocument();
  });
});
