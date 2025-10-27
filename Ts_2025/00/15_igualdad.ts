5 === 5         // true
"5" === 5       // false
true === 1      // false

let edad: any = "18";

if (edad === 18) {
  console.log("Edad igual (estricta)");  // ❌ No se ejecuta
}

if (edad == 18) {
  console.log("Edad igual (débil)");     // ✅ Se ejecuta
}


"5" !== 5   // true
"5" != 5    // false ❌
