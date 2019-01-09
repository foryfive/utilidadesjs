function getCerosIzquierda(texto,espacios){
    let contenido = texto.toString();
    let final = "";
    let cantidad = 0;
    if(contenido.length < espacios){
        cantidad = espacios-contenido.length;
        for (let index = 0; index < cantidad; index++) {
            final +="0";
        }
        final+=contenido;
    }else{
        final = contenido;
    }
    return final;
}