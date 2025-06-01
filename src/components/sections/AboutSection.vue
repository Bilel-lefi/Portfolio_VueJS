<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      greeting: 'Bonjour !',
      description1: 'Description par défaut.',
      description2: 'Une autre description.',
      imageUrl: 'https://placehold.co/400x400/60A5FA/FFFFFF?text=Moi',
      altText: 'Photo de profil',
      // Assurez-vous que votre objet portfolioData.about contient aussi contactLinks
      contactLinks: {
        linkedin: '#',
        github: '#',
        email: 'email@example.com'
      }
    })
  }
});
</script>

<template>
  <section id="about" class="bg-white">
    <div class="container mx-auto">
      <h2 class="section-title">À Propos de Moi</h2>
      <div class="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        <div class="md:col-span-2 group">
          <div class="relative rounded-lg overflow-hidden shadow-xl transform group-hover:scale-105 transition-transform duration-300">
            <img :src="props.data.imageUrl" :alt="props.data.altText" class="w-full h-auto object-cover aspect-square">
            <div class="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
        <div class="md:col-span-3 space-y-5">
          <h3 class="text-2xl sm:text-3xl font-semibold text-sky-700 leading-tight">{{ props.data.greeting }}</h3>
          <p class="text-lg text-slate-600 leading-relaxed">{{ props.data.description1 }}</p>
          <p class="text-lg text-slate-600 leading-relaxed">{{ props.data.description2 }}</p>
          <div v-if="props.data.contactLinks" class="flex items-center space-x-5 mt-6 pt-4 border-t border-slate-200">
            <p class="text-slate-700 font-medium">Connectons-nous :</p>
            <a v-if="props.data.contactLinks.linkedin" :href="props.data.contactLinks.linkedin" target="_blank" rel="noopener noreferrer" class="social-icon-about hover:text-sky-600" title="LinkedIn">
              <i class="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a v-if="props.data.contactLinks.github" :href="props.data.contactLinks.github" target="_blank" rel="noopener noreferrer" class="social-icon-about hover:text-slate-800" title="GitHub">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a v-if="props.data.contactLinks.email" :href="'mailto:' + props.data.contactLinks.email" class="social-icon-about hover:text-red-500" title="Email">
              <i class="fas fa-envelope fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  @apply text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-12 sm:mb-16 pb-3 border-b-2 border-sky-300 inline-block;
  display: block; /* Pour centrer avec mx-auto sur le inline-block */
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
}
.social-icon-about {
  @apply text-slate-500 transition-colors duration-300;
}
</style>