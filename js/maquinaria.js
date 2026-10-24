let salida = document.getElementById("salida");
let salidaCarrito = document.getElementById("salidaCarrito");
const spinner = document.getElementById("spinner");
let carrito = [];
let mensaje  = "";

let productos = [
    {id: "1",nombre: "Picadora con Sierra",imagen: "imagenes/picadora1.jpg",precioMin: "700",precioMax: "900", stock: 1},
    {id: "2",nombre: "Picadora",imagen: "imagenes/picadora2.jpg",precioMIn: "700",precioMax: "900", stock: 1},
    {id: "3",nombre: "Cortadora",imagen: "imagenes/cortadora1.jpg",precioMin: "700",precioMax: "800", stock: 1},
    {id: "4",nombre: "Cortadora",imagen: "imagenes/cortadora2.jpg",precioMIn: "200",precioMax: "400", stock :1},
    {id: "5",nombre: "Envasadora de Vacio",imagen: "imagenes/envasadora1.jpg",precioMin: "800",precioMax: "1200", stock: 1},
    {id: "6",nombre: "Envasadora de Vacio",imagen: "imagenes/envasadora2.jpg",precioMIn: "300",precioMax: "400", stock: 1},
    {id: "7",nombre: "Mueble Expositor",imagen: "imagenes/expositor.jpg",precioMin: "200",precioMax: "400", stock: 1},
    {id: "8",nombre: "Focos Led",imagen: "imagenes/foco.jpg",precioMIn: "100",precioMax: "150", stock: 5},
    {id: "9",nombre: "Horno Electrico SALVA",imagen: "imagenes/horno.jpg",precioMin: "600",precioMax: "600", stock: 1},
    {id: "10",nombre: "Fermentadora SALVA",imagen: "imagenes/fermentadora.jpg",precioMIn: "800",precioMax: "800", stock: 1},
    {id: "11",nombre: "Bancos de Acero Inoxidable ",imagen: "imagenes/bancos2.jpg",precioMIn: "100",precioMax: "150", stock: 2},
    {id: "12",nombre: "Bancos de Acero Inoxidable ",imagen: "imagenes/bancos3.jpg",precioMIn: "100",precioMax: "150", stock: 1},
    {id: "13",nombre: "Bancos de Acero Inoxidable ",imagen: "imagenes/bancos4.jpg",precioMIn: "100",precioMax: "150", stock: 1},
    {id: "14",nombre: "Bancos de Acero Inoxidable ",imagen: "imagenes/bancos1.jpg",precioMIn: "100",precioMax: "150", stock: 1},
    {id: "15",nombre: "Arcon Congelador1",imagen: "imagenes/arcon1.jpg",precioMIn: "200",precioMax: "300", stock: 1},
    {id: "16",nombre: "Arcon Congelador2",imagen: "imagenes/arcon2.jpg",precioMin: "200",precioMax: "300", stock: 1},
    {id: "17",nombre: "Jamonero",imagen: "imagenes/jamonero.jpg",precioMin: "35",precioMax: "50", stock: 1},
    {id: "18",nombre: "Mesa de Acero Inoxidable1",imagen: "imagenes/mesaAcero1.jpg",precioMIn: "150",precioMax: "200", stock: 2},
    {id: "19",nombre: "Mesa de Acero Inoxidable2 ",imagen: "imagenes/mesaAcero2.jpg",precioMIn: "150",precioMax: "200", stock: 1},
    {id: "20",nombre: "Mesa de Acero Inoxidable3 ",imagen: "imagenes/mesaAcero3.jpg",precioMIn: "150",precioMax: "200", stock: 1},
    {id: "21",nombre: "Mesa de Acero Inoxidable4 ",imagen: "imagenes/mesaAcero4.jpg",precioMIn: "150",precioMax: "200", stock: 2},
    {id: "22",nombre: "Mesa de Corte1 ",imagen: "imagenes/mesaCortePeq.jpg",precioMIn: "100",precioMax: "150", stock: 1},
    {id: "23",nombre: "Mesa de Corte2",imagen: "imagenes/mesaCorteMed.jpg",precioMIn: "150",precioMax: "200", stock: 2},
    {id: "24",nombre: "Mesa de Corte3",imagen: "imagenes/mesaCorteGra.jpg",precioMin: "150",precioMax: "250", stock: 1}, 
    {id: "25",nombre: "Carro de transporte Manual",imagen: "imagenes/carro.jpg",precioMin: "50",precioMax: "75", stock: 1},
    {id: "26",nombre: "Estanteria de Plastico",imagen: "imagenes/estanteriaPlastico.jpg",precioMin: "50",precioMax: "75", stock: 4}
                ];

