//API de compras utilizadas: https://fakestoreapi.com/products/1, simula una tienda falsa
//Guardar un objeto en Local Storage
"use strict";
fetch('https://fakestoreapi.com/products/1')
        .then(response=>response.json())
        .then(json => {
            {
                let product  ={
                    title:json.title,
                    price:json.price,
                    description:json.description, 
                    category: json.category, 
                    image: json.image, 
                }
                    guardarLocalStorage(product)
                }
            })
        
        
const guardarLocalStorage = (data)=>{
    localStorage.setItem('product',JSON.stringify(data))
}
//Obtener un objeto en el Local Storage
"use strict";

const obtenerLocalStorage =()=>{
    const respuesta = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : "No hay data"
    console.log(respuesta);
}
obtenerLocalStorage()
//Eliminar un Objeto en el LocalStorage
"use strict";

const eliminarlocalStorage =()=>{
    !localStorage.key('product') ? console.log("No hay clave" ): localStorage.removeItem("product")
}

eliminarlocalStorage()
// Verificar si se eliminó correctamente
if (!localStorage.getItem("product")) {
    console.log("La clave 'product' se eliminó completamente");
} else {
    console.log("La clave 'product' aún existe");
}
//Modulos
//CommonJS
/*const disponibilidad = require('./module.js');

disponibilidad(1, 500); */

//ES Modules 
import {descuento} from "./module.js";

descuento(1000, 0.20)