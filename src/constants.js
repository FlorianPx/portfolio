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
    type: "Web",
    name: "Studio Photographie",
    src: "",
    alt: "Image du projet Studio Photographie",
    description:
      "Refonte du site internet pour un studio photographe en équipe de 4 personnes pendant 2 semaines.",
    tools: "HTML 5, CSS, JavaScript",
    href: "https://florianpx.github.io/Projet1-Photographie-/",
  },
  {
    type: "Web App",
    name: "Mysterium",
    src: "",
    alt: "Image du projet Mysterium",
    description:
      "Adaptation du jeu de société en une application web en équipe de 5 personnes pendant 6 semaines.",
    tools: "React JS, CSS",
    href: "Pas encore de données",
  },
  {
    type: "Web App",
    name: "Hackathon européen",
    src: "",
    alt: "Image du projet Hackathon européen",
    description: `Création d'une application avec le thème donné "Retour vers le futur" en équipe de 5 personnes durant 24h.`,
    tools: "React JS, Api Rest, Workbench, SQL",
    href: "Pas encore de données",
  },
  {
    type: "Web App",
    name: "Neurolab",
    src: "",
    alt: "Image du projet Neurolab",
    description:
      "Création du site web Neurolab afin d'y intégrer une application Unity en équipe de 5 personnes pendant 9 semaines.",
    tools: "HTML 5, CSS, JavaScript",
    href: "Pas encore de données",
  },
  {
    type: "Web",
    name: "Portfolio",
    src: "",
    alt: "Image du projet Portfolio",
    description: "Créer mon propre portfolio afin d'y exposer tous mes projets",
    tools: "React JS, Styled-components",
    href: "Pas encore de données",
  },
];

export const devices = {
  tablet: 768,
};
