import reactIcon from "./assets/logos/reactIcon.png";
import reactIcon2x from "./assets/logos/reactIcon2x.png";
import nodeIcon from "./assets/logos/nodeIcon.png";
import nodeIcon2x from "./assets/logos/nodeIcon2x.png";
import email from "./assets/logos/mail.svg";
import github from "./assets/logos/github.svg";
import linkedin from "./assets/logos/linkedin.svg";
import studioPhoto from "./assets/images/studioPhoto.png";
import mysterium from "./assets/images/mysterium.png";
// import godsAndGold from "./assets/images/godsAndGold.png";
import portfolio from "./assets/images/portfolio.png";
import lerevegourmand from "./assets/images/lerevegourmand.png";

export const cardArray = [
  {
    color: "#4C40F7",
    src: reactIcon,
    srcSet: `${reactIcon} 1x, ${reactIcon2x} 2x`,
    alt: "Logo Front",
    title: "Front",
    language: "React et JavaScript",
    skills: [
      "Création de class et functional components",
      "Utilisation des hooks: useState, useEffect, useMemo, useContext",
      "Utilisation des librairies : styled-components, headless ui, tailwind",
      "Création d'un store avec la librairie Redux",
      "Intégration en HTML et CSS",
    ],
  },
  {
    color: "#9D67F8",
    src: nodeIcon,
    srcSet: `${nodeIcon} 1x, ${nodeIcon2x} 2x`,
    alt: "Logo Back",
    title: "Back",
    language: "Node.js et Express",
    skills: [
      "Création d'un serveur avec Express",
      "Création d'une base de données en SQL avec MySQL",
      "Création d'une API REST",
      "Utilisation de différents outils comme Workbench et Postman",
      "Utilisation de nodemon",
    ],
  },
];

export const projectArray = [
  {
    type: "Web",
    name: "Le Rêve Gourmand",
    src: lerevegourmand,
    alt: 'Représentation du projet "Le Rêve Gourmand"',
    description:
      'Conception du site internet pour le food truck "Le Rêve Gourmand"',
    tools: "React JS, Styled-components, Figma",
    url: "https://lerevegourmand.fr/",
  },
  {
    type: "Web",
    name: "Portfolio",
    src: portfolio,
    alt: 'Représentation du projet "Portfolio"',
    description:
      "Développement de mon portfolio afin d'y exposer tous mes projets.",
    tools: "React JS, Styled-components, Figma",
    url: "https://florianpx.github.io/portfolio/",
  },
  // {
  //   type: "Web App",
  //   name: "MyBibli",
  //   src: mybibli,
  //   alt: "Image du projet MyBibli",
  //   description: "Création d'une application web (partie front & back) afin de valider le Checkpoint4 de la Wild Code School",
  //   tools: "React JS, Styled-components",
  //   url: "",
  // },
  // {
  //   type: "Web App",
  //   name: "GodsAndGold",
  //   src: ,
  //   alt: "Image du projet ",
  //   description: "Création d'une application avec le thème donné "Retour vers le futur" en équipe de 5 personnes durant 48h.",
  //   tools: "React JS, Styled-components",
  //   url: "",
  // },
  // {
  //   type: "Web App",
  //   name: "Neurolab",
  //   src: "",
  //   alt: "Image du projet Neurolab",
  //   description:
  //     "Création du site web Neurolab afin d'y intégrer une application Unity en équipe de 5 personnes pendant 9 semaines.",
  //   tools: "HTML 5, CSS, JavaScript",
  //   url: "/",
  // },
  // {
  //   type: "Web App",
  //   name: "Hackathon européen",
  //   src: godsAndGold,
  //   alt: "Image du projet Hackathon européen",
  //   description: `Création d'une application avec le thème donné "Retour vers le futur" en équipe de 5 personnes durant 24h.`,
  //   tools: "React JS, Api Rest, Workbench, SQL",
  //   url: "/",
  // },
  {
    type: "Web App",
    name: "Mysterium",
    src: mysterium,
    alt: 'Représentation du projet "Mysterium"',
    description:
      "Adaptation du jeu de société en une application web en équipe de 5 personnes durant 6 semaines.",
    tools: "React JS, CSS",
    url: "https://mysterium-app.herokuapp.com/",
  },
  {
    type: "Web",
    name: "Studio Photographie",
    src: studioPhoto,
    alt: 'Représentation du projet "Photographie"',
    description:
      "Refonte du site internet pour un studio photographe en équipe de 4 personnes durant 2 semaines.",
    tools: "HTML 5, CSS, JavaScript",
    url: "https://florianpx.github.io/studio-photographie/",
  },
];

export const contactArray = [
  {
    color: "#8E86FF",
    type: "Email",
    items: [
      {
        logo: email,
        title: "florian.poux@hotmail.fr",
        url: "mailto:florian.poux@hotmail.fr",
      },
    ],
  },
  {
    color: "#BD96FF",
    type: "Réseaux",
    items: [
      {
        logo: github,
        title: "Github",
        url: "https://github.com/FlorianPx",
      },
      {
        logo: linkedin,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/florian-poux/",
      },
    ],
  },
];

export const devices = {
  tablet: 930,
};
