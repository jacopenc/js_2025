class Persona {
  private _edad: number = 0;

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor >= 0) {
      this._edad = valor;
    }
  }
}

const p = new Persona();
p.edad = 25;
console.log(p.edad); // 25
