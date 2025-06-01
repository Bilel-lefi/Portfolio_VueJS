<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Importation des composants
import MainNavbar from './components/MainNavbar.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
// Assurez-vous que le chemin vers MainFooter est correct
import MainFooter from './components/sections/MainFooter.vue'; // Changé de './components/sections/MainFooter.vue';

// Données du portfolio (remplacez par vos informations)
const portfolioData = ref({
  name: "Ghassen Sta",
  hero: {
    title: "Développeur Web Full-Stack",
    subtitle: "Passionné par la création d'expériences web innovantes, performantes et esthétiques, transformant les idées en réalité numérique.",
    cta: "Voir mes réalisations"
  },
  about: {
    greeting: "Bonjour ! Je suis Ghassen.",
    description1: "Développeur web créatif et orienté résultats, fort d'une expérience significative dans la conception, le développement et la maintenance d'applications web robustes et conviviales.",
    description2: "J'aime transformer des idées complexes en solutions élégantes et efficaces, tout en explorant continuellement de nouvelles technologies pour offrir des produits de haute qualité.",
    imageUrl: "https://placehold.co/400x400/0ea5e9/ffffff?text=GS", // Utilisez votre photo
    altText: "Photo de Ghassen Sta",
    contactLinks: {
      linkedin: "https://www.linkedin.com/in/ghassensta/", // Mettez vos liens
      github: "https://github.com/ghassensta",
      email: "ghassen.sta@example.com"
    }
  },
  skills: [
    { name: "Vue.js & Nuxt.js", level: 90, icon: "fab fa-vuejs" },
    { name: "JavaScript (ESNext)", level: 95, icon: "fab fa-js-square" },
    { name: "Tailwind CSS", level: 88, icon: "fas fa-wind" },
    { name: "Node.js & Express", level: 82, icon: "fab fa-node-js" },
    { name: "HTML5", level: 97, icon: "fab fa-html5" },
    { name: "CSS3 & SASS", level: 92, icon: "fab fa-sass" },
    { name: "Git & GitHub", level: 89, icon: "fab fa-github" },
    { name: "API REST & GraphQL", level: 78, icon: "fas fa-cogs" },
    { name: "Bases de données (SQL & NoSQL)", level: 75, icon: "fas fa-database" },
    { name: "Figma", level: 70, icon: "fab fa-figma" },
  ],
  experiences: [
    { title: "Développeur Web Senior", company: "Innovatech Solutions", period: "Jan 2023 - Présent", description: "Leadership technique sur des projets d'envergure, conception d'architectures logicielles, développement de fonctionnalités complexes et mentorat d'équipes.", logoUrl: "https://placehold.co/100x100/e2e8f0/4a5568?text=IS" },
    { title: "Développeur Full-Stack", company: "Digital Creations Agency", period: "Juin 2020 - Déc 2022", description: "Participation active au cycle de vie complet du développement, de la conception à la mise en production. Développement d'API RESTful et d'interfaces utilisateur interactives et responsives.", logoUrl: "https://placehold.co/100x100/cbd5e1/475569?text=DCA" },
  ],
  projects: [
    { id: 1, title: "Plateforme E-commerce Intelligente", description: "Solution e-commerce complète avec gestion de produits, paniers, paiements sécurisés et tableau de bord administrateur.", imageUrl: "https://placehold.co/600x400/0ea5e9/ffffff?text=Projet+1", altText: "Aperçu Plateforme E-commerce", tech: ["Vue.js", "Pinia", "Node.js", "Stripe API"], liveUrl: "#", repoUrl: "#" },
    { id: 2, title: "Application SaaS de Gestion", description: "Outil collaboratif en mode SaaS pour la gestion de projets et de tâches, avec suivi en temps réel et notifications.", imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Projet+2", altText: "Aperçu Application SaaS", tech: ["Nuxt.js", "Supabase", "Tailwind CSS"], liveUrl: "#", repoUrl: "#" },
    { id: 3, title: "Portfolio Personnel (Ce site)", description: "Mon portfolio personnel, une vitrine dynamique de mes compétences, expériences et projets, conçu pour une UX optimale.", imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Projet+3", altText: "Aperçu Portfolio", tech: ["Vue.js", "VueUse", "Tailwind CSS"], liveUrl: "#", repoUrl: "#" },
  ],
  contact: {
    email: "ghassen.sta@example.com",
    linkedin: "https://www.linkedin.com/in/ghassensta/",
    github: "https://github.com/ghassensta",
    phone: "+216 28 XXX XXX"
  }
});

// Logique pour la section active (Intersection Observer)
const activeSection = ref('hero');
let observer;

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const viewportHeight = window.innerHeight;
      const entryRect = entry.boundingClientRect;
      if (entryRect.top < viewportHeight * 0.5 && entryRect.bottom > viewportHeight * 0.25) { // Ajusté pour mieux cibler
        activeSection.value = entry.target.id;
      }
    }
  });
};

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0.05, // Augmenté légèrement pour une détection plus fiable
  };
  observer = new IntersectionObserver(observerCallback, options);
  document.querySelectorAll('main > section[id]').forEach(section => {
    observer.observe(section);
  });

  // Chargement de Font Awesome
  const faScript = document.createElement('script');
  faScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js';
  faScript.integrity = 'sha512-u3fPA7V8qQmhBPNT5quvaXVa1mnnLSXUep5PS1qo5NRzHwG19aHmNJnj1Q8hpA/ikRenbpPCSFCLzgXCMNSGQA=='; // Ajout d'intégrité
  faScript.crossOrigin = 'anonymous';
  faScript.referrerPolicy = 'no-referrer';
  document.head.appendChild(faScript);
});

