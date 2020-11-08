import {obtenerClientes, eliminarClienteJSON} from "./API.js";
(function(){
    const lista = document.querySelector("#listado-clientes");

    document.addEventListener("DOMContentLoaded", mostarClientes);

    lista.addEventListener("click", eliminaCliente);
    lista.addEventListener("click", editarCliente);


    async function mostarClientes(){
         const clientes = await obtenerClientes();
        
         renderizarVista(clientes);
    }


    function renderizarVista(clientes){
        
        clientes.forEach(cliente => {
            const {nombre, email, telefono, empresa, id } = cliente;
            
       
        lista.innerHTML += `<tr><td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                        <p class="text-gray-700">${telefono}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                        <p class="text-gray-600">${empresa}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                        <a href="" data-cliente="${id}" class="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                                    </td>`
    });

    }

    async function eliminaCliente(e){
        e.preventDefault();
        if(e.target.classList.contains('eliminar')){
            
            const id = Number(e.target.dataset.cliente);
            console.log(id);
            const confirmar = confirm("Desea eliminar este registro?");

            if(confirmar){
                
                eliminarClienteJSON(id);

                
            }
            
        }
        
    }

    function editarCliente(e){
        e.preventDefault();
        if(e.target.classList.contains('editar')){
            const id = Number(e.target.dataset.cliente);

            window.location.href = `editar-cliente.html?id=${id}`

            
        }
    }



})();