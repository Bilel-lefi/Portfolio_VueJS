<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: "Votre Nom"
  }
});

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-slate-900 text-slate-400 py-10 sm:py-12 text-center"> {/* bg-slate-900 pour un contraste plus fort */}
    <div class="container mx-auto px-4 sm:px-6">
      <p class="text-sm font-light">
        &copy; {{ currentYear }} {{ props.name }}. Tous droits réservés.
      </p>
      <p class="text-xs text-slate-500 mt-2"> {/* text-slate-500 pour une meilleure lisibilité */}
        Conçu avec <span class="text-red-500 heart-pulse">&hearts;</span> et développé avec Vue.js & Tailwind CSS.
      </p>
    </div>
  </footer>
</template>

<style scoped>
@keyframes pulseHeart {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: .7; }
}
.heart-pulse {
  display: inline-block;
  animation: pulseHeart 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>