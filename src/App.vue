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
/* Global styles */
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
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  z-index: 1000; /* Ensure it's above other content */
}

.whatsapp-icon img {
  width: 50px; /* Adjust size as needed */
  height: auto;
  border-radius: 50%; /* Rounded icon */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Optional: Add shadow for visibility */
  transition: transform 0.3s ease; /* Optional: Add a hover effect */
}

.whatsapp-icon img:hover {
  transform: scale(1.1); /* Optional: Scale up on hover */
}

@media (max-width: 768px) {
  header, footer {
    padding: 0.5rem;
  }
}
</style>
