import { render, screen } from "@testing-library/react";
import { Page2, Page2New } from "./page-2";

describe("Page 2", () => {
  beforeEach(() => {
    window.tracking = [];
  });

  it("tracks button click on page 2", async () => {
    render(<Page2 />);

    const button = await screen.findByRole(
      "button",
      { name: "Button 2" },
      { timeout: 5000 }
    );
    button.click();

    expect(window.tracking).toEqual([
      [
        "page-2",
        "button-2",
        {
          authStatus: "authenticated",
        },
      ],
    ]);
  });

  it("tracks button click on new page 2", async () => {
    render(<Page2New />);

    const button = await screen.findByRole(
      "button",
      { name: "Button 2" },
      { timeout: 5000 }
    );
    button.click();

    expect(window.tracking).toEqual([["page-2", "button-2", undefined]]);
  });
});
