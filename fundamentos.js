//Página seleccionada: Gamers Ecuador 
//Variables 
//Tipos simples
let precio = 15.00; 
let unidadesDisponibles = 13; 
let nombreDelVideoJuego = "Mouse Pad Megaman X 80x30x0.4cm"; 
let estadoDelVideojuego= 'B' //B= bueno; 
let productoEnOferta = true; 
let caracteristicas = undefined; 
//Tipos compuestos 
let imformacionVideojuego = [nombreDelVideoJuego, unidadesDisponibles, productoEnOferta, precio, estadoDelVideojuego,  caracteristicas ]
const videojuego = {
    nombre: nombreDelVideoJuego, 
    unidadesDisponibles,
    oferta: productoEnOferta, 
    precio, 
    estado: estadoDelVideojuego, 
    caracteristicas,
}
//var 
var precioConDescuento = 0; 
if (precio=15.00){
    var precioConDescuento = 10.556; 
}
console.log(precioConDescuento); 
//let 
if (productoEnOferta) {
    let productoEnOferta = false;
    console.log(productoEnOferta);
}
console.log(productoEnOferta)
//const
const teclado =  {
    nombre:  "Teclado Mecánico Transparente E-Yooso Z11T", 
    precio: 42.00, 
    características: {
        color: "Blanco",
        cable: "Tipo C",
    }
}
//Strings
let nombreSillaGamer = "       Silla Gamerses FoxLab RGB – Apoya Brazos 4D      ";
//Metodos 
console.log("Número de letras que posee el nombre de la silla gamer:", nombreDelVideoJuego.length);
console.log("Encotrar alguna palabra:",nombreDelVideoJuego.includes("FoxLab RGB"));
console.log("Convertir a mayúsculas al nombre de la silla gamer:",nombreDelVideoJuego.toUpperCase());
console.log("Convertir a minusculas al nombre de la silla gamer:",nombreDelVideoJuego.toLowerCase());
console.log("Quitar espacios adelante y atrás del nombre de la silla gamer::",nombreDelVideoJuego.trim());
console.log("Reemplazar una palabra:",nombreDelVideoJuego.replace('Gamerses','Gamer'));
console.log("Cortar un texto:",nombreDelVideoJuego.slice(0,20));
console.log("Cortar un texto:",nombreDelVideoJuego.substring(0,20));
console.log("Cortar un texto:",nombreDelVideoJuego.charAt(20));
console.log("Repetir un texto:",nombreDelVideoJuego.repeat(2));
console.log("Dividir un texto:",nombreDelVideoJuego.split(" "));
//Teplate Literals 
console.log(`Las características del Teclado Mecánico Transparente E-Yooso Z11T son: ${teclado.características}`);
//Números 
//Math 
console.log("Para redondear el precio de un producto: ", Math.round(precioConDescuento));
console.log("Para sacar la raíz cudrada de un valor:", Math.sqrt(precioConDescuento));
console.log("Para sacar el valor absoluto de un valor:",Math.abs(precioConDescuento));
console.log("Para sacar el exponente de un valor:", Math.pow(precioConDescuento,2));
console.log("Para obtener el valor mínimo de entre 2 valores:", Math.min(precio,precioConDescuento));
console.log("Para obtener el valor máximo de entre 2 valores:", Math.max(precio,precioConDescuento));
console.log("Para obtener el valor random de entre o a 1000 para generar facturas:", Math.round(Math.random()*1000));
//Orden de precedencia
const descuentoDelCinco = precio - ((25/100)*precio);
console.log(descuentoDelCinco) 
//Conversión 
const precioSoporteCable = "65.00"; 
const descuentoParaSoporteCable = 8;
const operacionParaDescuento =  +precioSoporteCable - ((descuentoParaSoporteCable/100)*+precioSoporteCable)
console.log(`El precio del soporte del cable con descuento es: ${operacionParaDescuento}`)
//Booleanos 
const mensajeParaDisponibilidad = unidadesDisponibles = 0 ? "No se encuentra disponibles" : "Se encuentra desponible"; 
console.log(mensajeParaDisponibilidad); 
//Condicionales 
//Condicionales simple 
if(unidadesDisponibles > 0){
    console.log("Se encuentra disponible el producto")
}
//Condicionales doble 
const queSucedeSiElPorductoNoDisponible = 0; 
if(queSucedeSiElPorductoNoDisponible <= 0 ){
    console.log("El producto se encuentra gotado");
}else{
    console.log("Se encuentra disponible el producto");
}
//Condicionales multiples 
const numeroBotonesDelMouse = 6
if (numeroBotonesDelMouse  === 6) {
    console.log("El mouse tiene el número estándar de botones para gaming.");
} else if (numeroBotonesDelMouse  > 6) {
    console.log("El mouse tiene más botones de lo estándar.");
} else {
    console.log("El mouse tiene menos botones de lo esperado.");
}
//Bucles
const caracteristicasSillaHeadsetGamer=  ["Controladores Razer™ Triforce de 50 mm","Micrófono cardioide hiperclaro Razer™", "Cancelación de ruido pasiva avanzada","Sonido envolvente 7.1.",
    "Conector de audio de 3,5 mm","Compatibilidad multiplataforma. PC, Mac, PS4, Xbox One, Nintendo Switch y dispositivos móviles","Ligeros y cómodos. Con solo 240 g, apenas recordarás que los tienes puestos",
    "Acolchado más grueso y almohadillas de espuma viscoelástica mejorada"];
