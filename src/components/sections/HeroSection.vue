<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: 'Votre Nom Ici'
  },
  title: {
    type: String,
    default: 'Votre Titre Professionnel'
  },
  subtitle: {
    type: String,
    default: 'Une brève description accrocheuse de ce que vous faites et de votre passion.'
  },
  ctaText: {
    type: String,
    default: 'Explorer mes projets'
  },
  ctaLink: {
    type: String,
    default: '#work' // Lien par défaut vers la section des projets
  }
});
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden text-center px-4 sm:px-6"
  >
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800"></div>
      </div>

    <div class="relative z-10 flex flex-col items-center py-20 sm:py-24">
      <div class="max-w-4xl">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 animate-fade-in-down"
        >
          <span class="block">Salut, je suis</span>
          <span class="block text-sky-300 mt-1 sm:mt-2">{{ props.name }}</span>
        </h1>
        <p
          class="text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-100/90 mb-8 animate-fade-in-down animation-delay-200"
        >
          {{ props.title }}
        </p>
        <p
          class="text-lg sm:text-xl max-w-2xl mx-auto text-sky-100/80 leading-relaxed mb-12 animate-fade-in-up animation-delay-400"
        >
          {{ props.subtitle }}
        </p>
        <a
          :href="props.ctaLink"
          class="inline-block bg-white text-sky-700 font-semibold px-8 py-3.5 sm:px-10 sm:py-4 rounded-lg text-base sm:text-lg shadow-xl hover:shadow-2xl focus:shadow-2xl
                 hover:bg-sky-50 focus:bg-sky-50
                 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105
                 focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-50
                 animate-fade-in-up animation-delay-600 group"
        >
          {{ props.ctaText }}
          <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
        </a>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-up animation-delay-800 hidden sm:block">
      <a href="#about" aria-label="Défiler vers la section À propos" class="p-2 group">
        <svg
          class="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300 animate-bounce-slow"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Animations d'entrée (vous pouvez les centraliser si utilisées ailleurs) */
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-25px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fade-in-down 0.7s ease-out forwards;
  opacity: 0; /* Commence caché */
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out forwards;
  opacity: 0; /* Commence caché */
}

/* Délais d'animation */
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }

/* Animation de rebond pour l'indicateur de défilement */
@keyframes bounce-slow {
  0%, 100% { transform: translateY(-15%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: translateY(0); animation-timing-function: cubic-bezier(0,0,0.2,1); }
}
.animate-bounce-slow {
  animation: bounce-slow 2.5s infinite;
}

/* Important: Cette section contrôle son propre padding vertical et ne devrait pas
   hériter des paddings globaux de 'main > section' de App.vue si ceux-ci
   interfèrent avec le design plein écran.
   Le scroll-mt-20 (ou plus, selon la hauteur de votre navbar) appliqué globalement aux sections
   dans App.vue via `main > section { @apply scroll-mt-20; }` est toujours pertinent
   pour assurer que le ciblage par ancre (#hero) ne soit pas masqué par la navbar fixe.
*/
#hero {
  /* Si App.vue applique un padding vertical global via 'main > section',
     et que #hero est un enfant direct de main, vous pourriez avoir besoin de neutraliser ce padding ici : */
  /* padding-top: 0 !important; */
  /* padding-bottom: 0 !important; */
  /* Actuellement, la structure de App.vue avec `main > section` pour les styles globaux
     et `<HeroSection id="hero" ... />` directement sous `<main>` devrait bien fonctionner
     avec le `scroll-mt` global. Le `py-20 sm:py-24` dans cette section #hero
     assure l'espacement interne du contenu.
  */
}
</style>