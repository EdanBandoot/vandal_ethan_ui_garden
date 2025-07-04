import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Card from "./Card";

describe("Card Component", () => {
  it("should be visible", () => {
    render(<Card title="Card title" content="This is card content." />);
    expect(screen.getByText("Card title")).toBeVisible();
    expect(screen.getByText("This is on the card")).toBeVisible();
  });

  it("should be gray", () => {
    render(<Card title="Disabled card" disabled />);
    const card = screen.getByTestId("card-container");
    expect(card).toHaveStyle("background-color: #f5f5f5");
    expect(card).toHaveStyle("cursor: not-allowed");
  });
});