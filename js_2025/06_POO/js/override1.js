class MensajePadre {
    msg() {
        document.write("This is MensajePadre class msg.<br>");
    }
}
class MensajeHijo extends MensajePadre {
    msg() {
        document.write("Desde el hijo. <br>");
        super.msg() ;

		    document.write("This is MensajeHijo class msg.");
    }
}

function over(){
let p = new MensajePadre();
let c = new MensajeHijo();
p.msg();
c.msg();
}