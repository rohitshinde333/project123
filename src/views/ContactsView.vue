<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <form @submit.prevent="validateForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea v-model="message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p v-if="error" style="color: red; margin-top: 0;">{{ error }}</p>

    <div class="store-info">
      <h3>Our Store</h3>
      <p>Walchand College of Engineering, Vishrambagh, Sangli, Maharashtra (416416)</p>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.609076470658!2d74.59888793716964!3d16.845738684018762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1237f52c65db5%3A0xa3535676176ded0a!2sWalchand%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1718442809331!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      error: '',
    };
  },
  methods: {
    validateForm() {
      if (!this.name || !this.email || !this.message) {
        this.error = 'All fields are required.';
        alert('All fields are required.');
      } else if (!this.validateEmail(this.email)) {
        this.error = 'Invalid email address.';
        alert('Invalid email address.');
      } else {
        this.error = '';
        alert('Form submitted successfully.');
      }
    },
    validateEmail(email) {
      //eslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #232f3e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1a232f;
}

.store-info {
  margin-top: 2rem;
}

.store-info h3 {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .contact {
    padding: 1.5rem;
    margin: 1rem;
  }

  button {
    width: 100%;
    padding: 1rem;
  }

  .store-info {
    margin-top: 1rem;
  }

  .map iframe {
    height: auto;
    width: 70%;
  }
  
}
</style>
