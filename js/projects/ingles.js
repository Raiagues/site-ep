const itemsData = [
  {
    title: 'Inglês Básico',
    data: 'Início em 01/09/2024',
    description: 'Turma voltada para iniciantes que desejam aprender os fundamentos do inglês aplicado à engenharia.',
    content: `
      - Introdução ao vocabulário técnico.
      - Construção de frases simples.
      - Compreensão de textos básicos.
      - Exercícios de pronúncia e escuta.
      - Carga horária: 10 horas.
    `
  },
  {
    title: 'Inglês Intermediário',
    data: 'Início em 15/09/2024',
    description: 'Turma para estudantes que já possuem conhecimentos básicos e desejam aprimorar suas habilidades.',
    content: `
      - Expansão do vocabulário técnico.
      - Leitura e interpretação de textos acadêmicos.
      - Redação de resumos e relatórios.
      - Conversação em situações cotidianas da engenharia.
      - Carga horária: 10 horas.
    `
  },
  {
    title: 'Inglês Avançado',
    data: 'Início em 01/10/2024',
    description: 'Turma destinada a alunos avançados que buscam se especializar no inglês acadêmico e profissional.',
    content: `
      - Comunicação em entrevistas de emprego.
      - Elaboração de currículos e cartas de motivação.
      - Discussão de artigos científicos.
      - Apresentações técnicas e orais.
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
