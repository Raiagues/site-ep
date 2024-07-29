function showFields() {
  var role = document.getElementById('role').value;
  var schoolField = document.getElementById('school-field');
  var institutionField = document.getElementById('institution-field');

  if (role === 'teacher') {
      schoolField.style.display = 'block';
      institutionField.style.display = 'none';
  } else if (role === 'institution') {
      schoolField.style.display = 'none';
      institutionField.style.display = 'block';
  } else if (role === 'volunteer') {
      schoolField.style.display = 'none';
      institutionField.style.display = 'none';
  }
}
 
const testimonials = [
  { name: "Ana Souza", text: "O projeto foi incrível e muito educativo!" },
  { name: "João Pereira", text: "Os workshops são muito bem organizados e inspiradores." },
  { name: "Maria Silva", text: "Excelente iniciativa para engajar jovens na ciência!" }
];

const galleryImages = [
  { src: "../../images/p-1.png", alt: "Descrição da imagem 1" },
  { src: "../../images/p-2.png", alt: "Descrição da imagem 2" },
  { src: "../../images/p-3.png", alt: "Descrição da imagem 3" }
];

function populateTestimonials() {
  const container = document.getElementById('testimonials-container');
  testimonials.forEach(testimonial => {
      const testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('testimonial');
      testimonialDiv.innerHTML = `
          <p><strong>${testimonial.name}</strong>: ${testimonial.text}</p>
      `;
      container.appendChild(testimonialDiv);
  });
}

function populateGallery() {
  const container = document.getElementById('gallery-container');
  galleryImages.forEach(image => {
      const imageElement = document.createElement('img');
      imageElement.src = image.src;
      imageElement.alt = image.alt;
      imageElement.classList.add('gallery-image');
      container.appendChild(imageElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateTestimonials();
  populateGallery();
});

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetAnswer = document.getElementById(targetId);

    // Verifica se a resposta está visível
    const isActive = targetAnswer.style.display === 'block';

    // Fecha todas as respostas
    document.querySelectorAll('.faq-answer').forEach(answer => {
      answer.style.display = 'none';
    });

    // Abre a resposta clicada se não estava visível
    if (!isActive) {
      targetAnswer.style.display = 'block';
    }
  });
});

