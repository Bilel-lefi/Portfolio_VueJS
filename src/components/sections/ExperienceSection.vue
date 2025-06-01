<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => ([
      { title: "Titre du Poste", company: "Nom Entreprise", period: "Mois Année - Mois Année", description: "Description de l'expérience.", logoUrl: "https://placehold.co/100x100/E2E8F0/4A5568?text=Logo" },
    ])
  }
});
</script>

<template>
  <section id="exp" class="bg-white">
    <div class="container mx-auto">
      <h2 class="section-title">Parcours Professionnel</h2>
      <div class="relative max-w-3xl mx-auto">
        <div class="absolute left-5 sm:left-1/2 top-0 h-full w-0.5 bg-slate-200 transform -translate-x-1/2 hidden sm:block" aria-hidden="true"></div>

        <div v-for="(job, index) in props.data" :key="index" class="relative mb-10 last:mb-0">
          <div class="sm:flex items-center" :class="index % 2 === 0 ? 'sm:flex-row-reverse' : ''">
            <div class="sm:w-1/2 p-1 sm:p-0">
              <div class="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                   :class="index % 2 === 0 ? 'sm:ml-6' : 'sm:mr-6'">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 class="text-xl font-bold text-sky-700">{{ job.title }}</h3>
                  <span class="text-xs text-slate-500 font-medium mt-1 sm:mt-0 whitespace-nowrap bg-slate-200 px-2 py-0.5 rounded-full">{{ job.period }}</span>
                </div>
                <div class="flex items-center mb-3">
                  <img v-if="job.logoUrl" :src="job.logoUrl" :alt="job.company + ' logo'" class="w-8 h-8 mr-3 rounded-full object-contain bg-white p-0.5 border border-slate-200">
                  <p class="text-md font-semibold text-slate-700">{{ job.company }}</p>
                </div>
                <p class="text-slate-600 leading-relaxed text-sm">{{ job.description }}</p>
              </div>
            </div>

            <div class="absolute left-5 top-0 h-full w-0.5 bg-slate-200 transform -translate-x-1/2 sm:hidden" aria-hidden="true"></div>
            <div class="absolute left-5 sm:left-1/2 top-3 w-8 h-8 bg-sky-500 rounded-full border-4 border-white shadow-md flex items-center justify-center transform -translate-x-1/2">
              <i class="fas fa-briefcase text-white text-xs"></i>
            </div>
             <div class="sm:w-1/2 p-1 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  @apply text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-16 sm:mb-20 pb-3 border-b-2 border-sky-300 inline-block;
  display: block;
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
}
</style>