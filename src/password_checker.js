const longerThan8Characters = /.{9,}/;
const lowerCaseLetter = /[a-z]/;
const upperCaseLetter = /[A-Z]/;
const digit = /\d/;
const specialCharacter = /\W|_/;

function passwordIsValid(password) {
    if (password == null) {
        throw Error("password should exist");
    }
    if (!password.match(longerThan8Characters)) {
        throw Error("password should be longer than than 8 characters");
    }
    if (!password.match(lowerCaseLetter)) {
        throw Error("password should have at least one lowercase letter");
    }
    if (!password.match(upperCaseLetter)) {
        throw Error("password should have at least one uppercase letter");
    }
    if (!password.match(digit)) {
        throw Error("password should at least have one digit");
    }
    if (!password.match(specialCharacter)) {
        throw Error("password should have at least one special character");
    }
}
passwordIsValid("Rixongile#1");

function passwordIsOk(password) {
    let numberOfConditions = 0;
    if (password != null) {
        numberOfConditions += 1
    }
    if (password.match(longerThan8Characters)) {
        numberOfConditions += 1
    }
    if (password.match(lowerCaseLetter)) {
        numberOfConditions += 1
    }
    if (password.match(upperCaseLetter)) {
        numberOfConditions += 1
    }
    if (password.match(digit)) {
        numberOfConditions += 1
    }
    if (password.match(specialCharacter)) {
        numberOfConditions += 1
    }
    if (password == null || password.match(longerThan8Characters) == null) {

        return ("password is never ok")
    }
    if (numberOfConditions >= 3) {
        return true;
    } else {
        return ("password is never ok");
    }
}
passwordIsOk("XongileMa");
module.exports = { passwordIsValid, passwordIsOk }