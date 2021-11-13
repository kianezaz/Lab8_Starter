// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// testing isPhoneNumber 
test("first valid phone number", () => {
    expect(functions.isPhoneNumber("(408) 265-8899")).toBe(true);
});

test("second valid phone number", () => {
    expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
});

test("first invalid phone number", () => {
    expect(functions.isPhoneNumber("(408) 2658899")).toBe(false);
});

test("second invalid phone number", () => {
    expect(functions.isPhoneNumber("(123)-456-7A90")).toBe(false);
});

// testing isEmail

test("first valid email", () => {
    expect(functions.isEmail("studentemail@ucsd.edu")).toBe(true);
});

test("second valid email", () => {
    expect(functions.isEmail("123@gmail.com")).toBe(true);
});

test("first invalid email", () => {
    expect(functions.isEmail("bademail@123.com")).toBe(false);
});

test("second invalid email", () => {
    expect(functions.isEmail("bademail@gmail.comm")).toBe(false);
});

// testing isStrongPassword

test("first valid strong password", () => {
    expect(functions.isStrongPassword("password123")).toBe(true);
});

test("second valid strong password", () => {
    expect(functions.isStrongPassword("a123")).toBe(true);
});

test("first invalid strong password", () => {
    expect(functions.isStrongPassword("1badpassword")).toBe(false);
});

test("second invalid strong password", () => {
    expect(functions.isStrongPassword("badlonggpassword")).toBe(false);
});

// testing isDate

test("first valid date", () => {
    expect(functions.isDate("11/13/2021")).toBe(true);
});

test("second valid date", () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
});

test("first invalid date", () => {
    expect(functions.isDate("11/13/21")).toBe(false);
});

test("second invalid date", () => {
    expect(functions.isDate("1a/13/2021")).toBe(false);
});

// testing isHexColor

test("first valid hex color", () => {
    expect(functions.isHexColor("a0f")).toBe(true);
});

test("second valid hex color", () => {
    expect(functions.isHexColor("abc123")).toBe(true);
});

test("first invalid hex color", () => {
    expect(functions.isHexColor("abg")).toBe(false);
});

test("second invalid hex color", () => {
    expect(functions.isHexColor("abc12")).toBe(false);
});