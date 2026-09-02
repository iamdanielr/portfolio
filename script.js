const button = document.querySelector(".btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const themeSwitch = document.querySelector(".theme-switch");
const languageSelect = document.querySelector(".language-select");
const darkModeLabel = document.querySelector(".dark-mode-label");
const languageLabel = document.querySelector(".language-label");
const menuLabel = document.querySelector(".menu-label");
const navProjects = document.querySelector(".nav-projects");
const navSettings = document.querySelector(".nav-settings");
const navContact = document.querySelector(".nav-contact");
const navAbout = document.querySelector(".nav-about");
const contactLabel = document.querySelector(".contact-label");
const contactEmail = document.querySelector(".contact-email");
const contactPhone = document.querySelector(".contact-phone");

const translations = {
  darkMode: {
    no: "Mørk modus",
    en: "Dark Mode"
  },

  language: {
    no: "Språk",
    en: "Language"
  },

  menu: {
    no: "Meny",
    en: "Menu"
  },

  projects: {
    no: "Prosjekter",
    en: "Projects"
  },

  settings: {
    no: "Innstillinger",
    en: "Settings"
  },

  contact: {
    no: "Kontakt",
    en: "Contact"
  },

  aboutMe: {
    no: "Om meg",
    en: "About me"
  },

  aboutTitle: {
    no: "Om meg",
    en: "About me"
  },

  aboutText: {
    no: `Jeg er 22 år gammel.<br>
    Liker gaming, fotball<br>
    og har en drøm om å lære å programmere og bli noe innen det.<br>
    Liverpool er fotballklubben jeg heier på.<br>
    Jeg spiller for det meste på PC, FIFA, CS:GO, og noen andre spill.<br>`,

    en: `I am 22 years old.<br>
    I like gaming and football.<br>
    I have a dream of learning programming and building a career in it.<br>
    Liverpool is the football club I support.<br>
    I mostly play games on PC, FIFA, CS:GO, and some other games.<br>`
  },

  achievementsTitle: {
    no: "Prestasjoner",
    en: "Achievements"
  },

  achievement1: {
    no: "Jeg fikk min første jobb som 17-åring",
    en: "I got my first job when I was 17"
  },

  achievement2: {
    no: "Jeg fikk fast jobbkontrakt hos Møller Medvind av statsministeren",
    en: "I got a permanent job contract at Møller Medvind from the Prime Minister"
  },

  achievement3: {
    no: "Fullførte folkeskole 2025/26",
    en: "Completed primary school in 2025/26"
  },

  interestsTitle: {
    no: "Interesser",
    en: "Interests"
  },

  interestsText: {
    no: `Jeg interesserer meg for gaming, fotball, programmering og TV-serier.<br>
    Jeg har en drøm om å lære å programmere og bli noe innen det. Jeg lærer Python og JavaScript.<br>
    Jeg liker å spille fotball. Spilte mye når jeg var yngre og jeg heier på Liverpool.<br>
    Jeg liker å game. Spiller for det meste på PC, der går det mest i FIFA, CS:GO, og noen ganger andre spill.<br>
    Jeg liker å se på TV-serier. Mine favoritter er One Tree Hill, The O.C. og Friends.<br>`,

    en: `I am interested in gaming, football, programming, and TV shows.<br>
    I have a dream of learning programming and building a career in it. I am learning Python and JavaScript.<br>
    I like playing football. I played a lot when I was younger, and I support Liverpool.<br>
    I like gaming. I mostly play on PC, mainly FIFA, CS:GO, and sometimes other games.<br>
    I like watching TV shows. My favorites are One Tree Hill, The O.C., and Friends.<br>`
  },

  jobsTitle: {
    no: "Jobber",
    en: "Work experience"
  },

  jobsText: {
    no: `Jeg har jobbet i omtrent 5 år hos Møller Medvind, et klargjøringssenter,
    hvor jeg har klargjort biler og deltatt i coating-teamet,
    samt bidratt i transportteamet.<br>`,

    en: `I have worked for approximately 5 years at Møller Medvind, a vehicle preparation center,
    where I have prepared cars, been part of the coating team,
    and also contributed to the transport team.<br>`
  },
  contact: { no: "Kontakt", en: "Contact" },
  aboutMe: { no: "Om meg", en: "About me" },
  contactLabel: { no: "Kontakt", en: "Contact" },
  sendEmail: { no: "✉️ Send e-post", en: "✉️ Send email" },
  callPhone: { no: "📞 Ring", en: "📞 Call" }
};

if (button && dropdownMenu) {
  button.addEventListener("click", function () {
    if (dropdownMenu.style.display === "flex") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "flex";
    }
  });
}

