# Portfolio Personnel avec Vue.js et Tailwind CSS

Bienvenue sur le dépôt de mon portfolio personnel ! Ce projet a été développé avec Vue.js 3 , Vite pour un build rapide, et Tailwind CSS pour un design moderne et responsive.

<!-- **[🔗 Voir la Démo Live](https://bilel-lefi.github.io/Portfolio_VueJS/)** -->

## 🚀 Description

Ce portfolio est une vitrine de mes compétences, expériences professionnelles, et projets personnels. Il est conçu pour être épuré, rapide, et facile à maintenir.

## ✨ Fonctionnalités

- **Design Responsive :** S'adapte à toutes les tailles d'écran (mobile, tablette, desktop).
- **Navigation Fluide :** Menu de navigation fixe avec mise en évidence de la section active et défilement doux.
- **Sections Claires :**
  - **Accueil (Hero) :** Présentation percutante.
  - **À Propos :** Informations détaillées sur mon profil et mes aspirations.
  - **Compétences :** Visualisation de mes compétences techniques avec des barres de progression.
  - **Expérience :** Timeline de mon parcours professionnel.
  - **Projets :** Cartes de présentation de mes réalisations avec liens vers les démos et dépôts GitHub.
  - **Contact :** Moyens de me contacter.
- **Animations Subtiles :** Animations d'entrée pour les sections et les éléments pour une expérience utilisateur améliorée (utilisant VueUse et CSS).
- **Optimisé pour la Performance :** Grâce à Vite et Vue.js.

## 🛠️ Technologies Utilisées

- **Framework Frontend :** [Vue.js 3](https://vuejs.org/) (Composition API avec `<script setup>`)
- **Build Tool :** [Vite](https://vitejs.dev/)
- **Styling :** [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations au défilement :** [VueUse (`useIntersectionObserver`)](https://vueuse.org/)
- **Icônes :** [Font Awesome](https://fontawesome.com/)
- **Contrôle de Version :** Git & GitHub

## ⚙️ Installation et Démarrage Local

Suivez ces étapes pour faire fonctionner le projet sur votre machine locale :

### Prérequis

- [Node.js](https://nodejs.org/) (Version 18.x ou plus recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Étapes

1.  **Clonez le dépôt :**

    ```bash
    git clone [https://github.com/Bilel-lefi/Portfolio_VueJS.git](https://github.com/Bilel-lefi/Portfolio_VueJS.git)
    cd Portfolio_VueJS
    ```

2.  **Installez les dépendances :**

    ```bash
    npm install
    # ou
    # yarn install
    ```

3.  **Lancez le serveur de développement :**

    ```bash
    npm run dev
    # ou
    # yarn dev
    ```

    Ouvrez votre navigateur et allez sur `http://localhost:5173` (ou le port indiqué dans votre terminal).

4.  **Build pour la production :**
    ```bash
    npm run build
    # ou
    # yarn build
    ```
    Les fichiers optimisés pour la production seront générés dans le dossier `dist/`.

## 🎨 Personnalisation

La majorité du contenu du portfolio (textes, images, liens, données des sections) peut être modifiée directement dans le fichier `src/App.vue`, au sein de l'objet réactif `portfolioData`.

```javascript
// src/App.vue
const portfolioData = ref({
  name: "Votre Nom",
  hero: {
    title: "Votre Titre Professionnel",
    subtitle: "Votre sous-titre accrocheur.",
    cta: "Texte de votre CTA",
  },
  about: {
    greeting: "Message de bienvenue",
    // ... etc.
  },
  // ... et ainsi de suite pour les autres sections
});
```
