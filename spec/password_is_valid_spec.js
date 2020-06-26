const { passwordIsValid } = require("../src/password_checker");
describe("passwordIsValid", () => {
  it("should throw an error password should exist", () => {
    expect(() => {
      passwordIsValid(null);
    }).toThrow(new Error("password should exist"));
  });
  it("should throw an error password should be longer than 8 characters", () => {
    expect(() => {
      passwordIsValid("xongi");
    }).toThrow(new Error("password should be longer than than 8 characters"));
  });
  it("should throw an error password should have at least one lowercase letter", () => {
    expect(() => {
      passwordIsValid("RIXONGILE");
    }).toThrow(new Error("password should have at least one lowercase letter"));
  });
  it("should throw an error password should have at least one uppercase letter", () => {
    expect(() => {
      passwordIsValid("rixongile");
    }).toThrow(new Error("password should have at least one uppercase letter"));
  });
  it("should throw an error password should have at least one number", () => {
    expect(() => {
      passwordIsValid("Rixongil#");
    }).toThrow(new Error("password should at least have one digit"));
  });
  it("should throw an error password should have at least one special character", () => {
    expect(() => {
      passwordIsValid("Rixongile1");
    }).toThrow(
      new Error("password should have at least one special character")
    );
  });
});
