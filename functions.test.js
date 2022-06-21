let myFunctions = require('./function')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('Dre')).toBe('Hello Dre.')
})

test("Addition Test", () => {
    expect(myFunctions.add(13, 2)).toBe(15)
})




// Extra Challenge solution

describe("Math Challenge!", () => {
    test("Add", () => {
        expect(myFunctions.add(14, 6)).toBe(20)
    })
    test("Subtract", () => {
        expect(myFunctions.subtract(11, 3)).toBe(8)
    })
    test("Multiply", () => {
        expect(myFunctions.multiply(12, 3)).toBe(36)
    })
    test("Divide", () => {
        expect(myFunctions.divide(15, 5)).toBe(3)
    })
})

// 1) // > 1 | let myFunctions = require ('./function')
// |                          ^
// 2 |
// 3 | test("Return Two test", () => {
// 4 |     expect(myFunctions.returnTwo()).toBe(2)

// #2 // 6 files checked.
// testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 1 match
// testPathIgnorePatterns: /node_modules/ - 6 matches
// testRegex:  - 0 matches
// Pattern: functions.js - 0 matches
// #3 // That the they come back false when running the test. 