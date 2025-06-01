<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core'; // Importation de VueUse

const props = defineProps({
  data: {
    type: Array,
    default: () => ([
      { name: "Vue.js", level: 90, icon: "fab fa-vuejs" },
      { name: "JavaScript", level: 95, icon: "fab fa-js-square" },
      { name: "Tailwind CSS", level: 88, icon: "fas fa-wind" },
      { name: "Node.js", level: 82, icon: "fab fa-node-js" },
      { name: "HTML5", level: 97, icon: "fab fa-html5" },
    ])
  }
});

// Refs pour chaque élément de compétence et leur état de visibilité
const skillElements = ref([]); // Pour stocker les références aux éléments DOM
const skillIsVisible = ref([]); // Pour stocker l'état de visibilité (true/false) de chaque compétence

onMounted(() => {
  // Initialiser le tableau de visibilité avec des refs (pour la réactivité individuelle)
  skillIsVisible.value = props.data.map(() => ref(false));

  skillElements.value.forEach((element, index) => {
    if (element) {
      const { stop } = useIntersectionObserver(
        element, // L'élément DOM à observer
        ([{ isIntersecting }]) => { // Callback quand l'état d'intersection change
          if (isIntersecting) {
            skillIsVisible.value[index].value = true; // Mettre à jour l'état de visibilité
            // Optionnel : Arrêter d'observer une fois que l'élément est visible pour économiser les ressources
            // stop();
          }
        },
        {
          threshold: 0.15, // Déclencher quand 15% de l'élément est visible
        }
      );
    }
  });
});
</script>

<template>
  <section id="skills" class="bg-slate-100 overflow-hidden">
    <div class="container mx-auto">
      <h2 class="section-title">Compétences Techniques</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
        <div
          v-for="(skill, index) in props.data"
          :key="skill.name"
          :ref="el => { if (el) skillElements[index] = el }"
          class="skill-card bg-white p-5 md:p-6 rounded-xl shadow-lg group"
          :class="{ 'is-visible': skillIsVisible[index] && skillIsVisible[index].value }"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="flex flex-col items-center text-center">
            <div class="icon-wrapper mb-4 transition-transform duration-300 ease-out group-hover:scale-110">
              <i :class="[skill.icon, 'text-4xl md:text-5xl text-sky-500 group-hover:text-sky-600 transition-colors duration-300']"></i>
            </div>
            <h3 class="text-base md:text-lg font-semibold text-slate-800 mb-1.5 truncate w-full" :title="skill.name">{{ skill.name }}</h3>
            <div class="w-full bg-slate-200 rounded-full h-2.5 mt-2 overflow-hidden">
              <div
                class="progress-bar bg-gradient-to-r from-sky-500 to-blue-600 h-2.5 rounded-full shadow-inner"
                :style="{ width: (skillIsVisible[index] && skillIsVisible[index].value) ? skill.level + '%' : '0%' }"
              ></div>
            </div>
            <span class="text-xs text-slate-500 mt-2">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  @apply text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-12 sm:mb-16 pb-3 border-b-2 border-sky-300 inline-block;
  display: block;
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
}

.skill-card {
  /* État initial avant l'animation d'entrée */
  opacity: 0;
  transform: translateY(25px) scale(0.95);
  /* Transition pour l'animation d'entrée (déclenchée par la classe 'is-visible' et le transitionDelay) */
  transition-property: opacity, transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1); /* EaseOutCubic */
}

.skill-card.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Amélioration des effets de survol (hover) */
.skill-card:hover {
  @apply shadow-xl transform -translate-y-1.5 scale-[1.03];
  /* Transition pour le survol (peut être différente de l'entrée) */
  transition-property: opacity, transform, box-shadow; /* opacity n'est pas nécessaire ici, mais ne gêne pas */
  transition-duration: 300ms;
  transition-timing-function: ease-out;
}

.progress-bar {
  /* Animation pour la barre de progression */
  transition: width 1s cubic-bezier(0.215, 0.610, 0.355, 1) 0.3s; /* 0.3s de délai après que la carte est visible */
}

.icon-wrapper {
  /* Pour que le scale sur l'icône ne décale pas le texte */
}

/* Assurez-vous d'avoir Font Awesome configuré pour les icônes */
</style>