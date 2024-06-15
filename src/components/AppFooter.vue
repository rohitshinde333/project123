<template>
  <footer>
    <div class="container">
      <p>&copy; 2024 Handmade Crafts. All rights reserved.</p>
      <div class="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://x.com">Twitter</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links a {
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
  
  .social-links a {
    margin: 0.5rem;
  }
}
</style>
