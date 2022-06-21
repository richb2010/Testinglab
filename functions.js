module.exports = {
    returnTwo: () => {
        return 2
    },

    greeting: (name) => {
        return "Hello " + name + "."
    },

    add: (num1, num2) => {
        return num1 + num2
    },
    // Extra Challenge solution
    
    subtract: (num1, num2) => {
        return num1 - num2
    },
    
    multiply: (num1, num2) => {
        return num1 * num2
    },
    
    divide: (num1, num2) => {
        return num1 / num2
    },
}

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