interface Volador {
  volar(): void;
}

class Pajaro implements Volador {
  volar(): void {
    console.log("Estoy volando!");
  }
}

const pajaro = new Pajaro();
pajaro.volar();
