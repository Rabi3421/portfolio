const skills = [
    {
        name: "HTML",
        icon_url : "https://img.icons8.com/color/50/000000/html-5--v1.png",
        category : ["all", "frontend"]
    },
    {
        name: "CSS",
        icon_url : "https://img.icons8.com/color/50/000000/css3.png",
        category : ["all", "frontend"]
    },
    {
        name: "JavaScript",
        icon_url : "https://img.icons8.com/color/50/000000/javascript--v2.png",
        category : ["all", "frontend"]
    },
    {
        name: "BootStrap",
        icon_url : "./images/bootstrap.png",
        category : ["all", "frontend"]
    },
    {
        name: "Nodejs",
        icon_url : "./images/nodejs.png",
        category : ["all", "backend"]
    },
    {
        name: "Express Framework",
        icon_url : "./images/expressjs.png",
        category : ["all", "backend"]
    },
    {
        name: "MongoDB",
        icon_url : "./images/mongodb.png",
        category : ["all", "backend"]
    },
    
    {
        name: "React",
        icon_url : "./images/react.png",
        category : ["all", "frontend"]
    },
    {
        name: "redux",
        icon_url : "./images/redux.png",
        category : ["all", "frontend"]
    },
     {
        name: "Postman",
        icon_url : "./images/postman.png",
        category : ["all", "backend"]
    },
    {
        name: "Netlify",
        icon_url : "./images/netlify.png",
        category : ["all"]
    },
    {
        name: "Heroku",
        icon_url : "./images/heroku.png",
        category : ["all"]
    },
    {
        name: "Vercel",
        icon_url : "./images/vercel.png",
        category : ["all"]
    }
]

let myTechnicalSkills = document.getElementById("myTechnicalSkills");
let all_filter_btn = document.querySelector(".all_filter_btn")
let frontend_filter_btn = document.querySelector(".frontend_filter_btn");
let backend_filter_btn = document.querySelector(".backend_filter_btn");
all_filter_btn.classList.add("active_tech_skills")
all_filter_btn.addEventListener("click", () => {
    filterSkills("all");
    all_filter_btn.classList.add("active_tech_skills")
    frontend_filter_btn.classList.remove("active_tech_skills")
    backend_filter_btn.classList.remove("active_tech_skills")

})

frontend_filter_btn.addEventListener("click", () => {
    filterSkills("frontend")
    all_filter_btn.classList.remove("active_tech_skills")
    frontend_filter_btn.classList.add("active_tech_skills")
    backend_filter_btn.classList.remove("active_tech_skills")
})
backend_filter_btn.addEventListener("click", () => {
    filterSkills("backend");
    all_filter_btn.classList.remove("active_tech_skills")
    frontend_filter_btn.classList.remove("active_tech_skills")
    backend_filter_btn.classList.add("active_tech_skills")
})

function displaySkills(skills) {
    myTechnicalSkills.innerHTML = null;
    skills.forEach((skill) => {
        let itemContainer = document.createElement("div");
        itemContainer.setAttribute("class", "service-item padd-15");
        itemContainer.innerHTML = `<div class="service-item-inner">
        <div class="">
          <img src=${skill.icon_url} width="48px" height="48px"/>
        </div>
        <h4>${skill.name}</h4>
      </div>`

      myTechnicalSkills.append(itemContainer)
    })
}

function filterSkills(basis) {
    let filtered = skills.filter((el) => {
        return el.category.includes(basis)
    })
    displaySkills(filtered)
}


displaySkills(skills)