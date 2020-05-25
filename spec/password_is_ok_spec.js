const { passwordIsOk } = require("../src/password_checker");
describe("passwordIsOk", () => {
  it("should meet at least 3 conditions", () => {
    expect(passwordIsOk("Xongile@#3")).toBe(true);
  });
  it("should meet less than 3 conditions", () => {
    expect(passwordIsOk("Xongile")).toBe("password is never ok");
  });
  it("should return password is never ok if condition 1 & 2 are not met", () => {
    expect(passwordIsOk("")).toBe("password is never ok");
  });
});