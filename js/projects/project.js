const projetos = [
  {
    img: 'images/projects/icons/s-3.png',
    title: 'Minifoguetes',
    description: 'Realizamos workshops sobre minifoguetes em escolas públicas da região, onde apresentamos princípios básicos de propulsão, aerodinâmica e construção de foguetes, além de auxiliar os alunos construírem e lançarem seus próprios minifoguetes.',
    link: 'pages/projetos/minifoguetes.html'
  },
  {
    img: 'images/projects/icons/s-2.png',
    title: 'Revista Acadêmica',
    description: 'Publicamos revistas acadêmicas periódicas contendo notícias do setor aeroespacial, trabalhos realizados pelos alunos, apresentações em congressos, bem como os projetos de pesquisa, ensino e extensão da UFSM.',
    link: 'pages/projetos/revista.html'
  },
  {
    img: 'images/projects/icons/s-4.png',
    title: 'Minicursos',
    description: 'Organizamos semanas de minicursos gratuitos sobre os principais softwares e ferramentas utilizados na engenharia aeroespacial.',
    link: 'pages/projetos/minicursos.html'
  },
  {
    img: 'images/projects/icons/s-6.png',
    title: 'Inglês Acadêmico',
    description: 'Desenvolvemos minicursos, wokshops, aulas de conversação e atividades em inglês com foco no contexto acadêmico e profissional, preparando alunos par aprocessos seletivos e entrevistas em inglês.',
    link: 'pages/projetos/ingles.html'
  },
  // {
  //   img: 'images/s-1.png',
  //   title: 'Apostilas Interativas',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //   link: 'pages/projetos/apostilas.html'
  // },
  // {  
  //   img: 'images/s-8.png',
  //   title: 'Workshops',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //   link: 'pages/projetos/workshops.html'
  // },
  // {
  //   img: 'images/s-7.png',
  //   title: 'Visitas Técnicas',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //   link: 'pages/projetos/visitas.html'
  // }
];

function createProject() {
  const container = document.getElementById('projects-container');

  const section = document.createElement('section');
  section.classList.add('projetos');
  section.id = 'projetos';

  const heading = document.createElement('h1');
  heading.classList.add('heading');
  heading.textContent = 'Nossos projetos';
  section.appendChild(heading);

  const boxContainer = document.createElement('div');
  boxContainer.classList.add('box-container');

  projetos.forEach(projeto => {
    const box = document.createElement('div');
    box.classList.add('box');

    const img = document.createElement('img');
    img.src = projeto.img;
    img.alt = projeto.title;

    const title = document.createElement('h3');
    title.textContent = projeto.title;

    const description = document.createElement('p');
    description.textContent = projeto.description;

    const link = document.createElement('a');
    link.href = projeto.link;
    link.classList.add('btn');
    link.textContent = 'Leia Mais';

    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(description);
    box.appendChild(link);

    boxContainer.appendChild(box);
  });

  section.appendChild(boxContainer);

  container.appendChild(section);
}

document.addEventListener('DOMContentLoaded', createProject);