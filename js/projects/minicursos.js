const itemsData = [
  {
    title: 'Python básico, intermediário e avançado',
    description: 'Python é uma das linguagens de programação mais utilizadas no mundo da tecnologia atualmente, com inúmeras aplicações, como Inteligência Artificial e automação de processos operacionais.',
    content: `
      No minicurso de Python Básico, os participantes aprenderão sobre Programação Orientada a Objetos (POO) e fundamentos da programação, incluindo sintaxe básica, controle de fluxo, estruturas de dados primitivas (como arrays e strings) e funções.
      No minicurso de Python Intermediário, os participantes aprofundarão seus conhecimentos em estruturas de dados, como listas, tuplas e dicionários, além de funções, leitura e escrita em arquivos externos.
      No minicurso de Python Avançado, os participantes explorarão o potencial avançado da linguagem, trabalhando com classes, módulos e funções mais complexas.
    `
  },
  {
    title: 'Linguagem C básico, intermediário e avançado',
    description: 'C é uma linguagem fundamental na programação de sistemas e aplicações de alto desempenho, graças ao seu contato mais próximo do hardware, é possível reduzir significativamente o tempo de execução de algoritmos.',
    content: `
      No minicurso de C Básico, os participantes aprenderão os fundamentos da programação, incluindo sintaxe básica, controle de fluxo, estruturas de dados primitivas (como arrays e strings) e funções.
      No minicurso de C Intermediário, os participantes explorarão conceitos mais avançados, como ponteiros, alocação dinâmica de memória e estruturas de dados, como listas, pilhas e árvores.
      No minicurso de C Avançado, os participantes trabalharão com conceitos avançados como gerenciamento de exceções e programação multi-threaded.
    `
  },
  {
    title: 'Ansys básico, intermediário e avançado',
    description: 'Ansys é uma ferramenta de simulação utilizada para análises estruturais, térmicas e de fluidos em engenharia.',
    content: `
      No minicurso de Ansys Básico, os participantes aprenderão a interface do Ansys, conceitos fundamentais de modelagem, malhação e execução de análises simples, como análise de uma viga sujeita a diferentes tipos de carregamentos e a análise de um modelo simples de calorímetro.
      No minicurso de Ansys Intermediário, o foco será em análises mais complexas, como análise de elementos finitos (FEA) e simulações dinâmicas. Os participantes terão a oportunidade de trabalhar em projetos como a simulação de um suporte estrutural sob cargas variáveis para verificar sua durabilidade e segurança.
      No minicurso de Ansys Avançado, os participantes explorarão técnicas avançadas de simulação, como análise de fluidos computacional (CFD) e otimização topológica. Os participantes terão a oportunidade de trabalhar em projetos como simulação de fluxo aerodinâmico em uma asa de avião ou otimização topológica de estruturas de fuselagem.
    `
  },
  {
    title: 'Matlab básico, intermediário e avançado',
    description: 'Matlab é uma plataforma de programação e ambiente de desenvolvimento amplamente utilizada para cálculos numéricos, visualização de dados e desenvolvimento de algoritmos.',
    content: `
      No minicurso de Matlab Básico, os participantes aprenderão sobre a interface do Matlab, variáveis, operadores, e funções básicas. Além disso, serão introduzidos a técnicas de visualização de dados e à criação de scripts simples para automação de cálculos.
      No minicurso de Matlab Intermediário, os participantes explorarão técnicas avançadas como programação orientada a objetos e manipulação de grandes conjuntos de dados. O curso incluirá projetos como implementação de algoritmos de controle para sistemas dinâmicos.
      No minicurso de Matlab Avançado, os participantes utilizarão o Simulink para modelar e simular sistemas complexos. Os participantes terão a oportunidade de trabalhar em projetos como a modelagem e controle de pequenos sistemas aeroespaciais, como nanosatélites.
    `
  },
  {
    title: 'SolidWorks básico e intermediário',
    description: 'SolidWorks é um software de modelagem 3D utilizado para design mecânico e engenharia, os participantes aprenderão a criar e manipular modelos 3D e realizarão projetos como modelagem e análise de componentes.',
    content: `
      No minicurso de SolidWorks Básico, os participantes aprenderão a criar e manipular modelos 3D básicos, a utilizar ferramentas de esboço e modelagem, e a montar conjuntos simples. Serão desenvolvidos projetos como a criação de um modelo básico de componente mecânico.
      No minicurso de SolidWorks Intermediário, o foco será em técnicas avançadas de modelagem e montagem. Os participantes realizarão projetos como a modelagem de um mecanismo complexo e a análise de montagem e interferência de componentes.
    `
  },
  {
    title: 'Introdução à Aerodinâmica',
    description: 'Os participantes aprenderão sobre a teoria do voo, forças aerodinâmicas, e análise de perfis aerodinâmicos. O curso incluirá projetos como a análise de perfis de asas e a avaliação de desempenho aerodinâmico.',
    content: `
      DESCRIÇÃO PLANO DE ENSINO
      É recomendado realizar esse curso antes dos cursos de CFD e XFLR5 para ter uma base teórica antes dos assuntos práticos. 
    `
  },
  {
    title: 'Introdução à Propulsão',
    description: 'Os participantes aprenderão sobre diferentes tipos de motores e desempenho de propulsores. O curso incluirá projetos como a análise de desempenho de um motor a jato e o estudo dos efeitos de diferentes tipos de propulsores em uma aeronave.',
    content: `
      DESCRIÇÃO PLANO DE ENSINO
      É recomendado realizar esse curso antes dos cursos de OpenRocket e OpenMotor para ter uma base teórica antes dos assuntos práticos.   
    `
  },
  {
    title: 'Introdução à Eletrônica',
    description: 'Os participantes aprenderão sobre circuitos eletrônicos, dispositivos e sistemas embarcados. O curso incluirá projetos como a construção de circuitos básicos e a integração de sensores eletrônicos em um sistema de controle.',
    content: `
      DESCRIÇÃO PLANO DE ENSINO
    `
  },
  {
    title: 'Introdução à CFD',
    description: 'Os participantes aprenderão sobre modelagem de fluxo, malhação e análise de resultados. O curso incluirá projetos como a simulação de fluxo em torno de corpos aerodinâmicos e a avaliação de eficiência de sistemas de ventilação.',
    content: `
      DESCRIÇÃO PLANO DE ENSINO      
    `
  },
  {
    title: 'Introdução à Elementos Finitos',
    description: 'Os participantes aprenderão sobre a formulação e aplicação de FEA em diferentes tipos de análises. O curso incluirá projetos como a análise de tensões em componentes estruturais e a avaliação de distribuição térmica.',
    content: `
      DESCRIÇÃO PLANO DE ESNINO 
    `
  },
  {
    title: 'Introdução à Inteligência Artificial',
    description: 'Os participantes aprenderão sobre algoritmos de aprendizado de máquina e suas aplicações. O curso incluirá projetos como implementação de modelos preditivos para manutenção preditiva e análise de dados.',
    content: `
      DESCRIÇÃO PLANO DE ESNINO 
    `
  },
  {
    title: 'LaTeX/Overleaf',
    description: 'Os participantes aprenderão a formatar e apresentar relatórios técnicos e artigos científicos. O curso incluirá projetos como a redação e formatação de documentos nos padrões da UFSM',
    content: `
      DESCRIÇÃO PLANO DE ESNINO 
    `
  },
  {
    title: 'OpenRocket e OpenMotor',
    description: 'Os participantes aprenderão a projetar e simular foguetes e motores de foguete. O curso incluirá projetos como a modelagem de um foguete e a análise de seu desempenho durante o voo.',
    content: `
      DESCRIÇÃO PLANO DE ESNINO 
    `
  },
  {
    title: 'XFLR5',
    description: 'Os participantes aprenderão a utilizar o XFLR5 para modelar e analisar o desempenho de diferentes perfis de asas. O curso incluirá projetos como a avaliação da eficiência aerodinâmica e a otimização de perfis para diferentes condições de voo.',
    content: `
      DESCRIÇÃO PLANO DE ENSINO
    `
  },
  {
    title: 'Capella',
    description: 'Os participantes aprenderão a utilizar o Capella para criar modelos de sistemas e realizar análises de requisitos e desempenho. O curso incluirá projetos como o desenvolvimento de modelos de sistemas aeroespaciais e a análise de suas funcionalidades.',
    content: `
      DESCRIÇÃO PLANO DE ENSINO
    `
  },
  {
    title: 'STK',
    description: 'Os participantes aprenderão a modelar e analisar missões espaciais e sistemas de comunicação. O curso incluirá projetos como a simulação de trajetórias de satélites e a análise de cobertura de sistemas de comunicação.',
    content: `
      DESCRIÇÃO PLANO DE ENSINO
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.carousel-container');

  function createCarouselItem(data, index) {
      const item = document.createElement('div');
      item.classList.add('carousel-item');

      const title = document.createElement('h2');
      title.textContent = data.title;
      item.appendChild(title);

      const briefDescription = document.createElement('p');
      briefDescription.classList.add('list-question');
      briefDescription.textContent = data.description;
      item.appendChild(briefDescription);

      const answer = document.createElement('div');
      answer.id = `list-answer${index}`;
      answer.classList.add('list-answer');
      data.content.split('\n').forEach(line => {
          if (line.trim()) { 
              const paragraph = document.createElement('p');
              paragraph.textContent = line.trim();
              answer.appendChild(paragraph);
          }
      });
      item.appendChild(answer);

      const button = document.createElement('button');
      button.classList.add('toggle-details');
      button.textContent = 'Veja mais';
      item.appendChild(button);


      button.addEventListener('click', () => {
          const isVisible = answer.style.display === 'block';
          if (isVisible) {
              answer.style.display = 'none';
              button.textContent = 'Veja mais';
              briefDescription.style.display = 'block';  
          } else {
              answer.style.display = 'block';
              button.textContent = 'Veja menos';
              briefDescription.style.display = 'none'; 
          }
      });

      return item;
  }

  // Add items to the carousel
  itemsData.forEach((data, index) => {
      const item = createCarouselItem(data, index);
      container.appendChild(item);
  });

  // Carousel functionality
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  const itemMargin = parseInt(window.getComputedStyle(document.querySelector('.carousel-item')).marginLeft, 10);

  let index = 0;

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

  // Initialize the carousel
  showSlide(index);
});


function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission
  showPopup("Sua mensagem foi enviada com sucesso!");
}

function showPopup(message) {
  document.getElementById("popup-message").textContent = message;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function showFields() {
  var role = document.getElementById('role').value;

  document.getElementById('CPF-field').style.display = 'none';
  document.getElementById('curso-field').style.display = 'none';
  document.getElementById('inst-field').style.display = 'none';
  document.getElementById('field-field').style.display = 'none';
  document.getElementById('age-field').style.display = 'block';

  if (role === 'student-ufsm') {
    document.getElementById('CPF-field').style.display = 'block';
    document.getElementById('curso-field').style.display = 'block';
  } else if (role === 'student-extern') {
    document.getElementById('CPF-field').style.display = 'block';
    document.getElementById('inst-field').style.display = 'block';
    document.getElementById('curso-field').style.display = 'block';
  } else if (role === 'extern') {
    document.getElementById('CPF-field').style.display = 'block';
    document.getElementById('field-field').style.display = 'block';
  }
}

function showOtherCourseField() {
  var curso = document.getElementById('curso').value;
  document.getElementById('other-course-field').style.display = curso === 'Outro' ? 'block' : 'none';
}





const timeSlots = [
  "8h30-10h30",
  "10h30-12h30",
  "13h30-15h30",
  "15h30-17h30",
  "17h30-19h30",
  "19h30-21h30"
];

const dateRange = [
  "2024-08-10",
  "2024-08-14"
];

const events = [
  { date: "2024-08-10", timeSlot: "8h30-10h30", description: "Ansys (Turma 1)", capacity: 0 },
  { date: "2024-08-10", timeSlot: "17h30-19h30", description: "Introdução à Aerodinâmica", capacity: 0 },
  { date: "2024-08-10", timeSlot: "19h30-21h30", description: "SolidWorks Básico (Turma 1)", capacity: 5 },

  { date: "2024-08-11", timeSlot: "13h30-15h30", description: "Eletrônica Básica", capacity: 5 },
  { date: "2024-08-11", timeSlot: "15h30-17h30", description: "Python Básico (Turma 1)", capacity: 5 },
  { date: "2024-08-11", timeSlot: "17h30-19h30", description: "SolidWorks Avançado", capacity: 5 },
  { date: "2024-08-11", timeSlot: "19h30-21h30", description: "XFLR", capacity: 5 },

  { date: "2024-08-12", timeSlot: "8h30-10h30", description: "SolidWorks Básico (Turma 1)", capacity: 0 },
  { date: "2024-08-12", timeSlot: "15h30-17h30", description: "Open Rocket e Open Motor", capacity: 6 },
  { date: "2024-08-12", timeSlot: "17h30-19h30", description: "LaTeX ", capacity: 6 },
  { date: "2024-08-12", timeSlot: "19h30-21h30", description: "Matlab (Turma 1)", capacity: 6 },

  { date: "2024-08-13", timeSlot: "8h30-10h30", description: "SolidWorks Básico (Turma 2)", capacity: 0 },
  { date: "2024-08-13", timeSlot: "17h30-19h30", description: "Matlab (Turma 1)", capacity: 6 },
  { date: "2024-08-13", timeSlot: "19h30-21h30", description: "Python Básico (Turma 2)", capacity: 6 },

  { date: "2024-08-14", timeSlot: "8h30-10h30", description: "Elementos Finitos e Abaqus", capacity: 0 },
  { date: "2024-08-14", timeSlot: "13h30-15h30", description: "Ansys (Turma 2)", capacity: 0 },
  { date: "2024-08-14", timeSlot: "17h30-19h30", description: "Inteligência Artificial", capacity: 6 },
  { date: "2024-08-14", timeSlot: "19h30-21h30", description: "Python Avançado", capacity: 6 },
];


let selectedEvents = [];
const MAX_OFFICIAL = 3;
const MAX_WAITLIST = 2;
const currentBookings = {};

function generateWeekdayCalendar(dateRange) {
  const calendarContainer = document.getElementById('calendar');
  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  const startDate = new Date(dateRange[0]);
  const endDate = new Date(dateRange[1]);

  calendarContainer.innerHTML = '';

  const numberRow = document.createElement('div');
  numberRow.className = 'calendar';

  const timeSlotHeader = document.createElement('div');
  timeSlotHeader.className = 'time-slot-header';
  numberRow.appendChild(timeSlotHeader);

  const dayNumbers = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dayNumbers.push({
      date: currentDate.toISOString().split('T')[0],
      day: currentDate.getDate(),
      weekday: daysOfWeek[currentDate.getDay() - 1]
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  dayNumbers.forEach(({ date, day, weekday }) => {
    const dayCell = document.createElement('div');
    dayCell.className = 'day-cell';

    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.textContent = weekday;
    dayCell.appendChild(dayHeader);

    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = `Dia ${day}`;

    dayCell.appendChild(dayNumber);

    numberRow.appendChild(dayCell);
  });

  calendarContainer.appendChild(numberRow);

  events.forEach(event => {
    const key = `${event.date}-${event.timeSlot}`;
    currentBookings[key] = 0;  
  });

  timeSlots.forEach(timeSlot => {
    const [start, end] = timeSlot.split('-');
    const row = document.createElement('div');
    row.className = 'calendar';

    const timeSlotCell = document.createElement('div');
    timeSlotCell.className = 'time-slot-cell';

    const startTime = document.createElement('div');
    startTime.textContent = start;
    timeSlotCell.appendChild(startTime);

    const endTime = document.createElement('div');
    endTime.textContent = end;
    timeSlotCell.appendChild(endTime);

    row.appendChild(timeSlotCell);

    dayNumbers.forEach(({ date }) => {
      const dayCell = document.createElement('div');
      dayCell.dataset.date = date;
      dayCell.dataset.timeSlot = timeSlot;
      dayCell.className = 'calendar-cell';

      const event = events.find(e => e.date === date && e.timeSlot === timeSlot);
      if (event) {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event default';

        const description = document.createElement('div');
        description.className = 'description-event';
        description.textContent = event.description;
        eventDiv.appendChild(description);

        const remainingPlaces = document.createElement('div');
        remainingPlaces.className = 'remaining-places';
        remainingPlaces.textContent = `Vagas Restantes: ${event.capacity - (currentBookings[`${event.date}-${event.timeSlot}`] || 0)}`;
        eventDiv.appendChild(remainingPlaces);

        dayCell.appendChild(eventDiv);

        dayCell.addEventListener('click', () => handleCellClick(dayCell, event));
        // dayCell.addEventListener('mouseover', () => handleCellHover(dayCell));
        // dayCell.addEventListener('mouseout', () => handleCellMouseOut(dayCell));
      }

      row.appendChild(dayCell);
    });

    calendarContainer.appendChild(row);
  });

  updateMeetingDetails();
}
function handleCellClick(cell, event) {
  const eventType = document.querySelector('input[name="event-type"]:checked').value;
  const key = `${event.date}-${event.timeSlot}`;

  // Check if the event is already selected
  const currentSelectedEvent = selectedEvents.find(e => e.date === event.date && e.timeSlot === event.timeSlot);

  if (currentSelectedEvent) {
      if (currentSelectedEvent.type === eventType) {
          // If the event is selected with the current type and clicked again, deselect it
          cell.classList.remove('selected');
          selectedEvents = selectedEvents.filter(e => !(e.date === event.date && e.timeSlot === event.timeSlot));

          if (eventType === 'official') {
              currentBookings[key]--; // Decrease the booking count only for official choices
          }

          // Update the event color to default
          const eventElement = cell.querySelector('.event');
          if (eventElement) {
              eventElement.className = 'event default'; // Apply the default color
              const remainingPlaces = eventElement.querySelector('.remaining-places');
              if (remainingPlaces) {
                  remainingPlaces.textContent = `Vagas Restantes: ${event.capacity - (currentBookings[key] || 0)}`;
              }
          }
      } else {
          // If the event is selected with a different type, check if the type change is within the limits
          const selectedEventTypeCount = selectedEvents.filter(e => e.type === eventType).length;

          if (eventType === 'official' && selectedEventTypeCount >= MAX_OFFICIAL) {
              showPopup('Você não pode selecionar mais de 3 minicursos como escolha oficiais.');
              return;
          }
          if (eventType === 'waitlist' && selectedEventTypeCount >= MAX_WAITLIST) {
              showPopup('Você não pode selecionar mais de 2 minicursos na lista de espera.');
              return;
          }
          if (eventType === 'official' && (currentBookings[key] || 0) >= event.capacity) {
              showPopup('Esse minicurso está completo.');
              return;
          }

          // Replace the current event with the new event type
          selectedEvents = selectedEvents.filter(e => !(e.date === event.date && e.timeSlot === event.timeSlot));

          if (currentSelectedEvent.type === 'official') {
              currentBookings[key]--;  
          }

          // Now update the selection with the new event type
          event.type = eventType;
          selectedEvents.push(event);
          if (eventType === 'official') {
              currentBookings[key] = (currentBookings[key] || 0) + 1; // Increase the booking count only for official choices
          }
      }
  } else {
      // If the event is not selected, check if the number of selected events of the specified type is within the limits
      const selectedEventTypeCount = selectedEvents.filter(e => e.type === eventType).length;

      if (eventType === 'official' && selectedEventTypeCount >= MAX_OFFICIAL) {
          showPopup('Você não pode selecionar mais de 3 minicursos como escolha oficiais.');
          return;
      }
      if (eventType === 'waitlist' && selectedEventTypeCount >= MAX_WAITLIST) {
          showPopup('Você não pode selecionar mais de 2 minicursos na lista de espera.');
          return;
      }
      // Check if there is capacity available for official choice
      if (eventType === 'official' && (currentBookings[key] || 0) >= event.capacity) {
          showPopup('Esse minicurso está completo.');
          return;
      }

      // Add the event to the list of selected events
      cell.classList.add('selected');
      event.type = eventType;
      selectedEvents.push(event);
      if (eventType === 'official') {
          currentBookings[key] = (currentBookings[key] || 0) + 1; // Increase the booking count only for official choices
      }
  }

  // Update the event element
  const eventElement = cell.querySelector('.event');
  if (eventElement) {
      eventElement.className = `event ${eventType} ${cell.classList.contains('selected') ? 'selected' : 'default'}`;
      // Update the remaining places count
      const remainingPlaces = eventElement.querySelector('.remaining-places');
      if (remainingPlaces) {
          remainingPlaces.textContent = `Vagas Restantes: ${event.capacity - (currentBookings[key] || 0)}`;
      }
  }

  // Update the meeting details
  updateMeetingDetails();
}







function updateMeetingDetails() {
  const detailsBody = document.getElementById('event-details-body');
  detailsBody.innerHTML = '';

  const officialEvents = selectedEvents.filter(e => e.type === 'official');
  const waitlistEvents = selectedEvents.filter(e => e.type === 'waitlist');

  const maxLength = Math.max(officialEvents.length, waitlistEvents.length);

  for (let i = 0; i < maxLength; i++) {
    const row = document.createElement('tr');

    const officialCell = document.createElement('td');
    const waitlistCell = document.createElement('td');

    if (officialEvents[i]) {
      officialCell.textContent = `${officialEvents[i].date} ${officialEvents[i].timeSlot} - ${officialEvents[i].description}`;
    }

    if (waitlistEvents[i]) {
      waitlistCell.textContent = `${waitlistEvents[i].date} ${waitlistEvents[i].timeSlot} - ${waitlistEvents[i].description}`;
    }

    row.appendChild(officialCell);
    row.appendChild(waitlistCell);
    detailsBody.appendChild(row);
  }
}

// Generate the calendar for the weekdays defined in the array
generateWeekdayCalendar(dateRange);



const inscriptions = [
  {
      "name": "test1",
      "email": "test1@gmail.com",
      "role": "student-ufsm",
      "cpf": "9458664151",
      "inst": "UFSM",
      "curso": "Engenharia Aeroespacial",
      "age": "Menos de 20",
      "officialEvents": [
          "2024-08-12 15h30-17h30 - Open Rocket e Open Motor",
          "2024-08-12 17h30-19h30 - LaTeX "
      ],
      "waitlistEvents": [
          "2024-08-13 17h30-19h30 - Matlab (Turma 1)",
          "2024-08-13 19h30-21h30 - Python Básico (Turma 2)"
      ]
  },
  {
      "name": "test2",
      "email": "test2@gmail.com",
      "role": "student-extern",
      "cpf": "89443691576",
      "inst": "UFSC",
      "curso": "Medicina",
      "age": "20-25",
      "officialEvents": [
          "2024-08-12 15h30-17h30 - Open Rocket e Open Motor",
          "2024-08-12 17h30-19h30 - LaTeX "
      ],
      "waitlistEvents": [
          "2024-08-13 17h30-19h30 - Matlab (Turma 1)",
          "2024-08-13 19h30-21h30 - Python Básico (Turma 2)"
      ]
  },
  {
      "name": "test3",
      "email": "test3@gmail.com",
      "role": "extern",
      "cpf": "98526565551",
      "inst": "N/A",
      "curso": "Pedreiro",
      "age": "Mais de 40",
      "officialEvents": [
          "2024-08-12 15h30-17h30 - Open Rocket e Open Motor",
          "2024-08-12 17h30-19h30 - LaTeX "
      ],
      "waitlistEvents": [
          "2024-08-13 17h30-19h30 - Matlab (Turma 1)",
          "2024-08-13 19h30-21h30 - Python Básico (Turma 2)"
      ]
  }
];

function handleFormSubmit(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Obtém os valores dos campos do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const role = document.getElementById('role').value;
  const cpf = document.getElementById('CPF').value;
  const inst = document.getElementById('inst').value;
  const curso = document.getElementById('curso').value;
  const otherCourse = document.getElementById('other-course').value; // Valor do campo "Especifique"
  const age = document.getElementById('age').value;

  // Obtém as escolhas principais e de lista de espera
  const officialEvents = selectedEvents.filter(e => e.type === 'official').map(e => `${e.date} ${e.timeSlot} - ${e.description}`);
  const waitlistEvents = selectedEvents.filter(e => e.type === 'waitlist').map(e => `${e.date} ${e.timeSlot} - ${e.description}`);

  // Cria um objeto de inscrição
  const inscription = {
      name: name,
      email: email,
      role: role,
      cpf: cpf,
      inst: role === 'student-ufsm' ? 'UFSM' : inst,
      curso: curso === 'Outro' ? otherCourse : curso,  
      age: age,
      officialEvents: officialEvents,
      waitlistEvents: waitlistEvents
  };

  // Adiciona a inscrição à lista
  inscriptions.push(inscription);

  // Atualiza a tabela com as inscrições
  updateInscriptionTable();

  // Atualiza os detalhes dos minicursos
  updateMeetingDetails();

  // Exibe a mensagem de sucesso
  showPopup("Sua mensagem foi enviada com sucesso!");
}


function updateInscriptionTable() {
  const tableBody = document.getElementById('inscription-table-body');
  tableBody.innerHTML = ''; // Limpa o corpo da tabela

  inscriptions.forEach(inscription => {
      // Cria uma nova linha de tabela
      const row = document.createElement('tr');

      // Cria células e adiciona texto
      const nameCell = createCell(inscription.name);
      const emailCell = createCell(inscription.email);
      const roleCell = createCell(getRoleText(inscription.role)); // Usa a função getRoleText
      const cursoCell = createCell(inscription.curso);
      const cpfCell = createCell(inscription.cpf);
      const instCell = createCell(inscription.inst); // Verifica o role
      const ageCell = createCell(inscription.age);
      
      // Cria células para as escolhas principais e a lista de espera
      const officialEventsCell = createCell(inscription.officialEvents.join('\n'));
      const waitlistEventsCell = createCell(inscription.waitlistEvents.join('\n'));


      // Adiciona as células à linha
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(roleCell);
      row.appendChild(cpfCell);
      row.appendChild(instCell);
      row.appendChild(cursoCell);
      row.appendChild(ageCell);
      row.appendChild(officialEventsCell);
      row.appendChild(waitlistEventsCell);

      // Adiciona a linha ao corpo da tabela
      tableBody.appendChild(row);
  });
}


function createCell(text) {
  const cell = document.createElement('td');
  cell.textContent = text || 'N/A'; // Define o texto da célula, substituindo valores vazios por 'N/A'
  return cell;
}

function getRoleText(role) {
  switch (role) {
      case 'student-ufsm':
          return 'Aluno da UFSM';
      case 'student-extern':
          return 'Aluno de outra instituição';
      case 'extern':
          return 'Sem vínculo institucional';
  }
}

updateInscriptionTable();
