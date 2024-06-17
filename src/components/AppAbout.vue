<template>
  <section class="about-us">
    <div class="about-header">
      <h2>About Handmade Crafts</h2>
    </div>
    <div class="about-content">
      <div class="about-image">
        <img src="https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZG1hZGV8ZW58MHx8MHx8fDA%3D" alt="Crafts Image">
      </div>
      <div class="about-text">
        <div class="about-section">
          <h3>Our Mission</h3>
          <p>At Handmade Crafts, our mission is to bring the finest handmade products crafted with love and care directly to you.</p>
        </div>
        <div class="about-section">
          <h3>Quality Craftsmanship</h3>
          <p>Each product is meticulously crafted by skilled artisans, ensuring the highest quality and attention to detail.</p>
        </div>
        <div class="about-section">
          <h3>Unique and Personalized</h3>
          <p>Our collection features unique and personalized items that you won't find anywhere else. Every piece tells a story. Story about you and your legacy.</p>
        </div>
        <div class="about-section">
          <h3>Handcrafted for you</h3>
          <p>We also take custom orders from our customers. You need to describe the art on your mand and we will handcraft it.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0rem 0;
}

.about-header {
  text-align: center;
  margin-bottom: 2rem;
}

.about-header h2 {
  font-size: 2.0rem;
  margin-bottom: 0.5rem;
}

.about-header p {
  font-size: 1.2rem;
  color: #555;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 0rem;

}

.about-image {
  flex: 3 3 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-image img:hover {
  transform: scale(1.05);
}

.about-text {
  flex: 2 1 500px;
}

.about-section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.about-section h3 {
  margin-top: 0;
  color: #007185;
}

.about-section p {
  margin-bottom: 0;
  color: #555;
}

.about-section:hover {
  background-color: #f1f1f1;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-image {
    margin-bottom: 1rem;
  }
}
</style>
