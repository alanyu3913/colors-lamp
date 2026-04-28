const {
  buildAddColorPayload,
  buildLoginPayload,
  formatColorResults,
} = require("../public/js/code.js");

describe("front-end helpers", () => {
  test("buildAddColorPayload creates the expected JSON payload", () => {
    expect(buildAddColorPayload("Blue", 7)).toBe('{"color":"Blue","userId":7}');
  });

  test("buildLoginPayload creates the expected JSON payload", () => {
    expect(buildLoginPayload("alan", "secret")).toBe('{"login":"alan","password":"secret"}');
  });

  test("formatColorResults joins color names with HTML line breaks", () => {
    expect(formatColorResults(["Red", "Green", "Blue"])).toBe(
      "Red<br />\r\nGreen<br />\r\nBlue"
    );
  });
});
