// Seleccionamos los elementos <li> del slider
const slides = document.querySelectorAll(".slideshow li");
let currentSlide = 0; // Índice del slide actual

// Función para cambiar de slide
function changeSlide() {
  // Quitamos la clase 'active' del slide actual
  slides[currentSlide].classList.remove("active");

  // Calculamos el siguiente slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Añadimos la clase 'active' al nuevo slide
  slides[currentSlide].classList.add("active");
}

// Inicia el primer slide como activo
slides[currentSlide].classList.add("active");

// Cambiamos de slide cada 2 segundos
setInterval(changeSlide, 3000);
