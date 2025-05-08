const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Enviar Correo//
$(document).ready(function () {
    $('["data-bs-toggle="tooltip"]').tooltip();
  });

  $('#correo').click(function () {
    alert("Correo enviado correctamente") 
})

//Cambiar color//
$(document).ready(function() {
  $('#destacados').on('dblclick', function() {
    $(this).css('color', 'cyan'); // Cambia el color a rojo
  });

  $('#contactos').on('dblclick', function() {
    $(this).css('color', 'cyan'); // Cambia el color a rojo
  });
});

//Ocultar información//

$(document).ready(function () {
  $('#card-title').on('click', function () {
    $(this).siblings('.card-text').toggle();
  });
});

$(document).ready(function () {
  $('#card-title1').on('click', function () {
    $(this).siblings('.card-text').toggle();
  });
});

$(document).ready(function () {
  $('#card-title2').on('click', function () {
    $(this).siblings('.card-text').toggle();
  });
});

$(document).ready(function () {
  $('#card-title3').on('click', function () {
    $(this).siblings('.card-text').toggle();
  });
});