const Projects = [
    {
      name: "BobbiBrown",
      about:
        "BobbiBrown providing branded cosmetics products online, makeup kit online. In this project, I was leading my team and majorly worked on Home page, Product page, Signin functionality, Cart page, Wishlist and Payment page.",
      img: "images/Bobbibrown.png",
      gitrepo: "https://github.com/Rabi3421/BobbiBrown",
      tech_stack: "HTML | CSS | JAVASCRIPT",
      project_link: "https://anshulkumaryadav.github.io/BobbiBrown/",
      project_type: "Team Project",
      category: ["all", "frontend"],
    },
  
    {
      name: "Calculator",
      about: "A calculator website to calculate mathematical operation in tis website, This website is build by using reactJs, It is a solo project done by me, Was responsible for building end to end functionality, This app was made by using react framework",
      img: "images/calculator.jpg",
      gitrepo: "https://github.com/Rabi3421/calculator_react",
      tech_stack: "  React  | React-Redux | Chakra UI |",
      tech_stackicons: [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
      ],
      project_link: "https://calculator-rabi.netlify.app/",
      project_type: "Team Project",
      category: ["all", "frontend"],
    },
    {
      name: "The Hindu",
      about:
        " This is a clone of The Hindu News website build by using Html Css and JavaScript. It is a solo project done by me also responsoble for building end to end functionality",
      img: "images/news.jpg",
      gitrepo: "https://github.com/Rabi3421/clone_of_The_Hindu",
      tech_stack: "HTML | CSS | JAVASCRIPT ",
      tech_stackicons: [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
      ],
      project_link: "https://ephemeral-crumble-cd4716.netlify.app/",
      project_type: "Individual Project",
      category: ["all", "frontend"],
    },
    {
      name: "FabBag",
      about:
        "This website is a clone of FabBag website.You can buy subscription of our website in which  will get free cusmetics.Was responsible for building login and signup as well as subscribe page.",
      img: "images/FabBag.jpg",
      gitrepo:
        "https://github.com/Rabi3421/fab_bag_clone",
      video: "",
      tech_stack: "HTML | CSS | JAVASCRIPT ",
      tech_stackicons: [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      ],
      project_link: "https://mdnasirdmt.github.io/fab-bag-clone-again/",
      project_type: "Individual Project",
      category: ["all", "html", "frontend"],
    },
    {
      name: "Urban Company",
      about:
        "Urban Company website provides all kinds of home services.Here you can get salon related services also. Was resposible for building product page and cart page. We made this website by using react framework.",
      img: "images/urbancompany.png",
      gitrepo:
        "https://github.com/Rabi3421/tense-visitor-349",
      video: "",
      tech_stack: "  React  | React-Redux | Chakra UI |",
      tech_stackicons: [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      ],
      project_link: "https://urbancompanyclone.vercel.app/",
      project_type: "Individual Project",
      category: ["all", "html", "frontend"],
    },
  ];
  
  let projects__container = document.getElementById("projects--container");
  
  let all_projects = document.querySelector(".all_projects");
  
  let backend_projects = document.querySelector(".backend_projects");
  // let other_projects = document.querySelector(".other_projects");
  let frontend_projects = document.querySelector(".frontend_projects");
  all_projects.classList.add("active_tech_project");
  
  all_projects.addEventListener("click", () => {
    filterProjects("all");
    all_projects.classList.add("active_tech_project");
    react_projects.classList.remove("active_tech_project");
    backend_projects.classList.remove("active_tech_project");
    // other_projects.classList.remove("active_tech_project")
    frontend_projects.classList.remove("active_tech_project");
  });
  backend_projects.addEventListener("click", () => {
    filterProjects("backend");
    all_projects.classList.remove("active_tech_project");
    react_projects.classList.remove("active_tech_project");
    backend_projects.classList.add("active_tech_project");
    // other_projects.classList.remove("active_tech_project")
    frontend_projects.classList.remove("active_tech_project");
  });
  
  frontend_projects.addEventListener("click", () => {
    filterProjects("frontend");
    all_projects.classList.remove("active_tech_project");
    react_projects.classList.remove("active_tech_project");
    backend_projects.classList.remove("active_tech_project");
    // other_projects.classList.remove("active_tech_project")
    frontend_projects.classList.add("active_tech_project");
  });
  
  function filterProjects(basis) {
    let filtered = Projects.filter((el) => {
      return el.category.includes(basis);
    });
    displayProjectData(filtered);
  }
  
  function displayProjectData(Projects) {
    projects__container.innerHTML = null;
    Projects.reverse().forEach((pro) => {
      let main = document.createElement("div");
      main.setAttribute("class", "portfolio-item padd-15");
      main.innerHTML = `
        <div class="portfolio-item-inner shadow-dark">
        <div class="portfolio-img">
          <img src=${pro.img} alt="">
          <h3 class="project-name">${pro.name}</h3>
          <h4 class="project-name project__about">${pro.about}</h4>
          <div class="navigate_ar">
          <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
          <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
          </div>
          <div class="project_tech_box">
          <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack} 
          </div>
          
        </div>
      </div>
        `;
      projects__container.append(main);
    });
  }
  
  displayProjectData(Projects);
  