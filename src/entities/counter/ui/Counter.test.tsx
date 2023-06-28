import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/config/tests/componentRender";
import { Counter } from "..";

describe("Test Counter Component", () => {
  test("button with counter rendered", () => {
    componentRender(<Counter />);
    const counterBtn = screen.getByText("0");
    expect(counterBtn).toBeInTheDocument();
  });
  test("press button and increment state", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 5 },
      },
    });
    const counterBtn = screen.getByText("5");
    fireEvent.click(counterBtn);
    expect(counterBtn).toHaveTextContent("6");
  });
});
