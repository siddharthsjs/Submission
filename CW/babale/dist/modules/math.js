"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PI = void 0;
exports.add = add;
function add(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers");
    }
    return a + b;
  } catch (err) {
    console.error("Error in add():", err.message);
    return null;
  }
}
const PI = exports.PI = 3.14159;