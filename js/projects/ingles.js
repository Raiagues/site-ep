const itemsData = [
  {
    title: 'Inglês - Módulo Iniciante',
    data: 'Início em 01/09/2024',
    description: 'O módulo iniciante tem como objetivo capacitar os participantes com o vocabulário e as habilidades básicas necessárias para compreender textos e discussões técnicas em inglês. O curso incluirá exercícios voltados para a construção e prática de frases simples e cotidianas, além de introdução ao vocabulário técnico de termos amplamente utilizados no dia a dia.',
    content: `
      - Introdução ao vocabulário técnico.
      - Construção de frases simples.
      - Compreensão e produção de textos básicos.
      - Exercícios de pronúncia e escuta.
      - Atividades de conversação.
      - Carga horária: 10 horas.
    `
  },
  {
    title: 'Inglês - Módulo Intermediário',
    data: 'Início em 15/09/2024',
    description: 'O módulo intermediário tem como objetivo expandir o vocabulário e a compreensão dos participantes. Por meio de atividades de leitura, interpretação e fala de documentos acadêmicos, o curso busca colocar os alunos em situações onde terão a oportunidade de praticar conversas cotidianas da engenharia, falar sobre ações, interpretações e opiniões, além de aplicar termos mais técnicos nas conversas.',
    content: `
      - Expansão do vocabulário técnico.
      - Leitura e interpretação de textos acadêmicos.
      - Discussão de artigos científicos.
      - Escrita de resumos e relatórios acadêmicos.
      - Conversação em situações cotidianas da engenharia.
      - Carga horária: 10 horas.
    `
  },
  {
    title: 'Inglês - Módulo Avançado',
    data: 'Início em 01/10/2024',
    description: 'O módulo avançado é voltado para alunos que já possuem um nível elevado de confiança com o idioma, ou para aqueles com nível intermediário que desejam aprimorar a prática. Este módulo é totalmente prático, com simulações de apresentações técnicas, uso de vocabulário especializado para explicar ações e atividades de maneira eficaz, além de preparação para entrevistas de emprego, elaboração de currículos e cartas de motivação em inglês.',
    content: `
      - Comunicação em entrevistas de emprego.
      - Elaboração de currículos e cartas de motivação.
      - Apresentações técnicas e orais.
      - Debate e argumentação sobre tendências atuais na engenharia e tecnologia.
      - Carga horária: 10 horas.
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

    const date = document.createElement('p');
    date.classList.add('list-date');
    date.textContent = data.data;
    item.appendChild(date);

    const briefDescription = document.createElement('p');
    briefDescription.classList.add('list-description');
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

  // Adiciona os itens ao carrossel
  itemsData.forEach((data, index) => {
    const item = createCarouselItem(data, index);
    container.appendChild(item);
  });

  // Funcionalidade do carrossel
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

  // Inicializa o carrossel
  showSlide(index);
});




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
  { date: "2024-08-10", timeSlot: "8h30-10h30", description: "Módulo Intermediário (Turma 1)", capacity: 0 },
  { date: "2024-08-11", timeSlot: "13h30-15h30", description: "Módulo Iniciante (Turma 1)", capacity: 5 },
  { date: "2024-08-11", timeSlot: "15h30-17h30", description: "Módulo Avançado (Turma 1)", capacity: 5 },
  { date: "2024-08-12", timeSlot: "8h30-10h30", description: "Módulo Intermediário (Turma 2)", capacity: 0 },
  { date: "2024-08-13", timeSlot: "8h30-10h30", description: "Módulo Intermediário (Turma 3)", capacity: 0 },
  { date: "2024-08-13", timeSlot: "17h30-19h30", description: "Módulo Iniciante (Turma 2)", capacity: 6 },
  { date: "2024-08-14", timeSlot: "8h30-10h30", description: "Módulo Avançado (Turma 1)", capacity: 0 },
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
              showPopup('Você não pode selecionar mais de 3 turmas como escolha oficiais.');
              return;
          }
          if (eventType === 'waitlist' && selectedEventTypeCount >= MAX_WAITLIST) {
              showPopup('Você não pode selecionar mais de 2 turmas na lista de espera.');
              return;
          }
          if (eventType === 'official' && (currentBookings[key] || 0) >= event.capacity) {
              showPopup('Essa turma está completo.');
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
          showPopup('Você não pode selecionar mais de 3 turmas como escolha oficiais.');
          return;
      }
      if (eventType === 'waitlist' && selectedEventTypeCount >= MAX_WAITLIST) {
          showPopup('Você não pode selecionar mais de 2 turmas na lista de espera.');
          return;
      }
      // Check if there is capacity available for official choice
      if (eventType === 'official' && (currentBookings[key] || 0) >= event.capacity) {
          showPopup('Essa turma está completo.');
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
          "2024-08-11 8h30-10h30 - Módulo Intermediário (Turma 1)",
          "2024-08-11 15h30-17h30 - Módulo Avançado (Turma 1)"
      ],
      "waitlistEvents": [
          "2024-08-12 8h30-10h30 -Módulo Intermediário (Turma 2)",
          "2024-08-14 8h30-10h30 - Módulo Avançado (Turma 2)"
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
        "2024-08-10 13h30-15h30 - Módulo Iniciante (Turma 1)",
        "2024-08-11 8h30-10h30 - Módulo Intermediário (Turma 1)",
        "2024-08-11 15h30-17h30 - Módulo Avançado (Turma 1)"
    ],
    "waitlistEvents": [
      "2024-08-13 17h30-19h30 - Módulo Iniciante (Turma 2)",
      "2024-08-12 8h30-10h30 -Módulo Intermediário (Turma 2)"
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
        "2024-08-11 8h30-10h30 - Módulo Intermediário (Turma 1)"
      ],
      "waitlistEvents": [
        "2024-08-12 8h30-10h30 - Módulo Intermediário (Turma 2)",
        "2024-08-13 8h30-10h30 - Módulo Intermediário (Turma 2)"
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
  showPopup("Sua inscrição foi realizada com sucesso!");
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
  cell.textContent = text || 'N/A'; 
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


function showPopup(message) {
  document.getElementById("popup-message").textContent = message;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}