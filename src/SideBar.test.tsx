import React from "react";
import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";

test("renders a name", () => {
  const items = [
    {
      name: "test",
      href: "/test"
    }
  ];
  render(<SideBar items={items} />);
  const anchorElements = screen.getByRole("navigation");
  expect(anchorElements).toHaveTextContent(items[0].name);
  expect(anchorElements).toHaveAttribute("href", items[0].href);
});
