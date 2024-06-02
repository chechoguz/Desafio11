const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString();

const cantidadSpan = document.querySelector('.cantidad');
const valorTotalSpan = document.querySelector('.valor-total');
const botonSumar = document.querySelector('.card button:nth-of-type(1)');
const botonRestar = document.querySelector('.card button:nth-of-type(2)');

function actualizarTotal() {
  const cantidad = parseInt(cantidadSpan.textContent);
  const total = cantidad * precio;
  valorTotalSpan.textContent = total.toLocaleString();
}

actualizarTotal();

botonSumar.addEventListener('click', () => {
  cantidadSpan.textContent = parseInt(cantidadSpan.textContent) + 1;
  actualizarTotal();
});



botonRestar.addEventListener('click', () => {
  const nuevaCantidad = parseInt(cantidadSpan.textContent) - 1;
  if (nuevaCantidad >= 0) {
    cantidadSpan.textContent = nuevaCantidad;
    actualizarTotal();
  }
});