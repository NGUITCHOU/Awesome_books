const mobileMenu = document.getElementById('mobile_menu');

mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// create an array of objects to store card information

const projects = [
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',
  },
  {
    image: './assets/image/Snapshoot Portfolio (2).svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    description: 'An interactive gallery that showcase my project',
    githublink: 'https://github.com/codegisoft-academy-full-stack-students/codegisoft_linters',
    liveserver: 'http://127.0.0.1:5501/index.html',

  },
];

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.remove();
  }
}

// Function to handle clicks outside the modal
function outsideClick(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeModal();
    window.removeEventListener('click', outsideClick);
  }
}

// Function to open the modal with project details
function openModal(project) {
  const modal = document.createElement('div');
  modal.classList.add('modal_style');
  modal.id = 'projectModal';

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  modal.appendChild(modalContent);

  const modalImage = document.createElement('img');
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalContent.appendChild(modalImage);

  const modalTitle = document.createElement('h1');
  modalTitle.innerHTML = project.title;
  modalContent.appendChild(modalTitle);

  const modalList = document.createElement('ul');
  modalList.id = 'modalTechnologies';
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    modalList.appendChild(listItem);
  });
  modalContent.appendChild(modalList);

  const modalDescription = document.createElement('p');
  modalDescription.innerHTML = project.description;
  modalContent.appendChild(modalDescription);

  const modalLinks = document.createElement('div');
  modalLinks.classList.add('modal_links');

  const githubLink = document.createElement('a');
  githubLink.href = project.githubLink;
  githubLink.target = '_blank';
  githubLink.textContent = 'GitHub Repo';
  githubLink.classList.add('button');
  modalLinks.appendChild(githubLink);

  const liveServer = document.createElement('a');
  liveServer.href = project.liveServer;
  liveServer.target = '_blank';
  liveServer.textContent = 'Live Site';
  liveServer.classList.add('button');
  modalLinks.appendChild(liveServer);

  const closeButton = document.createElement('span');
  closeButton.classList.add('close_btn');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', closeModal);
  modalContent.appendChild(closeButton);

  modalContent.appendChild(modalLinks);
  document.body.appendChild(modal);

  window.addEventListener('click', outsideClick);
}

// Function to create a project card
function createProjectCard(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');

  const cardImage = document.createElement('img');
  cardImage.src = project.image;
  cardImage.alt = 'Card Image';
  card.appendChild(cardImage);

  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);

  const cardList = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);

  const cardBtn = document.createElement('button');
  cardBtn.type = 'button';
  cardBtn.innerHTML = 'See Project';
  card.appendChild(cardBtn);
  cardBtn.addEventListener('click', () => openModal(project));

  return card;
}

// Function to insert the project cards into the container
function insertCards() {
  const projectsContainer = document.getElementById('projects_cards');
  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', insertCards);
