<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  portfolioName: { type: String, default: 'Votre Nom' },
  activeSection: { type: String, default: 'hero' }
});

const open = ref(false);
const closeMenu = () => open.value = false;
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out">
    <div class="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3.5 lg:py-4"> 
      <a href="#hero" @click="closeMenu"
         class="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-sky-600 transition hover:scale-105 duration-300 ease-in-out">
        {{ props.portfolioName }}
      </a>

      <button @click="open = !open"
              class="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors">
        <span class="sr-only">Ouvrir le menu</span>
        <transition name="menu-icon-fade" mode="out-in">
          <svg v-if="!open" key="menu" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
          <svg v-else key="close" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </transition>
      </button>

      <ul class="hidden md:flex items-center gap-x-5 lg:gap-x-7 text-[15px] lg:text-base font-medium tracking-tight text-slate-700">
        <li><a href="#about" @click="closeMenu" class="navlink" :class="{ 'active': props.activeSection === 'about' }">À-propos</a></li>
        <li><a href="#skills" @click="closeMenu" class="navlink" :class="{ 'active': props.activeSection === 'skills' }">Compétences</a></li>
        <li><a href="#exp" @click="closeMenu" class="navlink" :class="{ 'active': props.activeSection === 'exp' }">Expérience</a></li>
        <li><a href="#work" @click="closeMenu" class="navlink" :class="{ 'active': props.activeSection === 'work' }">Projets</a></li>
        <li><a href="#contact" @click="closeMenu" class="primary-navlink" :class="{ 'active-primary': props.activeSection === 'contact' }">Me Contacter</a></li>
      </ul>
    </div>

    <transition
      enter-active-class="transition duration-300 transform ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 transform ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="open" class="md:hidden absolute w-full bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-lg">
        <ul class="flex flex-col px-4 py-5 space-y-2">
          <li><a href="#about" @click="closeMenu" class="mobile-navlink" :class="{ 'active-mobile': props.activeSection === 'about' }">À-propos</a></li>
          <li><a href="#skills" @click="closeMenu" class="mobile-navlink" :class="{ 'active-mobile': props.activeSection === 'skills' }">Compétences</a></li>
          <li><a href="#exp" @click="closeMenu" class="mobile-navlink" :class="{ 'active-mobile': props.activeSection === 'exp' }">Expérience</a></li>
          <li><a href="#work" @click="closeMenu" class="mobile-navlink" :class="{ 'active-mobile': props.activeSection === 'work' }">Projets</a></li>
          <li><a href="#contact" @click="closeMenu" class="primary-mobile-navlink" :class="{ 'active-primary-mobile': props.activeSection === 'contact' }">Me Contacter</a></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navlink {
  @apply relative text-inherit hover:text-sky-600 transition duration-200 ease-in-out pb-1; /* py-2 initial, pb-1 est plus subtil pour l'underline */
}
.navlink::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-[2px] bg-sky-500 scale-x-0 origin-left transition-transform duration-300 ease-out;
}
.navlink:hover::after,
.navlink.active::after {
  @apply scale-x-100;
}
.navlink.active {
  @apply text-sky-600 font-semibold;
}

.primary-navlink {
  @apply bg-sky-600 text-white hover:bg-sky-700 px-4 lg:px-5 py-2.5 rounded-md shadow hover:shadow-md transition-all transform hover:scale-105 duration-200 ease-in-out text-sm;
  /* py-2.5 et text-sm pour un look plus "bouton" */
}
.primary-navlink.active-primary {
  @apply ring-2 ring-sky-400 ring-offset-2 ring-offset-white;
}

.mobile-navlink {
  @apply block px-4 py-2.5 rounded-md text-slate-700 hover:bg-sky-50 hover:text-sky-700 font-medium transition-all duration-200 ease-in-out transform hover:translate-x-1;
}
.mobile-navlink.active-mobile {
  @apply bg-sky-100 text-sky-700 font-semibold;
}
.primary-mobile-navlink {
  @apply block w-full text-center mt-2 px-4 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700 shadow hover:shadow-md transition-all transform hover:scale-[1.02] duration-200 ease-in-out font-semibold;
}
.primary-mobile-navlink.active-primary-mobile {
  @apply ring-2 ring-sky-400 ring-offset-2 ring-offset-white;
}

.menu-icon-fade-enter-active,
.menu-icon-fade-leave-active {
  @apply transition-opacity duration-150 ease-in-out;
}
.menu-icon-fade-enter-from,
.menu-icon-fade-leave-to {
  opacity: 0;
}
</style>