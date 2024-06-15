<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <div>
      <a href="https://web.whatsapp.com" target="_blank" class="whatsapp-icon">
        <img src="/whatsapp_icon.png" alt="">
      </a>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header, footer {
  background-color: #151d25;
  color: white;
  padding: 1rem;
  text-align: center;
}

a {
  color: #d6dcde;
  text-decoration: solid;
  font-size: larger;
}

a:hover {
  text-decoration: underline;
}

h2 {
  margin-top: 0;
}

.whatsapp-icon {
  position: fixed;
  bottom: 20px; 
  right: 20px; 
  z-index: 1000; 
}

.whatsapp-icon img {
  width: 50px; 
  height: auto;
  border-radius: 50%; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  transition: transform 0.3s ease; 
}

.whatsapp-icon img:hover {
  transform: scale(1.1); 
}

@media (max-width: 768px) {
  header, footer {
    padding: 0.5rem;
  }
}
</style>
