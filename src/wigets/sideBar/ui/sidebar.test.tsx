import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/config/tests/componentRender";
import { SideBar } from "./SideBar";

describe("Sidebar test", () => {
  test("Sidebar test", () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Toggle test", () => {
    componentRender(<SideBar />);
    const sidebarEl = screen.getByTestId("sidebar");
    expect(sidebarEl).toBeInTheDocument();

    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(sidebarEl).toHaveClass("collapsed");
  });
});
