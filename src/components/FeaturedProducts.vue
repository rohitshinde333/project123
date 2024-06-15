<template>
  <div>
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="slide" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" />
        </div>
      </div>
      <button class="prev" @click="prevSlide">‹</button>
      <button class="next" @click="nextSlide">›</button>
    </div>

    <div class="featured-products" @click="redirectToContact()">
      <h2 style="color: #007185;">Featured Products</h2>
      <div class="product-list" :class="{ 'product-list-mobile': isMobile }">
        <div class="product-item" v-for="product in featuredProducts" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      products: [
        { image: '/summerfest_web_eng.jpg' },
        { image: '/bluepottery_eng.jpg' },
        { image: '/weddingbanner_eng_web.jpg' },
        { image: '/astisan_eng.jpg' },
        { image: '/lamp_eng.jpg' },
        { image: '/handloom_eng.jpg' },
      ],
      featuredProducts: [
        { id: 1, name: 'Small Stool', description: 'Price: 400', image: '/small_stool.jpg' },
        { id: 2, name: 'Handloom Cotton Printed Dress', description: 'Price: 1799', image: '/hangin_zhula.jpg' },
        { id: 3, name: 'Saree Handcrafted Womens', description: 'Price: 2708', image: '/yellow_saree.jpg' },
      ],
      timer: null,
      isMobile: false,
    };
  },
  mounted() {
    this.startSlider();
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },
  methods: {
    redirectToContact() {
      this.$router.push('/contact');
    },
    startSlider() {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, 10000);
    },
    stopSlider() {
      clearInterval(this.timer);
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
      this.stopSlider();
      this.startSlider();
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
      this.stopSlider();
      this.startSlider();
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  beforeUnmount() {
    clearInterval(this.timer);
    window.removeEventListener('resize', this.checkIsMobile);
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-color: #007185;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

.featured-products {
  padding: 2rem;
}

.featured-products h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product-item {
  background-color: white;
  padding: 0rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 1rem);
  box-sizing: border-box;
  text-align: center;
}

.product-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.product-item img:hover {
  transform: scale(1.05);
}

.product-list-mobile .product-item {
  width: 100%;
}

@media (max-width: 768px) {
  .slider {
    height: 100px;
  }

  .featured-products {
    padding: 1rem;
  }
}
</style>