function fecha() {
    let fecha = new Date().toLocaleDateString("es-ES");
    let minutos = new Date().getMinutes().toString().padStart(2, "0");
    let hora = new Date().getHours().toString().padStart(2, "0");
    let dia = new Date().getDate().toString().padStart(2, "0");
    let mes = (new Date().getMonth() +1).toString().padStart(2, "0");
    let año = new Date().getFullYear();
    let mensaje = "";let mensaje1 = "";
    mensaje = `Fecha : ${dia}/${mes}/${año}<br>Hora : ${hora}:${minutos}`;
    mensaje1 = `Fecha : ${fecha}<br>Hora : ${hora}:${minutos}`; 
    return mensaje1;
                 }
             
function principal() {
     salidaCarrito.classList.remove("resultadoFinalError", "resultadoParcial");
     salida.classList.remove("resultadoFinalImprimir", "resultado", "salidaCarrito", "resultadoFinal", "resultadoParcial");
     salida.classList.add("salida");
     salida.innerHTML =""; 
    productos.forEach(producto => {
        let imagen = document.createElement("img");
            let tarjeta = document.createElement("div");
            let botonA = document.createElement("button");
            let botonE = document.createElement("button");
            let botonV = document.createElement("button"); 
            let titulo = document.createElement("p");
            let precio = document.createElement("p");
            titulo.textContent=`${producto.nombre} stock :${producto.stock}`;
            imagen.src = producto.imagen;
            tarjeta.classList.add("tarjeta");
            botonA.classList.add("boton"); 
            botonA.textContent = `🛒 añadir al carrito`;
            botonE.classList.add("boton");
            botonE.textContent =`🛒 eliminar una unidad`;
            botonV.classList.add("boton");
            botonV.textContent =`🛒 ver carrito`; 
            precio.innerHTML = `<strong>Precio :${producto.precioMax} €</strong>`;
            tarjeta.appendChild(titulo); 
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(botonA);
            tarjeta.appendChild(botonE);
            tarjeta.appendChild(botonV);
            salida.appendChild(tarjeta);
                                                       
    botonA.addEventListener("click", ()=>{
                salidaCarrito.innerHTML = "";
                salidaCarrito.classList.remove("resultadoFinalError");
                let encontrado = carrito.find(item =>{                  
                    return item.id === producto.id;
                                                     });
                if(!encontrado && producto.stock > 0){
                 carrito.push({id:producto.id, nombre: producto.nombre, precio: producto.precioMax, cantidad: 1});producto.stock--;
                               } 
                else if(encontrado && producto.stock > 0) {                             
                    encontrado.cantidad++;producto.stock--;                                       
                     }
                else { salidaCarrito.classList.add("resultadoFinalError");salidaCarrito.textContent =`Producto sin STOCK`;}                                                                                      
                console.log(carrito);
                                                });

     botonE.addEventListener("click", ()=>{ 
                salidaCarrito.innerHTML = "";
                salidaCarrito.classList.remove("resultadoFinalError");
                salida.classList.add("salida");
                let encontrado = carrito.find(item =>{    
                    return item.id === producto.id;
                                                     });console.log(`encontrar : ${encontrado}`);
                if(!encontrado){
                    salidaCarrito.classList.add("resultadoFinalError");
                    salidaCarrito.innerHTML = `No esta en el Carrito<br>No se puede Eliminar`; 
                    return;
                               }                                     
                else {
                    let posicion = carrito.findIndex(indice=>{
                    return indice.id === producto.id;});console.log(`posicion :${posicion}`);                
                    if(encontrado.cantidad > 1) {
                      encontrado.cantidad--;producto.stock++;
                                                } 
                    else {producto.stock++;carrito.splice(posicion, 1);}                                                                                     
                    console.log(carrito);
                    }                                                                                                                                                         
                                            });
        botonV.addEventListener("click", ()=>{
                if(carrito.length > 0) {
                    let totales = carrito.reduce(function(acumulador, precio) {
                    let total = precio.precio * precio.cantidad;
                    acumulador.push({nombre: precio.nombre, precio: precio.precio,
                        cantidad: precio.cantidad, total: total});
                    return acumulador;
                                                                                  }, []);
                    console.log(totales);

                    let totalCompra = totales.reduce(function(acumulador, precio) {
                    let total = Number(precio.total);
                    return acumulador + total;
                                                                              }, 0); 
                    console.log(`${totalCompra}€`);
                    salida.innerHTML = "";
                    salidaCarrito.innerHTML = "";
                    salidaCarrito.classList.remove("resultadoFinalError");
                    totales.forEach(resultado =>{
                    let muestra = document.createElement("div");
                    muestra.classList.add("resultado");
                    let precioNumero = Number(resultado.precio);
                    muestra.innerHTML = `${resultado.nombre}<br> Precio :${precioNumero.toFixed(2)} €<br>
                    Cantidad :${resultado.cantidad} UND<br> Total Producto : ${resultado.total.toFixed(2)} €`; 
                    salida.classList.add("salidaCarrito");                  
                    salida.appendChild(muestra);                   
                                           });
                    let totalFinal = document.createElement("p");
                    totalFinal.classList.add("resultadoFinal");
                    totalFinal.innerHTML = `<strong>Total Compra : ${totalCompra.toFixed(2)} €</strong>`;
                    salida.appendChild(totalFinal);

                    let botonS = document.createElement("button");
                    botonS.classList.add("boton");
                    botonS.textContent ="⬅️ 🛒 seguir comprando";
                    salida.appendChild(botonS);
                    let botonF = document.createElement("button");
                    botonF.classList.add("boton");
                    botonF.textContent ="🛒 finalizar compra";
                    salida.appendChild(botonF);
                    salidaCarrito.classList.add("resultadoParcial");
                    botonS.addEventListener("click", ()=>{
                       salida.innerHTML ="";
                       salida.classList.remove("salidaCarrito");
                       salida.classList.add("salida");
                       salidaCarrito.innerHTML =""; 
                       principal();
                                                         });
                    botonF.addEventListener("click", ()=>{
                    salida.innerHTML ="";
                    salidaCarrito.innerHTML ="";
                    salidaCarrito.classList.remove("resultado");
                    let f = document.createElement("p");
                    let muestraFecha = fecha();
                    f.innerHTML = `${muestraFecha}`;
                    salida.appendChild(f);
                    totales.forEach(resultado =>{
                        let p = document.createElement("p");                        
                        p.innerHTML = `${resultado.nombre} // ${resultado.cantidad} und. : ${resultado.total.toFixed(2)} €<br>`;
                        salida.classList.remove("salida");
                        salida.classList.add("salidaCarrito");
                        salida.appendChild(p);
                                               });
                    let p = document.createElement("div");                  
                    p.classList.add("seguir");                                               
                    p.innerHTML = `<strong><span class="color">💰 Total Compra : ${totalCompra.toFixed(2)} €</span></strong>`; 
                    salida.appendChild(p); 
                    carrito= [];
                    let botonN = document.createElement("button");
                    botonN.classList.add("boton");
                    botonN.textContent = `🛒 nueva compra`;
                    p.appendChild(botonN);
                    salidaCarrito.classList.remove("salidaCarrito");
                    botonN.addEventListener("click", () => {
                        salida.innerHTML ="";
                        salida.classList.remove("salidaCarrito");
                        salida.classList.add("salida");
                        salidaCarrito.innerHTML =""; 
                        principal();
                                                            }); 
                    let botonI = document.createElement("button");
                    botonI.classList.add("boton");
                    botonI.textContent = `imprimir`;
                    p.appendChild(botonI);
                    botonI.addEventListener("click", () => {
                        window.print();
                                                           });                                                                 
                                                      });                                                     
                                       }
                else {
                    salidaCarrito.classList.add("resultadoFinalError");
                    salidaCarrito.textContent = `El carrito esta Vacio`;
                    return;
                    }                       
                                            });                                     
                                }); 
                       }                  
principal();                                     

