import { mensajes , limpiarLista } from './funciones.js';
import {nuevoCliente} from "./API.js";
(function(){
    
    
    const formulario = document.querySelector("#formulario");

    window.onload = () =>{
         formulario.addEventListener("submit", validarCliente);
    }
   

    function validarCliente(e){
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const telefono = document.querySelector("#telefono").value;
        const empresa = document.querySelector("#empresa").value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)){
            mensajes("todos los campos son obligatorios","error");
            return;
        }

        nuevoCliente(cliente);

    }

    function validar(obj){
        return !Object.values(obj).every( input => input !== '');
    }
})();