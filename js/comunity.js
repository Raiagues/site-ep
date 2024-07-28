const depoimentos = [
  {
      img: '../../images/team/members/1.jpg',
      name: 'Nicole Lemons',
      link: '../about/team.html#equipe',
      text: 'INCLUIR'
  },
  {
      img: '../../images/team/members/2.jpg',
      name: 'Emilly Rodrigues',
      link: '../about/team.html#equipe',
      text: 'Participar e auxiliar na construção da EP Aero sem dúvidas foi um dos pontos altos da minha graduação. Tive a oportunidade de compartilhar com novos estudantes diversos aprendizados que tive durante meus anos de estudo. Sejam aprendizados mais técnicos por meio de workshops e minicursos que conduzi, como também experiências mais pessoais de intercâmbio, estágios e da própria graduação durante os anos finais. Além de todo networking que construí graças à rede de contatos que coordenar atividades dentro da EP me proporcionou.'
  },
  {
      img: '../../images/team/members/3.jpg',
      name: 'Júlia Kerkoff',
      link: '../about/team.html#equipe',
      text: 'INCLUIR'
  }
];

function criarDepoimento({ img, name, link, text }) {
  const box = document.createElement('div');
  box.classList.add('box');
  
  const userDiv = document.createElement('div');
  userDiv.classList.add('user');
  
  const imgElement = document.createElement('img');
  imgElement.src = img;
  imgElement.alt = '';

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');
  
  const h3Element = document.createElement('h3');
  const linkElement = document.createElement('a');
  linkElement.href = link;
  linkElement.classList.add('btn-projects');
  linkElement.textContent = name;
  h3Element.appendChild(linkElement);
  
  infoDiv.appendChild(h3Element);
  
  const quoteIcon = document.createElement('i');
  quoteIcon.classList.add('fas', 'fa-quote-right');

  userDiv.appendChild(imgElement);
  userDiv.appendChild(infoDiv);
  userDiv.appendChild(quoteIcon);
  
  const textElement = document.createElement('p');
  textElement.textContent = text;
  
  box.appendChild(userDiv);
  box.appendChild(textElement);
  
  return box;
}

 function addFeedback() {
  const boxContainer = document.getElementById('box-container');
  depoimentos.forEach(depoimento => {
      const depoimentoElement = criarDepoimento(depoimento);
      boxContainer.appendChild(depoimentoElement);
  });
}

 document.addEventListener('DOMContentLoaded', addFeedback);