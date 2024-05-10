class Skills {
  constructor(skillId, skill) {
    this.skillId = skillId;
    this.skill = skill;
  }
}
class Applications {
  constructor(applicationId, applications) {
    this.applicationId = applicationId;
    this.applications = applications;
  }
}

function animeFade() {
  const title = document.getElementById("title");
  title.style.opacity = 0;

  anime({
    targets: title,
    opacity: 1,
    duration: 10000,
  });
}

const element = document.getElementById("icons");
function animeBounce() {
  element.style.position = "relative";

  anime({
    targets: element,
    translateY: [
      { value: "-50px", duration: 500, easing: "easeOutQuad" },
      { value: "0px", duration: 500, easing: "easeInQuad" },
    ],
    loop: 2,
  });
}

async function mySkills() {
  try {
    const url = await fetch("./skills.json");
    const response = await url.json();

    let languages = document.getElementById("personal-info");

    response.skills.map(function (item) {
      let skill = new Skills(item.skillId, item.skill);

      let skillItem = document.createElement("section");

      skillItem.innerHTML = skill.skill;
      languages.appendChild(skillItem);
    });

    let applications = document.getElementById("application");
    response.applications.map(function (item) {
      let application = new Applications(item.applicationId, item.application);

      let applicationItem = document.createElement("section");
      applicationItem.innerHTML = application.applications;
      applications.appendChild(applicationItem);
    });
  } catch (error) {
    console.log("error");
  }
}
animeFade();
animeBounce();

mySkills();
// import anime from "animejs/lib/anime.es.js";
// anime({});
