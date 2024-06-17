<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="about">
          <h2>About Us</h2>
          <p>We offer a wide variety of handmade crafts created with love and care. Our products are unique and crafted by skilled artisans.</p>
        </div>
        <div class="contact">
          <h2>Contact Us</h2>
          <p>Email: info@handmadecrafts.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: Walchand College Of Engineering, Sangli</p>
        </div>
        <div class="newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form @submit.prevent="subscribe">
            <input type="email" v-model="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="social-links">
        <a href="https://facebook.com" class="social-icon facebook">Facebook</a>
        <a href="https://instagram.com" class="social-icon instagram">Instagram</a>
        <a href="https://x.com" class="social-icon twitter">Twitter</a>
      </div>
      <p>&copy; 2024 Handmade Crafts. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscribe() {
      alert(`Subscribed with email: ${this.email}`);
      this.email = '';
    },
  },
};
</script>

<style scoped>
footer {
  background-color: #f8f9fa;
  padding: 2rem 0;
  color: #333;
  border-top: 1px solid #ddd;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
}

.about, .contact, .newsletter {
  flex: 1;
  margin: 0 1rem;
}

.about h2, .contact h2, .newsletter h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #007185;
}

.newsletter form {
  display: flex;
  flex-direction: column;
}

.newsletter input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.newsletter button {
  padding: 0.5rem;
  border: none;
  background-color: #007185;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter button:hover {
  background-color: #005f67;
}

.social-links {
  margin-bottom: 1rem;
}

.social-icon {
  margin: 0 0.5rem;
  color: #007185;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
}

.social-icon:hover {
  color: #005f67;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }
  
  .about, .contact, .newsletter {
    margin-bottom: 2rem;
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
  }
  
  .social-icon {
    margin: 0.5rem 0;
  }
}
</style>
