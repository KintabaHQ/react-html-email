import kitchenSink from "../examples/kitchenSink";
import { renderEmail } from "../src/index";

describe("renderEmail", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });

  it("produces expected output from a kitchen sink example", () => {
    const output = renderEmail(kitchenSink);
    expect(output).toMatchSnapshot();
  });
});
