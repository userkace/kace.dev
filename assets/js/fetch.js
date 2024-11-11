'use strict';

fetch('data/clients.json')
  .then(response => response.json())
  .then(data => {
    const clientsList = document.querySelector('.clients-list');
    data.clients.forEach(client => {
      const clientItem = document.createElement('li');
      clientItem.classList.add('clients-item');
      const clientLink = document.createElement('a');
      clientLink.href = client.href;
      const clientImg = document.createElement('img');
      clientImg.classList.add('client');
      clientImg.src = client.image;
      clientImg.alt = client.alt;
      clientImg.loading = 'lazy';
      clientLink.appendChild(clientImg);
      clientItem.appendChild(clientLink);
      clientsList.appendChild(clientItem);
    });
  });

fetch('data/education.json')
  .then(response => response.json())
  .then(data => {
    const educationList = document.querySelector('#education');
    data.timeline.forEach(item => {
      const timelineItem = document.createElement('li');
      timelineItem.classList.add('timeline-item');
      const title = document.createElement('h4');
      title.classList.add('h4', 'timeline-item-title');
      title.textContent = item.title;
      const span = document.createElement('span');
      span.textContent = item.date;
      const text = document.createElement('p');
      text.classList.add('timeline-text');
      text.textContent = item.text;
      timelineItem.appendChild(title);
      timelineItem.appendChild(span);
      timelineItem.appendChild(text);
      educationList.appendChild(timelineItem);
    });
  });

fetch('data/experience.json')
  .then(response => response.json())
  .then(data => {
    const experienceList = document.querySelector('#experience');
    data.timeline.forEach(item => {
      const timelineItem = document.createElement('li');
      timelineItem.classList.add('timeline-item');
      const title = document.createElement('h4');
      title.classList.add('h4', 'timeline-item-title');
      title.textContent = item.title;
      const span = document.createElement('span');
      span.textContent = item.date;
      const text = document.createElement('p');
      text.classList.add('timeline-text');
      text.textContent = item.text;
      timelineItem.appendChild(title);
      timelineItem.appendChild(span);
      timelineItem.appendChild(text);
      experienceList.appendChild(timelineItem);
    });
  });

  fetch('data/skills.json')
  .then(response => response.json())
  .then(data => {
    const skillsSection = document.querySelector('.skill');

    Object.keys(data).forEach(category => {
      const skillsList = document.createElement('ul');
      skillsList.classList.add('skills-list', 'content-card');
      skillsList.alt = category;

      data[category].forEach(skill => {
        const listItem = document.createElement('li');
        listItem.classList.add('skills-item');

        const titleWrapper = document.createElement('div');
        titleWrapper.classList.add('title-wrapper');

        const icon = document.createElement('ion-icon');
        if (skill.src) {
          icon.setAttribute('src', skill.src);
        } else {
          icon.name = skill.icon;
        }
        icon.classList.add('ionicon-exp');
        titleWrapper.appendChild(icon);

        const name = document.createElement('h5');
        name.classList.add('h5');
        name.textContent = skill.name;
        titleWrapper.appendChild(name);

        const dataValue = document.createElement('data');
        dataValue.value = skill.value;
        dataValue.textContent = `${skill.value}%`;
        titleWrapper.appendChild(dataValue);

        const skillProgressBg = document.createElement('div');
        skillProgressBg.classList.add('skill-progress-bg');

        const skillProgressFill = document.createElement('div');
        skillProgressFill.classList.add('skill-progress-fill');
        skillProgressFill.style.width = `${skill.value}%`;
        skillProgressBg.appendChild(skillProgressFill);

        listItem.appendChild(titleWrapper);
        listItem.appendChild(skillProgressBg);
        skillsList.appendChild(listItem);
      });

      skillsSection.appendChild(skillsList);
    });
  });

fetch('data/categories.json')
  .then(response => response.json())
  .then(data => {
    const filterList = document.querySelector('.filter-list');
    const selectList = document.querySelector('.select-list');

    data.categories.forEach(category => {
      const filterItem = document.createElement('li');
      filterItem.classList.add('filter-item');
      const filterButton = document.createElement('button');

      filterButton.textContent = category.name;
      filterButton.setAttribute('data-filter-btn', '');
      filterButton.addEventListener('click', filterProjects); // Add event listener
      filterItem.appendChild(filterButton);
      filterList.appendChild(filterItem);

      const selectItem = document.createElement('li');
      selectItem.classList.add('select-item');
      const selectButton = document.createElement('button');
      selectButton.textContent = category.name;
      selectButton.setAttribute('data-select-item', '');
      selectButton.addEventListener('click', filterProjects); // Add event listener
      selectItem.appendChild(selectButton);
      selectList.appendChild(selectItem);
    });
    filterProjects();
  });

fetch('data/projects.json')
  .then(response => response.json())
  .then(data => {
    const projects = data.projects;

    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.classList.add('project-item', 'active');
      projectItem.setAttribute('data-filter-item', '');
      projectItem.setAttribute('data-category', project.category.toLowerCase());

      const projectLink = document.createElement('a');
      projectLink.href = project.link;

      const projectImg = document.createElement('figure');
      projectImg.classList.add('project-img');

      const projectIconBox = document.createElement('div');
      projectIconBox.classList.add('project-item-icon-box');

      const projectIcon = document.createElement('ion-icon');
      projectIcon.name = 'eye-outline';

      projectIconBox.appendChild(projectIcon);
      projectImg.appendChild(projectIconBox);

      const projectImgEl = document.createElement('img');
      projectImgEl.src = project.image;
      projectImgEl.alt = project.title;
      projectImgEl.loading = 'lazy';

      projectImg.appendChild(projectImgEl);
      projectLink.appendChild(projectImg);

      const projectTitle = document.createElement('h3');
      projectTitle.classList.add('project-title');
      projectTitle.textContent = project.title;

      const projectCategory = document.createElement('p');
      projectCategory.classList.add('project-category');
      projectCategory.textContent = project.category;

      projectLink.appendChild(projectTitle);
      projectLink.appendChild(projectCategory);
      projectItem.appendChild(projectLink);

      projectList.appendChild(projectItem);
    });
    filterProjects();
  });

function filterProjects() {
  const filterItems = document.querySelectorAll("[data-filter-item]");
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-select-value]");
  const selectList = document.querySelector("[data-select]");
  let lastActiveBtn = filterBtns.length > 0 ? filterBtns[0] : null;
  filterBtns[0].classList.add("active");


  [...filterBtns, ...selectItems].forEach((item) => {
    item.addEventListener("click", () => {
      if (lastActiveBtn) {
        lastActiveBtn.classList.remove("active");
      }
      item.classList.add("active");
      lastActiveBtn = item;

      const category = item.textContent.toLowerCase();
      filterItems.forEach((filterItem) => {
        if (filterItem.getAttribute("data-category") === category || category === "all") {
          filterItem.classList.add("active");
        } else {
          filterItem.classList.remove("active");
        }
      });
      selectList.classList.remove("active");
      selectValue.textContent = item.textContent;
    });
  });
}