onUnmounted(() => {
  if (observer) {
    document.querySelectorAll('main > section[id]').forEach(section => {
      observer.unobserve(section);
    });
  }
});
</script>

<template>
  <div class="font-sans bg-slate-100 text-slate-800 selection:bg-sky-500 selection:text-white antialiased">
    <MainNavbar
      :portfolio-name="portfolioData.name"
      :active-section="activeSection"
    />

    <main class="overflow-x-hidden">
      <HeroSection
        id="hero"
        :name="portfolioData.name"
        :title="portfolioData.hero.title"
        :subtitle="portfolioData.hero.subtitle"
        :cta-text="portfolioData.hero.cta"
        cta-link="#work"
      />
      <AboutSection id="about" :data="portfolioData.about" />
      <SkillsSection id="skills" :data="portfolioData.skills" />
      <ExperienceSection id="exp" :data="portfolioData.experiences" />
      <ProjectsSection id="work" :data="portfolioData.projects" />
      <ContactSection id="contact" :data="portfolioData.contact" />
    </main>

    <MainFooter :name="portfolioData.name" />
  </div>
</template>

<style>
/* Les styles globaux comme html et main > section sont mieux dans src/style.css */
/* Si vous les gardez ici, enlevez la balise 'scoped' si elle existe */

/* Style de base pour les sections pour un espacement cohérent */
main > section {
  /* Ces classes Tailwind appliquent le padding et la marge pour le défilement */
  @apply py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8;
  @apply scroll-mt-[72px]; /* Hauteur approximative de la navbar, ajustez si nécessaire */
                          /* ex: 4.5rem pour 72px, 5rem pour 80px */
}

/* HeroSection gère son propre padding et hauteur pour l'effet plein écran.
   Le scroll-mt ci-dessus s'appliquera toujours à #hero pour les ancres.
   Assurez-vous que #hero dans HeroSection.vue n'a pas de padding vertical
   qui s'ajoute inutilement si vous souhaitez un vrai effet "bord à bord" pour son fond.
   Son contenu interne aura son propre padding.
*/
</style>