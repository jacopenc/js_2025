"use strict";
x = 10; // ❌ Error: x is not defined

const obj = {};
Object.defineProperty(obj, "prop", { value: 42, writable: false });
obj.prop = 100; // ❌ Error: Cannot assign to read only property

function sumar(a, a) { // ❌ Error: Duplicate parameter name not allowed in strict mode
  return a + a;
}