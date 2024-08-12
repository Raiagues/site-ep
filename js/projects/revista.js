
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



const itemsData = [
  {
    title: 'Primeira Edição',
    description: 'Nesta edição, destacamos a chegada do primeiro avião para o hangar recém-construído no campus da UFSM: um caça AMX A-1, doado pela Força Aérea Brasileira (FAB). A aeronave servirá como material de estudo para alunos de do curso de Engenharia Aeroespacial. Além disso, incluímos uma entrevista com Augusto Morcelli, aluno da segunda turma de Engenharia Aeroespacial da UFSM. Também abordamos os grupos de pesquisa, as ações de voluntariado e os projetos da EP AERO, entre outras novidades.',
    link: '../../documents/revistas/1.png',
    date: '2024-06-26' 
  },
  {
    title: 'x Edição',
    description: 'Resumo',
    link: '../../documents/revistas/1.png',
    date: '2024-05-15'
  },
  {
    title: 'x Edição',
    description: 'Resumo',
    link: '../../documents/revistas/1.png',
    date: '2024-04-22'
  },
  {
    title: 'x Edição',
    description: 'Resumo',
    link: '../../documents/revistas/1.png',
    date: '2024-03-10'
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.carousel-container');

  // Sort items by date (oldest first)
  itemsData.sort((a, b) => new Date(a.date) - new Date(b.date));

  function formatDate(dateStr) {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', options);
  }

  function createCarouselItem(data) {
    const item = document.createElement('div');
    item.classList.add('carousel-item');

    // Create and append the title
    const title = document.createElement('h2');
    title.textContent = data.title;
    item.appendChild(title);
    
    // Create and append the date
    const date = document.createElement('h3');
    date.textContent = `Publicado em: ${formatDate(data.date)}`;
    item.appendChild(date);
   
    // Create and append the description
    const description = document.createElement('p');
    description.textContent = data.description;
    item.appendChild(description);
  
    // Create and append the link
    const link = document.createElement('a');
    link.href = data.link;
    link.classList.add('btn-read');
    link.textContent = 'Acesse';
    item.appendChild(link);

    return item;
  }

  // Add items dynamically
  itemsData.forEach(data => {
    const item = createCarouselItem(data);
    container.appendChild(item);
  });

  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  const itemMargin = parseInt(window.getComputedStyle(document.querySelector('.carousel-item')).marginLeft, 10);
  const visibleItems = Math.floor(container.parentElement.offsetWidth / (itemWidth + itemMargin * 2));

  let index = items.length - 1; // Start with the most recent item

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

  // Initialize the carousel at the leftmost item (oldest)
  showSlide(index);
});
