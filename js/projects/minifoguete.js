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

    const isActive = targetAnswer.style.display === 'block';

    document.querySelectorAll('.faq-answer').forEach(answer => {
      answer.style.display = 'none';
    });

    if (!isActive) {
      targetAnswer.style.display = 'block';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".btn-details-trainee");
  const contentDisplay = document.getElementById("content-display");

  const defaultContent = document.querySelector(".circle-item .hidden-content-timeline2").innerHTML;
 
  contentDisplay.innerHTML = defaultContent;

  let lastClickedId = null;

  cards.forEach(card => {
    card.addEventListener("click", function() {
      const targetId = this.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      if (window.innerWidth >= 500) {
        if (lastClickedId === targetId) {
          contentDisplay.innerHTML = defaultContent;
          lastClickedId = null;
        } else {
          if (targetContent) {
            contentDisplay.innerHTML = targetContent.innerHTML;
            lastClickedId = targetId;
          }
        }
      } else {
        if (lastClickedId === targetId) {
           contentDisplay.innerHTML = defaultContent;
          lastClickedId = null;
          targetContent.style.display = "none";

        } else {
          if (targetContent) {
            const cardRect = this.getBoundingClientRect();
            const containerRect = document.querySelector('.timeline-container').getBoundingClientRect();
            
            targetContent.style.display = "block";
            targetContent.style.position = "absolute"; 
            targetContent.style.top = `${cardRect.bottom - containerRect.top + 20}px`; 
            targetContent.style.left = `${0}px`; 
            lastClickedContent = targetContent;
            lastClickedId = targetId;
          }
        }
      }
    });
  });
});

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to format the date in "terça-feira, 24 de novembro de 2024" format
function formatDate(dateStr) {
  const [day, month, year] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  // Options for formatting date in Portuguese
  const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  // Create a formatter for Portuguese
  const formatter = new Intl.DateTimeFormat('pt-BR', options);
  const formattedDate = formatter.format(date);

  // Capitalize the first letter
  return capitalizeFirstLetter(formattedDate);
}
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.carousel-container');
  const today = new Date();

  // Sample data to add dynamically
  const itemsData = [
    { title: 'Event 1', location: 'Location A', date: '20-08-2024', description: 'This is a description for Event 1.' },
    { title: 'Event 2', location: 'Location B', date: '25-08-2024', description: 'This is a description for Event 2.' },
    { title: 'Event 3', location: 'Location C', date: '05-08-2024', description: 'This is a description for Event 3.' },
    { title: 'Event 4', location: 'Location D', date: '25-05-2024', description: 'This is a description for Event 4.' }
  ];

  // Function to format the date in "terça-feira, 24 de novembro de 2024" format
  function formatDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    // Options for formatting date in Portuguese
    const options = {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };

    // Create a formatter for Portuguese
    const formatter = new Intl.DateTimeFormat('pt-BR', options);
    const formattedDate = formatter.format(date);

    // Capitalize the first letter
    return capitalizeFirstLetter(formattedDate);
  }

  // Function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Function to create a carousel item element
  function createCarouselItem(data) {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    item.setAttribute('data-date', data.date);

    // Create and append the title
    const title = document.createElement('h2');
    title.textContent = data.title;
    item.appendChild(title);

    // Create and append the location
    const location = document.createElement('h3');
    location.classList.add('location'); // Add class for styling
    location.textContent = data.location;
    item.appendChild(location);

    // Create and append the formatted date
    const date = document.createElement('p');
    date.classList.add('date'); // Add class for styling
    date.textContent = formatDate(data.date);
    item.appendChild(date);

    // Create and append the description
    const description = document.createElement('p');
    description.textContent = data.description;
    item.appendChild(description);

    return item;
  }

  // Sort itemsData by date from oldest to most recent
  itemsData.sort((a, b) => parseDate(a.date) - parseDate(b.date));

  // Add items dynamically
  itemsData.forEach(data => {
    const item = createCarouselItem(data);
    container.appendChild(item);
  });

  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  const itemMargin = parseInt(window.getComputedStyle(document.querySelector('.carousel-item')).marginLeft, 10);
  const visibleItems = Math.floor(container.parentElement.offsetWidth / (itemWidth + itemMargin * 2));

  // Function to parse a date string in `day-month-year` format to a Date object
  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // JavaScript months are 0-indexed
  }

  // Find the closest date index
  function findClosestDateIndex() {
    let closestIndex = 0;
    let minDiff = Infinity;

    items.forEach((item, index) => {
      const itemDateStr = item.getAttribute('data-date');
      const itemDate = parseDate(itemDateStr);
      const diff = Math.abs(today - itemDate);

      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    return closestIndex;
  }

  let index = findClosestDateIndex();

  function showSlide(n) {
    if (n >= items.length) index = 0;
    if (n < 0) index = items.length - 1;
    const offset = -(index * (itemWidth + itemMargin * 2)) + (container.parentElement.offsetWidth / 2) - (itemWidth / 2);
    container.style.transform = `translateX(${offset}px)`;
  }

  document.querySelector('.carousel-prev').addEventListener('click', () => {
    index--;
    showSlide(index);
  });

  document.querySelector('.carousel-next').addEventListener('click', () => {
    index++;
    showSlide(index);
  });

  // Initialize the carousel at the closest date
  showSlide(index);
});


