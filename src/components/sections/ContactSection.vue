<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      email: "contact@example.com",
      linkedin: "#",
      github: "#",
      phone: "+XX XXX XXX XXX"
    })
  }
});
</script>

<template>
  <section id="contact" class="bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white">
    <div class="container mx-auto text-center">
      <h2 class="section-title !text-white !border-b-slate-600">Entrons en Contact</h2>
      <p class="text-lg sm:text-xl max-w-xl mx-auto mb-10 text-slate-300 leading-relaxed">
        Je suis toujours ouvert à de nouvelles opportunités, collaborations ou simplement pour échanger. N'hésitez pas !
      </p>
      <div class="max-w-md mx-auto bg-white/5 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10">
        <div class="space-y-6">
          <a :href="'mailto:' + props.data.email"
             class="contact-info-button group bg-sky-500 hover:bg-sky-600">
            <i class="fas fa-envelope mr-3 text-sky-200 group-hover:text-white transition-colors"></i>
            <span>{{ props.data.email }}</span>
          </a>
          <a v-if="props.data.phone" :href="'tel:' + props.data.phone.replace(/\s/g, '')"
             class="contact-info-button group bg-emerald-500 hover:bg-emerald-600">
            <i class="fas fa-phone mr-3 text-emerald-200 group-hover:text-white transition-colors"></i>
            <span>{{ props.data.phone }}</span>
          </a>
        </div>
        <div class="flex justify-center space-x-8 mt-10 pt-6 border-t border-white/10">
          <a :href="props.data.linkedin" target="_blank" rel="noopener noreferrer" class="social-icon-contact hover:text-sky-400" title="LinkedIn">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a :href="props.data.github" target="_blank" rel="noopener noreferrer" class="social-icon-contact hover:text-slate-400" title="GitHub">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  @apply text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 pb-3 border-b-2 inline-block;
  display: block;
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
}
.contact-info-button {
  @apply w-full flex items-center justify-center text-white font-semibold py-3.5 px-6 rounded-lg
         text-base transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl;
}
.social-icon-contact {
  @apply text-slate-300 transition-colors duration-300 ease-in-out;
}
</style>