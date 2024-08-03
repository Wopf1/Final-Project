const btn = document.querySelector(".scroll-up-btn");
const btnMode = document.querySelector(".btn-mode");
const darkLightImg = document.querySelector(".btn-mode img");
const hero = document.querySelector(".hero-section");
const body = document.querySelector("body");
const nav = document.querySelector(".navigation");
const firstSection = document.querySelector(".pictures");
const secondSection = document.querySelector(".forms");
const anchor = document.querySelectorAll("a");
const h1 = document.querySelector("h1");
const legend = document.querySelectorAll("legend");
const jungleForm = document.querySelector(".jungler");
const junglePic = document.getElementsByName("picture1");
const jungleImg = document.querySelector(".jungle");
const midForm = document.querySelector(".mid-laner");
const midPic = document.getElementsByName("picture2");
const midImg = document.querySelector(".mid");
const suppForm = document.querySelector(".supp");
const suppPic = document.getElementsByName("picture3");
const suppImg = document.querySelector(".support");
const r1 = document.querySelector(".r1");
const r2 = document.querySelector(".r2");
const r3 = document.querySelector(".r3");
const pass1 = document.querySelector(".pass1");
const pass2 = document.querySelector(".pass2");
const passform = document.querySelector(".passform");
const passtext = document.querySelector(".passtext");
const hamMenu = document.querySelector(".hamMenu");
const mobMenu = document.querySelector(".mobMenu");

const darkRay = [btnMode, btn, body, nav, firstSection];
const darkUse = (arr) => {
  arr.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
};

btn.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

btnMode.addEventListener("click", () => {
  if (darkLightImg.src.includes("dark")) {
    darkLightImg.src = "./Img/light-mode.png";
    hero.style.backgroundImage = "url(./Img/yasuo-dark.jpg)";
    secondSection.style.backgroundImage = "url(./Img/backgrounddark.webp)";
    darkUse(darkRay);
    darkUse(legend);
    darkUse(anchor);
    h1.style.color = "rgb(200, 0, 0)";
  } else {
    darkLightImg.src = "./Img/dark-mode.png";
    hero.style.backgroundImage = "url(./Img/yasuo-light.jpg)";
    secondSection.style.backgroundImage = "url(./Img/lolback.jpg)";
    darkUse(darkRay);
    darkUse(legend);
    darkUse(anchor);
    h1.style.color = "rgb(211, 17, 211)";
  }
});

jungleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let pick;
  for (champ of junglePic) {
    if (champ.checked) {
      pick = champ.value;
    }
  }
  switch (pick) {
    case "amumu":
      jungleImg.src = "./Champs/Amumu.jpg";
      break;
    case "lee-sin":
      jungleImg.src = "./Champs/LeeSin.jpg";
      break;
    case "lillia":
      jungleImg.src = "./Champs/Lillia.jpg";
      break;
    case "maokai":
      jungleImg.src = "./Champs/Maokai.jpg";
      break;
    case "nocturne":
      jungleImg.src = "./Champs/Nocturne.jpg";
      break;
    default:
      midImg.src = "./Img/lol.jpg";
      break;
  }
});

midForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let pick;
  for (champ of midPic) {
    if (champ.checked) {
      pick = champ.value;
    }
  }
  switch (pick) {
    case "ahri":
      midImg.src = "./Champs/Ahri.jpg";
      break;
    case "azir":
      midImg.src = "./Champs/Azir.jpg";
      break;
    case "cassiopeia":
      midImg.src = "./Champs/Cassiopeia.jpg";
      break;
    case "fizz":
      midImg.src = "./Champs/Fizz.jpg";
      break;
    case "kassadin":
      midImg.src = "./Champs/Kassadin.jpg";
      break;
    default:
      midImg.src = "./Img/lol.jpg";
      break;
  }
});

suppForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let pick;
  for (champ of suppPic) {
    if (champ.checked) {
      pick = champ.value;
    }
  }
  switch (pick) {
    case "bard":
      suppImg.src = "./Champs/Bard.jpg";
      break;
    case "braum":
      suppImg.src = "./Champs/Braum.jpg";
      break;
    case "janna":
      suppImg.src = "./Champs/Janna.jpg";
      break;
    case "karma":
      suppImg.src = "./Champs/Karma.jpg";
      break;
    case "nautilus":
      suppImg.src = "./Champs/Nautilus.jpg";
      break;
    default:
      midImg.src = "./Img/lol.jpg";
      break;
  }
});

r1.addEventListener("click", () => {
  jungleImg.src = "./Img/lol.jpg";
});

r2.addEventListener("click", () => {
  midImg.src = "./Img/lol.jpg";
});

r3.addEventListener("click", () => {
  suppImg.src = "./Img/lol.jpg";
});

passform.addEventListener("submit", (e) => {
  e.preventDefault();
  const password1 = pass1.value;
  const password2 = pass2.value;
  if (password1 != "" && password2 != "") {
    if (password1 === password2) {
      passtext.textContent = "Passwords matching";
      passtext.style.color = "green";
    } else {
      passtext.textContent = "Passwords not matching";
      passtext.style.color = "red";
    }
  } else {
    passtext.textContent = "Please insert your passwords";
    passtext.style.color = "black";
  }
});

hamMenu.addEventListener("click", () => {
  if (mobMenu.style.display === "none") {
    mobMenu.style.display = "block";
  } else {
    mobMenu.style.display = "none";
  }
});
