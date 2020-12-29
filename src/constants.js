import frontIcon from "./assets/iconFront.png";
import backIcon from "./assets/iconBack.png";

export const cardArray = [
  {
    color: "#4C40F7",
    src: frontIcon,
    alt: "Logo Front",
    title: "Front",
    language: "React et JavaScript",
    skills: [
      "Création de class components",
      "Création de functional components",
      "Utilisation de hooks: useState, useEffect, useMemo, useHistory",
      "Utilisation d'axios pour les appels API",
      "Création d'un router avec react-router",
    ],
  },
  {
    color: "#9D67F8",
    src: backIcon,
    alt: "Logo Back",
    title: "Back",
    language: "Node.js et Express",
    skills: [
      "Création d'un serveur avec Express",
      "Création d'une base de données avec mysql",
      "Utilisation de l'outil Workbench",
      "Utilisation de l'outil Postman",
      "Utilisation de nodemon",
    ],
  },
];

export const projectArray = [
  {
    name: "Studio Photographie",
    stake: "Refonte du site internet pour un studio photographe.",
    duration: "2 semaines",
    tools: "HTML 5, CSS, JavaScript",
    team: "Equipe composée de 4 personnes",
    href: "https://florianpx.github.io/Projet1-Photographie-/",
  },
  {
    name: "Mysterium",
    stake: "Adaptation du jeu de société Mysterium en une application web.",
    duration: "6 semaines",
    tools: "React JS, CSS, Bootstrap",
    team: "Equipe composée de 5 personnes",
    href: "Pas encore de données",
  },
  {
    name: "Hackathon européen",
    stake: 'Thème donné "Retour vers le futur"',
    duration: "24 heures",
    tools: "React JS, Api Rest, Workbench, SQL",
    team: "Equipe de 5 personnes",
    href: "Pas encore de données",
  },
  {
    name: "Neurolab",
    stake:
      "Création du site web Neurolab afin d'y intégrer leur application Unity",
    duration: "9 semaines",
    tools: "HTML 5, CSS, JavaScript",
    team: "Equipe de 5 personnes",
    href: "Pas encore de données",
  },
  {
    name: "Portfolio",
    stake: "Créer mon propre portfolio afin d'y exposer tous mes projets",
    duration: "3 semaines",
    tools: "React JS, Styled-components",
    team: "Seul",
    href: "Pas encore de données",
  },
];

export const devices = {
  tablet: 768,
};
