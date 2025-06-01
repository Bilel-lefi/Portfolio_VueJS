<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => ([
      { id: 1, title: "Titre Projet", description: "Description courte du projet.", imageUrl: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Projet", altText: "Aperçu projet", tech: ["Vue.js", "Tailwind"], liveUrl: "#", repoUrl: "#" },
    ])
  }
});
</script>

<template>
  <section id="work" class="bg-slate-100">
    <div class="container mx-auto">
      <h2 class="section-title">Mes Projets Récents</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <div v-for="project in props.data" :key="project.id"
             class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1.5">
          <div class="relative h-56 w-full overflow-hidden">
            <img :src="project.imageUrl" :alt="project.altText" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-sky-700 mb-2">{{ project.title }}</h3>
            <p class="text-slate-600 leading-relaxed text-sm mb-4 flex-grow">{{ project.description }}</p>
            <div class="mb-5">
              <span v-for="techItem in project.tech" :key="techItem"
                    class="inline-block bg-sky-100 text-sky-800 text-xs font-semibold mr-1.5 mb-1.5 px-2.5 py-1 rounded-full">
                {{ techItem }}
              </span>
            </div>
            <div class="mt-auto flex space-x-3 border-t border-slate-200 pt-4">
              <a v-if="project.liveUrl && project.liveUrl !== '#'" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                 class="project-link-button bg-sky-600 hover:bg-sky-700 text-white">
                Voir Live <i class="fas fa-external-link-alt ml-1.5 text-xs"></i>
              </a>
              <a v-if="project.repoUrl && project.repoUrl !== '#'" :href="project.repoUrl" target="_blank" rel="noopener noreferrer"
                 class="project-link-button bg-slate-700 hover:bg-slate-800 text-white">
                Code <i class="fab fa-github ml-1.5 text-xs"></i>
              </a>
            </div>
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
.project-link-button {
  @apply flex-1 text-center text-sm font-medium py-2.5 px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 shadow hover:shadow-md;
}
</style>