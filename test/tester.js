const test = require("./backend/trial");

test ("Test 1", () => {
    expect(test.calculate_subtotal()).toBe(0);
});