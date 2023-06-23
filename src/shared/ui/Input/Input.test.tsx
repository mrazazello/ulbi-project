import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input test", () => {
  test("Input in document", () => {
    render(<Input name="test" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "test");
  });
});
