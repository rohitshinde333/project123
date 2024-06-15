<template>
  <footer>
    <div class="container">
      <p>&copy; 2024 Handmade Crafts. All rights reserved.</p>
      <div class="social-links">
        <a href="www.facebook.com">Facebook</a>
        <a href="www.instagram.com">Instagram</a>
        <a href="www.x.com">Twitter</a>
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