//For 
for (let i = 0; i < caracteristicasSillaHeadsetGamer.length; i++) {
    console.log(caracteristicasSillaHeadsetGamer[i]);
}
//While
let a = 0;
while (a < caracteristicasSillaHeadsetGamer.length) {
    console.log(caracteristicasSillaHeadsetGamer[a]);
    a++;
}
//Do - while 
let j = 0;
do {
    console.log(caracteristicasSillaHeadsetGamer[j]);
    j++;
} while (j < caracteristicasSillaHeadsetGamer.length);
//Foreach
const figurasGamers = [
    {nombre: "Diorama Pokebola Pintada a Mano", precio: 89.00},
    {nombre: "Figura Yoshi Panzón", precio: 17.00}
]
figurasGamers.forEach(figuraIndividual => {
    console.log(figuraIndividual.precio); 
});
//map 
figurasGamers.map(function(figura){
    console.log("El precio de la figura es: ", figura.precio)
})
//Funciones anonimas 
const calcularPrecioConDescuento = function(precioSoporteCable, descuentoParaSoporteCable) {
    console.log(`EL precio del producto con descuento de 8% es: ${precioSoporteCable - ((descuentoParaSoporteCable / 100) * precioSoporteCable)}`);
};
calcularPrecioConDescuento(precioSoporteCable, precioConDescuento); 
//Función autoejecutable
(function (precioSoporteCable = 65.00, descuentoParaSoporteCable = 8){
    const respuestaDescuento =  +precioSoporteCable - ((descuentoParaSoporteCable/100)*+precioSoporteCable)
    console.log(`EL precio del producto con descuento de 8% es: ${respuestaDescuento}`);
})()
//Función declarada 
function descuentoResultante (precioSoporteCable, descuentoParaSoporteCable){
    console.log(`EL precio del producto con descuento de 8% es: ${precioSoporteCable - 
        ((descuentoParaSoporteCable / 100) * precioSoporteCable)}`);
}
descuentoResultante(precioSoporteCable, descuentoParaSoporteCable)
//Argumentos y parámetros
//Parámetros por default 
function descuentoResultante2 (precioSoporteCable, descuentoParaSoporteCable = 0){
    console.log(`EL precio del producto con descuento de 8% es: ${precioSoporteCable - 
        ((descuentoParaSoporteCable / 100) * precioSoporteCable)}`);
}
descuentoResultante2(precioSoporteCable)
//Parámetros rest 
function infoPedidoMouse (nombreMouse, precioMouse, cantidadSolicitada, ...masInformacion){
    console.log("El nombre del mouse es:", nombreMouse), 
    console.log("El precio del mouse es:", precioMouse), 
    console.log("La cantidad solicitada es:", cantidadSolicitada), 
    console.log("Más información del mouse:", masInformacion)
}; 
infoPedidoMouse("Mouse Gamer Inalámbrico E-Yooso X31", 15.00, 3, "Botones: 6", 
    "Conectividad USB Plug and Play: Sin complicaciones, simplemente conecta y listo.", 
    "Superficie Amplia del Mouse: Ofrece precisión y control para juegos y tareas profesionales."); 
//Retorno de una función 
function infoVideoJuego (){
    //return precio;
    //return  unidadesDisponibles;
    //return productoEnOferta; 
    //return estadoDelVideojuego;
    //return caracteristicas; 
    //return imformacionVideojuego; 
    return videojuego; 
}
console.log(infoVideoJuego()); 
//Funcion flecha
//Para comprar algun producto el usuario deve registrarse, para ello se utilizara una función de flecha
const verificarRegistro = (usuarioRegistrado) => {
    if (usuarioRegistrado) {
        console.log("El usuario está registrado. Puede acceder a diferentes funcionalidades.");
    } else {
        console.log("El usuario no está registrado. Registrese porfavor.");
    }
};

// Simulación de registro de usuario
const usuario = {
    nombre: "Mireya García",
    registrado: true
};

verificarRegistro(usuario.registrado);
//Objetos
const sillaGamer = {
    nombre: "Silla Gamer Madplay Full RGB",
    precio: 217.00, 
    color: "Naranga - Negro", 
    cantidadDisponible: 10 
};
console.log(sillaGamer);
//Arreglo
const infoWebcam = [{nombre: "Webcam Logitech BRIO 4K", precio: 214.99}, {nombre: "Webcam Logitech BRIO 4K", precio: 214.99}, 
    {nombre: "Webcam Logitech C920e", precio: 99.99}];
console.log(infoWebcam);