const feedbacks = [
  { name: "Ana Souza", desc: "Aluno 6 ano fundamental", loc: "Escola X", text: "O projeto foi incrível e muito educativo!" },
  { name: "João Pereira", desc: "Aluno 3 ano ensino médio", loc: "Escola Y", text: "Os workshops são muito bem organizados e inspiradores." },
  { name: "Maria Silva", desc: "Professor", loc: "Escola Z", text: "Excelente iniciativa para engajar jovens na ciência!" },
  { name: "Pedro Santos", desc: "Aluno 1 ano fundamental", loc: "Escola A", text: "Aprendi muito e a equipe foi ótima!" },
  { name: "Luana Costa", desc: "Aluno 2 ano fundamental", loc: "Escola B", text: "Foi uma experiência incrível e educativa." },
  // Adicione mais itens conforme necessário
];

const maxVisibleFeedbacks = 4; // Número de feedbacks a mostrar inicialmente

function createFeedback({ name, desc, loc, text }) {
  const box = document.createElement('div');
  box.classList.add('box');
  
  const userDiv = document.createElement('div');
  userDiv.classList.add('user');
  
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');
  
  const h2Element = document.createElement('h2');
  h2Element.textContent = name;
  infoDiv.appendChild(h2Element);

  const h3Element = document.createElement('h3');
  h3Element.textContent = loc;
  infoDiv.appendChild(h3Element);

  const descElement = document.createElement('p');
  descElement.textContent = desc;
  infoDiv.appendChild(descElement);
  
  userDiv.appendChild(infoDiv);
  
  const textElement = document.createElement('p');
  textElement.textContent = text;
  
  box.appendChild(userDiv);
  box.appendChild(textElement);
  
  return box;
}

function addFeedback() {
  const feedbacksContainer = document.getElementById('feedbacks-container');
  feedbacksContainer.innerHTML = ''; // Limpa o conteúdo existente

  // Adiciona feedbacks até o limite visível
  feedbacks.slice(0, maxVisibleFeedbacks).forEach(feedback => {
    const feedbackElement = createFeedback(feedback);
    feedbacksContainer.appendChild(feedbackElement);
  });

  // Cria o container dos botões
  const buttonsContainer = document.getElementById('buttons-container');
  buttonsContainer.innerHTML = ''; // Limpa o conteúdo existente

  if (feedbacks.length > maxVisibleFeedbacks) {
    const readMoreButton = document.createElement('button');
    readMoreButton.textContent = 'Veja Mais';
    readMoreButton.classList.add('read-more');
    
    readMoreButton.addEventListener('click', () => {
      feedbacks.slice(maxVisibleFeedbacks).forEach(feedback => {
        const feedbackElement = createFeedback(feedback);
        feedbacksContainer.appendChild(feedbackElement);
      });

      readMoreButton.style.display = 'none'; // Esconde o botão após expandir

      const readLessButton = document.createElement('button');
      readLessButton.textContent = 'Veja Menos';
      readLessButton.classList.add('read-less');
      
      readLessButton.addEventListener('click', () => {
        // Remove todos os feedbacks adicionais
        const allFeedbacks = Array.from(feedbacksContainer.querySelectorAll('.box'));
        allFeedbacks.forEach((feedback, index) => {
          if (index >= maxVisibleFeedbacks) {
            feedbacksContainer.removeChild(feedback);
          }
        });

        readLessButton.style.display = 'none'; // Esconde o botão após recolher
        readMoreButton.style.display = 'block'; // Mostra o botão "Read More" novamente
      });

      buttonsContainer.appendChild(readLessButton);
    });

    buttonsContainer.appendChild(readMoreButton);
  }
}

document.addEventListener('DOMContentLoaded', addFeedback);


function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  var form = document.getElementById("signup-form");
  var params = {
      from_name: form.name.value,
      email_id: form.email.value,
      role: form.role.value,
      school: form.school ? form.school.value : '',
      institution: form.institution ? form.institution.value : '',
      message: form.message.value
  };

  emailjs.send("service_ubzp5kb", "template_pez9ddl", params)
      .then(function (res) {
          showPopup("Sua mensagem foi enviada com sucesso!");
          form.reset(); // Clear all form fields
      })
      .catch(function (err) {
          showPopup("Falha ao enviar a mensagem: " + err.text);
      });
}

function showPopup(message) {
  document.getElementById("popup-message").textContent = message;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}