<template>
  <div class="products">
    <h1 style="text-align: center; color: #007185;">Our Products</h1>
    <div v-for="(products, category) in groupedProducts" :key="category" class="category-section">
      <h2 style="color: #007185; font-size: larger;">{{ category }}</h2>
      <div class="product-list-wrapper" v-if="!isMobile">
        <button class="prev" @click="scrollLeft(category)">‹</button>
        <div class="product-list" ref="productList" :data-category="category">
          <div class="product-item" v-for="product in products" :key="product.id" @click="redirectToContact()">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <button class="next" @click="scrollRight(category)">›</button>
      </div>
      <div class="product-list-mobile" v-else>
        <div class="product-item" v-for="product in products" :key="product.id" @click="redirectToContact()">
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
      products: [
        { id: 1, name: 'Sujani Handcrafted Cushion Cover', description: 'Price: 400', image: '/chanderi_saree.jpg', category: 'Summerfest Collection' },
        { id: 2, name: 'Amair Suit', description: 'Price: 4000', image: '/amaira_suit.jpg', category: 'Summerfest Collection' },
        { id: 3, name: 'Handloom Cotton Printed Dress', description: 'Price: 1799', image: '/handloom_dress.jpeg', category: 'Summerfest Collection' },
        { id: 4, name: 'Jharcraft Cotton For Mens Kurta', description: 'Price: 1708', image: '/jharcraft_cotton_kurta.jpg', category: 'Summerfest Collection' },
        { id: 5, name: 'Handloom Cotton Printed Dress', description: 'Price: 1799', image: '/handcrafted_bamboo_earings.jpg', category: 'Women Accessories' },
        { id: 6, name: 'Aapan Kala Neclace Earing Set', description: 'Price: 1708', image: '/necklace_earring.jpeg', category: 'Women Accessories' },
        { id: 7, name: 'Blue Agate Gemstone Earing Set', description: 'Price: 999', image: '/blue_agate_gemstone.jpg', category: 'Women Accessories' },
        { id: 8, name: 'Aapan Kala tricolour necklace with Earings', description: 'Price: 759', image: '/aapan_kala.jpeg', category: 'Women Accessories' },
        { id: 9, name: 'Kilim Dhurries', description: 'Price: 6800', image: '/kilim_durries.jpg', category: 'Floor Coverings' },
        { id: 10, name: 'Multi Boxes Dhurrie', description: 'Price: 9000', image: '/multi_boxes_dhurries.jpg', category: 'Floor Coverings' },
        { id: 11, name: 'Hand Made Dhurrie Rug', description: 'Price: 7200', image: '/handmade_dhurri_ruggs.jpg', category: 'Floor Coverings' },
        { id: 12, name: 'Multi Color handloom carpet', description: 'Price: 5000', image:'/multi_color_handloom_carpet.jpg', category: 'Floor Coverings' },
        
      ],
      isMobile: false,
    };
  },
  computed: {
    groupedProducts() {
      return this.products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {});
    },
  },
  methods: {
    redirectToContact() {
      this.$router.push('/contact');
    },
    scrollLeft(category) {
      const productList = this.$refs.productList.find(
        (el) => el.dataset.category === category
      );
      productList.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight(category) {
      const productList = this.$refs.productList.find(
        (el) => el.dataset.category === category
      );
      productList.scrollBy({ left: 300, behavior: 'smooth' });
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
  },
};
</script>

<style scoped>
.products {
  padding: 2rem;
}

.category-section {
  margin-bottom: 2rem;
}

.product-list-wrapper {
  display: flex;
  align-items: center;
}

.product-list {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem 0;
}

.product-item {
  background-color: white;
  padding: 0.2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  box-sizing: border-box;
  text-align: center;
  flex: 0 0 auto;
}

.product-item img {
  width: 100%;
  height: 13rem;
  margin-bottom: 1rem;
}

.product-item img:hover{
  transform: scale(1.05);
}

button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 1rem;
  user-select: none;
}

.product-list-mobile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: -1.5rem;
}

@media (max-width: 768px) {
  .product-item {
    min-width: 150px;
  }
}

@media (max-width: 480px) {
  .product-item {
    min-width: 120px;
    padding: 0.5rem;
  }
}
</style>
