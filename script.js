var source = document.getElementById("template").innerHTML;
var template = Handlebars.compile(source);
var Testimonios = {
  nombre: "Juan Perez",
  pais: "España",
  cargo: "Desarrollador Web",
  empresa: "Google",
  testimonio:
    "Aprender a programar fue una experiencia increíble. Gracias a freeCodeCamp, pude adquirir las habilidades necesarias para conseguir un trabajo bien remunerado como desarrollador web en Google. ¡freeCode cambió mi vida!",
  nombre2: "María Rodriguez",
    pais2: "Argentina",
    cargo2: "Ingeniera de Software",
    empresa2: "Microsoft",
    testimonio2:
      "freeCode fue mi puerta de entrada al mundo del desarrollo de software. El plan de estudios bien estructurado llevó mi conocimiento de programación desde un nivel principiante total hasta un nivel muy seguro. Fue todo lo que necesitaba para conseguir mi primer trabajo como desarrolladora en una empresa increíble.",
  nombre3: "Luis Hernández",
    pais3: "México",
    cargo3: "Ingeniero de Datos",
    empresa3: "Facebook",
    testimonio3:
      "Siempre he tenido dificultades para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que realmente me ayudó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCode, me dio las habilidades y la confianza que necesitaba para conseguir mi trabajo soñado como ingeniero de datos en Facebook."
}
document.getElementById("contenidoTestimonios").innerHTML = template(Testimonios);