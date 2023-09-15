import { render, screen } from "@testing-library/react";

import { Select } from "./Select";

const options = [
  { label: "russia", value: "russia" },
  { label: "georgia", value: "georgia" },
];

describe("Input test", () => {
  test("Input in document", () => {
    render(<Select name="test" options={options} />);
    expect(screen.getByRole("select")).toHaveAttribute("name", "test");
  });
});
