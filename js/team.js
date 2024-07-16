const teamMembers = [
  {
    name: "Nicole Lemons",
    title: "Ex Presidente",
          description: "Estudante do 10º semestre de Engenharia Aeroespacial na UFSM e técnica em Química pelo IFSUL. Co-fundadora e presidente da EP Aero em 2022. Realizou iniciação científica no ITA na área de falhas de comunicação de satélites em formação em voo e no IMPA em abordagens analíticas de equações diferenciais aplicadas a vibrações mecânicas. Possui ampla experiência em cálculos analíticos, graças às participações e premiações de diversas olimpíadas matemáticas. Além disso, possui experiência com projetos conceituais de aeronaves por meio de atividades acadêmicas.",
    avatarUrl: "../../images/team/members/1",
    socialLinks: [
      { href: "https://www.linkedin.com/in/nicole-lemons-718b8a190/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "https://www.linkedin.com/in/nicole-lemons-718b8a190/", imgSrc: "../../images/team/icons/github.svg" },
      { href: "http://lattes.cnpq.br/3513939164716666", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  },
  {
    name: "Emilly Rodrigues",
    title: "Ex Vice Presidente",
    description: "Estudante do 8º semestre de Engenharia Aeroespacial na UFSM, com duplo diploma em Sistemas Embarcados pelo INP Grenoble, na França, com financiamento da bolsa BRAFITEC. Foi co-fundadora e vice presidente da EP Aero no ano de 2022. Realizou iniciação científica no ITA na área de técnicas de filtragem para determinação de órbita de satélites em formação em voo. Possui uma vasta experiência adquirida por meio de estágios e projetos acadêmicos com controle de satélites, programação em microcontroladores e integração de hardware e software.",
    avatarUrl: "../../images/team/members/2",
    socialLinks: [
      { href: "https://www.linkedin.com/in/emilly-raiane-/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "https://github.com/Raiagues", imgSrc: "../../images/team/icons/github.svg" },
      { href: "http://lattes.cnpq.br/8320369171757463", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  },
  {
    name: "Julia Kerkoff",
    title: "Ex Diretora de Marketing",
    description: "Estudante do 8º semestre de Engenharia Aeroespacial na UFSM, com duplo diploma em Sistemas Embarcados pelo INP Grenoble, na França, com financiamento da bolsa BRAFITEC, além de formação técnica em administração pelo IFES. Foi diretora de marketing da EP Aero no ano de 2022 e 2023. Realizou diversas atividades na área de projeto aeronáutico, com foco em elétrica e programação, e possui experiência em tratamento de dados através de atividades de pesquisa.",
    avatarUrl: "../../images/team/members/3",
    socialLinks: [
      { href: "https://www.linkedin.com/in/julia-kerkoff/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "", imgSrc: "../../images/team/icons/github.svg" },
      { href: "http://lattes.cnpq.br/6654170089542818", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  },
  {
    name: "Érica Alves",
    title: "Presidente",
    description: "Estudante do 3º semestre de Engenharia Aeroespacial na UFSM. Atual presidente da EP Aero, além de principal responsável pelo projeto de minifoguetes de baixo custo. Possui vasta experiência com gestão de projetos e de pessoas, captação de recursos e estabelecimento de parcerias, adquirida por meio dos cargos de liderança na EP Aero e em atividades acadêmicas.",
    avatarUrl: "../../images/team/members/4",
    socialLinks: [
      { href: "https://www.linkedin.com/in/%C3%A9rica-m-alves/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "", imgSrc: "../../images/team/icons/github.svg" },
      { href: "", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  },
  {
    name: "Kays Abur",
    title: "Vice Presidente",
    description: "Estudante do 8º semestre de Engenharia Aeroespacial na UFSM. Atual vice presidente da EP Aero. Possui experiência na área de mecânica dos fluidos e aerodinâmica por meio de projeto de pesquisa em analise biomimética em perfis aerodinâmicos pelo GMFA, além de experiência prática como membro da equipe de competição Fórmula UFSM no subsistema de aerodinâmica. ",
    avatarUrl: "../../images/team/members/5",
    socialLinks: [
      { href: "https://www.linkedin.com/in/kaysabur/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "", imgSrc: "../../images/team/icons/github.svg" },
      { href: "http://lattes.cnpq.br/0970370846753478", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  } 
];

function createAvatarCSS(member) {
  // Extract the index from the avatarUrl
  const index = member.avatarUrl.match(/(\d+)$/)[0];
  
  const style = document.createElement('style');
  style.innerHTML = `
    .card-avatar${index} {
      --size: 60px;
      background: url(${member.avatarUrl}.jpg);
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      transition: transform .2s ease;
      margin-bottom: 1rem;
    }
  `;
  document.head.appendChild(style);
}

function createCard(member) {
  createAvatarCSS(member);
  // TODO: implementar uma forma de comprimir a imagem pra 9kb e a resolução em pixel pra 60x60 
  // Atualmente isso é feito manualmente por https://www.simpleimageresizer.com/resize-image-to-10-kb

  
  // Extract the index from the avatarUrl
  const index = member.avatarUrl.match(/(\d+)$/)[0];
  
  const card = document.createElement('div');
  card.className = 'card';

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';

  const avatar = document.createElement('div');
  avatar.className = `card-avatar${index}`;

  const name = document.createElement('h3');
  name.textContent = member.name;

  const title = document.createElement('p');
  title.textContent = member.title;

  cardInfo.appendChild(avatar);
  cardInfo.appendChild(name);
  cardInfo.appendChild(title);

  const description = document.createElement('p');
  description.textContent = member.description;
  description.className = 'card-description';
  // description.style.display = 'none';
  cardInfo.appendChild(description);

  const cvLink = document.createElement('a');
  cvLink.href = member.cvLink;
  cvLink.textContent = 'Currículo';
  cvLink.className = 'btn-3 card-cv-link'
  // cvLink.style.display = 'none'; 
  cardInfo.appendChild(cvLink);

  const socialList = document.createElement('ul');
  socialList.className = 'card-social';

  member.socialLinks.forEach(link => {
    const listItem = document.createElement('li');
    listItem.className = 'card-social__item';

    const refer = document.createElement('a');
    refer.href = link.href;

    const img = document.createElement('img');
    img.src = link.imgSrc;
    img.alt = '';

    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });

    refer.appendChild(img);
    listItem.appendChild(refer);
    socialList.appendChild(listItem);
  });
 
  card.appendChild(cardInfo);
  card.appendChild(socialList);

  // card.addEventListener('mouseover', () => {
  //   if (member.description) {
  //     card.querySelector('.card-description').style.display = 'block';
  //     card.querySelector('.card-cv-link').style.display = 'block';
  //   }
  // });

  // card.addEventListener('mouseout', () => {
  // if (member.description) {
  //   card.querySelector('.card-description').style.display = 'none';
  //   card.querySelector('.card-cv-link').style.display = 'none';
  // }
  // });

  return card;
}

function renderCards() {
  const container = document.getElementById('cards-container');
  
  // Create staff and members divs
  const staffDiv = document.createElement('div');
  staffDiv.className = 'staff';

  const membersDiv = document.createElement('div');
  membersDiv.className = 'members';

  // Separate leaders and members
  const leaders = teamMembers.filter(member => member.title.toLowerCase() === 'presidente' || member.title.toLowerCase() === 'vice presidente');
  const members = teamMembers.filter(member => member.title.toLowerCase() !== 'presidente' && member.title.toLowerCase() !== 'vice presidente');

  // Add leaders to the staff div
  leaders.forEach((member, index) => {
    const card = createCard(member, index + 1);
    staffDiv.appendChild(card);
  });

  // Add members to the members div
  members.forEach((member, index) => {
    const card = createCard(member, leaders.length + index + 1);
    membersDiv.appendChild(card);
  });

  // Append staff and members divs to the container
  container.appendChild(staffDiv);
  container.appendChild(membersDiv);
}

document.addEventListener('DOMContentLoaded', renderCards);


document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.classList.add('card-hover');
    });

    card.addEventListener('mouseout', () => {
      card.classList.remove('card-hover');
    });
  });
});