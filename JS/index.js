alert("bienvenidos a nuestra pagina");
const DivProductos = document.getElementById("DivProductos")
const productos =[
  {id:1, nombre: "Producto1",  precio: 100,  codigo: "ABC123" }
]
DivProductos.innerHTML= productos
.map
(productos)=> 
<div class='col-12 col-md-6 col-lg-3 my-3'>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}.</p>
       <p class="card-text">${producto.codigo}.</p>
       <a href="#" class="btn btn-primary">Ver Mas</a>
    </div>
  </div>  
</div>
{/* porque esos 2 errores? */}