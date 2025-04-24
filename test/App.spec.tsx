import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "../src/App";

test("renders placeholder value", async () => {
  const { getByText } = render(<App />);
  await expect.element(getByText("PLACEHOLDER")).toBeInTheDocument();
});
