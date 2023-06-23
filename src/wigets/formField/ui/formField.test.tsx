import { render, screen } from "@testing-library/react";
import { FormField } from "./FormField";

describe("formField test", () => {
  test("formFiled in Document", () => {
    render(<FormField title="Title">TEST</FormField>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
