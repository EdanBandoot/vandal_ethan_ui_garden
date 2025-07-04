import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import TableRow from "./TableRow";

describe("TableRow Component", () => {
  it("it say cell", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>cell</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText("cell")).toBeVisible();
  });

  it("says dead cell", () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>dead cell</td>
          </TableRow>
        </tbody>
      </table>
    );

    const row = screen.getByRole("row");

    expect(row).toHaveStyle("background-color: #ffffff");
    expect(row).toHaveStyle("cursor: not-allowed");
  });
// aaaaaaaaaaaaaaaaaaaaaaaaaaaa
  it("disables", () => {
    const Child = ({ disabled }: { disabled?: boolean; }) => (
      <div data-testid="child">{disabled ? "disabled" : "enabled"}</div>
    );

    render(
      <table>
        <tbody>
          <TableRow disabled>
            <Child />
          </TableRow>
        </tbody>
      </table>
    );

    const child = screen.getByTestId("child");
    expect(child.textContent).toBe("disabled");
  });
});