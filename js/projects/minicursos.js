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
  const visibleItems = Math.floor(container.parentElement.offsetWidth / (itemWidth + itemMargin * 2));

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
  document.getElementById('other-course-field').style.display = curso === 'outros' ? 'block' : 'none';
}





const timeSlots = [
  "8h30-10h30",
  "10h30-12h30",
  "13h30-15h30",
  "15h30-17h30",
  "19h30-21h30"
];

const dateRange = [
  "2024-08-05",
  "2024-08-09"
];

const events = [
  { date: "2024-08-06", timeSlot: "10h30-12h30", description: "Meeting with team", capacity: 0 },
  { date: "2024-08-09", timeSlot: "19h30-21h30", description: "Project presentation", capacity: 5 },
  { date: "2024-08-06", timeSlot: "8h30-10h30", description: "Pre-meeting review", capacity: 8 },
  { date: "2024-08-07", timeSlot: "13h30-15h30", description: "Client follow-up", capacity: 7 },
  { date: "2024-08-08", timeSlot: "15h30-17h30", description: "Team brainstorming", capacity: 6 }
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
  // timeSlotHeader.textContent = "Horários"; 
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
    dayNumber.textContent = day;
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
        remainingPlaces.textContent = `Places remaining: ${event.capacity - (currentBookings[`${event.date}-${event.timeSlot}`] || 0)}`;
        eventDiv.appendChild(remainingPlaces);

        dayCell.appendChild(eventDiv);

        dayCell.addEventListener('click', () => handleCellClick(dayCell, event));
        dayCell.addEventListener('mouseover', () => handleCellHover(dayCell));
        dayCell.addEventListener('mouseout', () => handleCellMouseOut(dayCell));
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

  // Verifica se o evento já está selecionado
  const currentSelectedEvent = selectedEvents.find(e => e.date === event.date && e.timeSlot === event.timeSlot);

  if (currentSelectedEvent) {
    if (currentSelectedEvent.type === eventType) {
      // Se o evento estiver selecionado com o tipo atual e for clicado novamente, desmarque-o
      cell.classList.remove('selected');
      selectedEvents = selectedEvents.filter(e => !(e.date === event.date && e.timeSlot === event.timeSlot));
      currentBookings[key]--; // Reduz o número de reservas para o evento

      // Atualiza a cor do evento para o padrão
      const eventElement = cell.querySelector('.event');
      if (eventElement) {
        eventElement.className = 'event default'; // Aplica a cor padrão
        const remainingPlaces = eventElement.querySelector('.remaining-places');
        if (remainingPlaces) {
          remainingPlaces.textContent = `Places remaining: ${event.capacity - (currentBookings[key] || 0)}`;
        }
      }
    } else {
      // Se o evento estiver selecionado com um tipo diferente, verifica se a troca de tipo está dentro dos limites
      const selectedEventTypeCount = selectedEvents.filter(e => e.type === eventType).length;

      if (eventType === 'official' && selectedEventTypeCount >= MAX_OFFICIAL) {
        showPopup('Você não pode selecionar mais de 3 reuniões oficiais.');
        return;
      }
      if (eventType === 'waitlist' && selectedEventTypeCount >= MAX_WAITLIST) {
        showPopup('Você não pode selecionar mais de 2 reuniões na lista de espera.');
        return;
      }

      // Substitui o evento atual pelo novo tipo
      cell.classList.remove('selected');
      selectedEvents = selectedEvents.filter(e => !(e.date === event.date && e.timeSlot === event.timeSlot));
      currentBookings[key]--; // Reduz o número de reservas para o evento atual

      // Atualiza a seleção com o novo tipo de evento
      if ((currentBookings[key] || 0) < event.capacity) {
        cell.classList.add('selected');
        event.type = eventType;
        selectedEvents.push(event);
        currentBookings[key] = (currentBookings[key] || 0) + 1; // Aumenta o número de reservas para o evento
      } else {
        showPopup('Este evento está cheio. Não é possível adicionar mais reservas.');
        return;
      }
    }
  } else {
    // Se o evento não estiver selecionado, verifica se a quantidade de eventos selecionados do tipo especificado está dentro dos limites
    const selectedEventTypeCount = selectedEvents.filter(e => e.type === eventType).length;

    if (eventType === 'official' && selectedEventTypeCount >= MAX_OFFICIAL) {
      showPopup('Você não pode selecionar mais de 3 reuniões oficiais.');
      return;
    }
    if (eventType === 'waitlist' && selectedEventTypeCount >= MAX_WAITLIST) {
      showPopup('Você não pode selecionar mais de 2 reuniões na lista de espera.');
      return;
    }

    // Verifica se há capacidade disponível
    if ((currentBookings[key] || 0) >= event.capacity) {
      showPopup('Este evento está cheio. Não é possível adicionar mais reservas.');
      return;
    }

    // Adiciona o evento à lista de selecionados
    cell.classList.add('selected');
    event.type = eventType;
    selectedEvents.push(event);
    currentBookings[key] = (currentBookings[key] || 0) + 1; // Aumenta o número de reservas para o evento
  }

  // Atualiza o elemento do evento
  const eventElement = cell.querySelector('.event');
  if (eventElement) {
    eventElement.className = `event ${eventType} ${cell.classList.contains('selected') ? 'selected' : 'default'}`;
    // Atualiza a quantidade de lugares restantes
    const remainingPlaces = eventElement.querySelector('.remaining-places');
    if (remainingPlaces) {
      remainingPlaces.textContent = `Places remaining: ${event.capacity - (currentBookings[key] || 0)}`;
    }
  }

  // Atualiza os detalhes da reunião
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