if (themeSwitch) {
  themeSwitch.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "true");
    } else {
      localStorage.setItem("darkMode", "false");
    }
  });
}

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");

  if (themeSwitch) {
    themeSwitch.checked = true;
  }
}

function updateMenuText() {
  const lang = localStorage.getItem("language") || "no";

  if (menuLabel) {
    menuLabel.textContent = translations.menu[lang];
  }

  if (navProjects) {
    navProjects.textContent = translations.projects[lang];
  }

  if (navSettings) {
    navSettings.textContent = translations.settings[lang];
  }

  if (navContact) {
    navContact.textContent = translations.contact[lang];
  }

  if (navAbout) {
    navAbout.textContent = translations.aboutMe[lang];
  }
  if (contactLabel) contactLabel.textContent = translations.contactLabel[lang];
  if (contactEmail) contactEmail.textContent = translations.sendEmail[lang];
  if (contactPhone) contactPhone.textContent = translations.callPhone[lang];
}

function updateIndexText() {
  const lang = localStorage.getItem("language") || "no";

  const aboutTitle = document.querySelector(".about-title");
  const aboutText = document.querySelector(".about-text");

  const achievementsTitle = document.querySelector(".achievements-title");
  const achievement1 = document.querySelector(".achievement-1");
  const achievement2 = document.querySelector(".achievement-2");
  const achievement3 = document.querySelector(".achievement-3");

  const interestsTitle = document.querySelector(".interests-title");
  const interestsText = document.querySelector(".interests-text");

  const jobsTitle = document.querySelector(".jobs-title");
  const jobsText = document.querySelector(".jobs-text");

  if (aboutTitle) {
    aboutTitle.textContent = translations.aboutTitle[lang];
  }

  if (aboutText) {
    aboutText.innerHTML = translations.aboutText[lang];
  }

  if (achievementsTitle) {
    achievementsTitle.textContent = translations.achievementsTitle[lang];
  }

  if (achievement1) {
    achievement1.textContent = translations.achievement1[lang];
  }

  if (achievement2) {
    achievement2.textContent = translations.achievement2[lang];
  }

  if (achievement3) {
    achievement3.textContent = translations.achievement3[lang];
  }

  if (interestsTitle) {
    interestsTitle.textContent = translations.interestsTitle[lang];
  }

  if (interestsText) {
    interestsText.innerHTML = translations.interestsText[lang];
  }

  if (jobsTitle) {
    jobsTitle.textContent = translations.jobsTitle[lang];
  }

  if (jobsText) {
    jobsText.innerHTML = translations.jobsText[lang];
  }
}

function updateLanguageText() {
  const lang = languageSelect.value;

  localStorage.setItem("language", lang);

  if (darkModeLabel) {
    darkModeLabel.textContent = translations.darkMode[lang];
  }

  if (languageLabel) {
    languageLabel.textContent = translations.language[lang];
  }

  updateMenuText();
  updateIndexText();
}

if (languageSelect) {
  const savedLanguage = localStorage.getItem("language") || "no";

  languageSelect.value = savedLanguage;

  languageSelect.addEventListener("change", updateLanguageText);

  updateLanguageText();
} else {
  updateMenuText();
  updateIndexText();
}






// =========================
// KONTAKTMENY
// =========================

function toggleContact() {

  const menu = document.getElementById("contactMenu");

  if (!menu) {
    return;
  }

  menu.classList.toggle("show");

}


// =========================
// NÅR SIDEN KOMMER TILBAKE
// =========================

window.addEventListener("pageshow", function () {

  const menu = document.getElementById("contactMenu");

  if (menu) {

    menu.classList.remove("show");

  }

});