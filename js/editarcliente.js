
import {obtenerClientesID, actualizarClienteJSON} from "./API.js";

(function(){
    let idCliente;
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const empresa = document.querySelector("#empresa");
   
    const formulario = document.querySelector("#formulario");


    document.addEventListener('DOMContentLoaded', async () =>{
        
        const parametrosUrl = new URLSearchParams(window.location.search);
        idCliente     = parametrosUrl.get('id');

        const cliente = await obtenerClientesID(idCliente);
        llenarFormulario(cliente);

        formulario.addEventListener('submit', actualizar);
        
         
    });

    function llenarFormulario(cliente){
        nombre.value = cliente.nombre;
        email.value = cliente.email;
        telefono.value = cliente.telefono;
        empresa.value = cliente.empresa;



    }

    async function actualizar(e){
        e.preventDefault();
        const cliente = {
            nombre : nombre.value,
            email : email.value,
            telefono : telefono.value,
            empresa : empresa.value,
            id : idCliente

        }

        actualizarClienteJSON(cliente);




    }
})();