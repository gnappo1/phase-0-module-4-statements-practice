// selectionStatements Tests

const { assert } = require('./helpers.js');

describe('selectionStatements', () => {
    describe('Exercise 1 Test', () => {
        it('should correctly identify when num1 and num2 are equal', () => {
            assert.strictEqual(result3, "num1 and num2 are equal");
        });
    });

    describe('Exercise 2 Test', () => {
        it('should correctly identify when num4 is greater than or equal to num3', () => {
            assert.strictEqual(result4, "num4 is greater than or equal to num3");
        });
    });

    describe('Exercise 3 Test', () => {
        it('should correctly identify Thursday as a weekday', () => {
            assert.strictEqual(dayType, "weekday");
        });
    });
});
