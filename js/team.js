const teamMembers = [
  {
    name: "Nicole Lemons",
    title: "Presidente",
    description: "test",
    avatarUrl: "../../images/team/members/1",
    socialLinks: [
      { href: "https://www.linkedin.com/in/nicole-lemons-718b8a190/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "https://www.linkedin.com/in/nicole-lemons-718b8a190/", imgSrc: "../../images/team/icons/github.svg" },
      { href: "http://lattes.cnpq.br/3513939164716666", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  },
  {
    name: "Emilly Rodrigues",
    title: "Vice Presidente",
    description: "test",
    avatarUrl: "../../images/team/members/2",
    socialLinks: [
      { href: "https://www.linkedin.com/in/emilly-raiane-/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "https://github.com/Raiagues", imgSrc: "../../images/team/icons/github.svg" },
      { href: "http://lattes.cnpq.br/8320369171757463", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  },
  {
    name: "Julia Kerkoff",
    title: "Diretora de Marketing",
    description: "test",
    avatarUrl: "../../images/team/members/3",
    socialLinks: [
      { href: "https://www.linkedin.com/in/julia-kerkoff/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "", imgSrc: "../../images/team/icons/github.svg" },
      { href: "http://lattes.cnpq.br/6654170089542818", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  },
  {
    name: "Júllia Azeredo",
    title: "Diretora de Relações Externas",
    description: "test",
    avatarUrl: "../../images/team/members/4",
    socialLinks: [
      { href: "https://www.linkedin.com/in/j%C3%BAllia-azeredo-7861311b8/", imgSrc: "../../images/team/icons/linkedin.svg" },
      { href: "", imgSrc: "../../images/team/icons/github.svg" },
      { href: "http://lattes.cnpq.br/6797412403277384", imgSrc: "../../images/team/icons/lattes.svg" }
    ]
  }
];

function createAvatarCSS(member, index) {
  const style = document.createElement('style');
  style.innerHTML = `
    .card-avatar${index} {
      --size: 60px;
      background:  url(../../images/team/members/${index}.jpg);
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      transition: transform .2s ease;
      margin-bottom: 1rem;
    }
  `;
  document.head.appendChild(style);
}

function createCard(member, index) {
  createAvatarCSS(member, index);
  
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
  description.style.display = 'none';
  cardInfo.appendChild(description);

  const cvLink = document.createElement('a');
  cvLink.href = member.cvLink;
  cvLink.textContent = 'Ver CV';
  cvLink.className = 'card-cv-link';
  cvLink.style.display = 'none'; 
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

  card.addEventListener('mouseover', () => {
    if (member.description) {
      card.querySelector('.card-description').style.display = 'block';
      card.querySelector('.card-cv-link').style.display = 'block';
    }
  });

  card.addEventListener('mouseout', () => {
  if (member.description) {
    card.querySelector('.card-description').style.display = 'none';
    card.querySelector('.card-cv-link').style.display = 'none';
  }
  });

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