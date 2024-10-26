// CommonJS
/*const disponibilidad = (id, cantidadSolicitada) => {
    if (cantidadRequerida < 0) {
        return console.log("La cantidad es negativa, colóquela bien por favor");
    }
    console.log(`Se está verificando la disponibilidad del producto con el id ${id} ...`);
};
module.exports = disponibilidad;*/
/*module.exports.disponibilidad = (id, cantidadSolicitada) => {
    if (cantidadSolicitada <0){
        console.log("La cantidad es negativa, colóquela bien por favor");
    }
     console.log(`Se está verificando la disponibilidad del producto con el id ${id} ...`);
}*/

//ES Modules 
/*const descuento = (precioOriginal, descuentoDecimal) =>{
    const operacion1 = precioOriginal * descuentoDecimal
    const resultadoTotal = precioOriginal - operacion1
    console.log(`El precio nuevo, con el descuento es de: ${resultadoTotal}$`);
}*/
export const descuento = (precioOriginal, descuentoDecimal) =>{
    const operacion1 = precioOriginal * descuentoDecimal
    const resultadoTotal = precioOriginal - operacion1
    console.log(`El precio nuevo, con el descuento es de: ${resultadoTotal}$`);
}
