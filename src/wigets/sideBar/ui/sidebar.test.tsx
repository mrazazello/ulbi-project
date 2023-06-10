import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { renderWithTranslation } from "shared/lib/renderWithTranslation";

describe("Sidebar test", () => {
  test("Sidebar test", () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Toggle test", () => {
    renderWithTranslation(<SideBar />);
    const sidebarEl = screen.getByTestId("sidebar");
    expect(sidebarEl).toBeInTheDocument();

    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(sidebarEl).toHaveClass("collapsed");
  });
});
