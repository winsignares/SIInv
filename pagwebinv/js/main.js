// Obtén el modal y el botón de cerrar
var modal = document.querySelector('.modal1');
var closeBtn = document.querySelector('.close1');

var modal1 = document.querySelector('.modal');
var closeBtn1 = document.querySelector('.close');

// Añade un evento click al botón de cerrar para cerrar el modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Añade un evento click a cualquier parte del modal para cerrarlo también
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Función para abrir el modal
function openModal() {
    modal.style.display = 'block';
}


// Añade un evento click al botón de cerrar para cerrar el modal
closeBtn1.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Añade un evento click a cualquier parte del modal para cerrarlo también
modal1.addEventListener('click', function(event) {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    }
});

// Obtener los botones de radio


// Función para abrir el modal
function openModal1() {
    if (document.getElementById("radio1").checked) {
        modal.style.display = 'none';
        modal1.style.display = 'block';
    }
    if (document.getElementById("radio2").checked) {
        modal.style.display = 'none';
    }

}
function alert(){
Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Tus datos han sido  guardados con exito',
    showConfirmButton: false,
    timer: 1500
  })
}