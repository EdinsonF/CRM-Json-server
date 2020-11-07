

export function mensajes(mensaje, tipo){

    const alerta = document.querySelector(".alerta");
    if(!alerta){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('bg-red-100',  'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'alerta')

        if(tipo === 'error'){
            divMensaje.innerHTML=`<strong class="font-bold">Error!</strong>
                                <span class="block sm:inline">${mensaje}</span>`;
        }else{
            
        }

        
        formulario.appendChild(divMensaje);

        setTimeout(() =>{
            divMensaje.remove();
        },2000);
    }    
}

export function limpiarLista(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}