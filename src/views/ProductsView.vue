<template>
  <div class="products">
    <h1 style="text-align: center; color: #007185;">Products</h1>
    
    <div class="category-dropdown" v-if="Object.keys(groupedProducts).length > 0">
      <select v-model="selectedCategory" @change="scrollToCategory">
        <option value="" disabled selected>Select a Category</option>
        <option v-for="category in Object.keys(groupedProducts)" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>

    <template v-for="(products, category) in filteredProducts" :key="category">
      <div v-if="products.length > 0" :id="categoryToId(category)" class="category-section">
        <h2 style="color: #007185; font-size: larger; text-align: center;">{{ category }}</h2>
        <div class="product-list-wrapper" v-if="!isMobile">
          <button class="prev" @click="scrollLeft(category)">‹</button>
          <div class="product-list" :data-category="category">
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
    </template>

    <div v-if="Object.keys(filteredProducts).every(key => filteredProducts[key].length === 0)">
      <p style="text-align: center; margin-top: 2rem; font-size: xx-large;">No products found.</p>
      <ContactsView />
    </div>
  </div>
</template>

<script>
import ContactsView from './ContactsView.vue';

export default {
  components: {
    ContactsView,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Sujani Handcrafted Cushion Cover', description: 'Price: 400', image: '/chanderi_saree.jpg', category: 'Summerfest Collection' },
        { id: 2, name: 'Amair Suit', description: 'Price: 4000', image: '/amaira_suit.jpg', category: 'Summerfest Collection' },
        { id: 3, name: 'Handloom Cotton Printed Dress', description: 'Price: 1799', image: '/handloom_dress.jpeg', category: 'Summerfest Collection' },
        { id: 4, name: 'black Strip Womens', description: 'Price: 1758', image: '/black_strip_western.jpeg', category: 'Summerfest Collection' },
        { id: 5, name: 'handloom women shrug', description: 'Price: 400', image: '/handloom_women_shrug.jpeg', category: 'Summerfest Collection' },
        { id: 6, name: 'house coat', description: 'Price: 4000', image: '/house_coat.jpeg', category: 'Summerfest Collection' },
        { id: 7, name: 'Pink Summer Dress', description: 'Price: 1799', image: '/pink_summer_dress.jpg', category: 'Summerfest Collection' },
        { id: 8, name: 'Jharcraft Cotton For Mens Kurta', description: 'Price: 1708', image: '/jharcraft_cotton_kurta.jpg', category: 'Summerfest Collection' },
        { id: 9, name: 'Handloom Cotton Printed Dress', description: 'Price: 1799', image: '/handcrafted_bamboo_earings.jpg', category: 'Women Accessories' },
        { id: 10, name: 'Aapan Kala Neclace Earing Set', description: 'Price: 1708', image: '/necklace_earring.jpeg', category: 'Women Accessories' },
        { id: 11, name: 'Blue Agate Gemstone Earing Set', description: 'Price: 999', image: '/blue_agate_gemstone.jpg', category: 'Women Accessories' },
        { id: 12, name: 'Aapan Kala tricolour necklace with Earings', description: 'Price: 759', image: '/aapan_kala.jpeg', category: 'Women Accessories' },
        { id: 13, name: 'Kilim Dhurries', description: 'Price: 6800', image: '/kilim_durries.jpg', category: 'Floor Coverings' },
        { id: 14, name: 'Multi Boxes Dhurrie', description: 'Price: 9000', image: '/multi_boxes_dhurries.jpg', category: 'Floor Coverings' },
        { id: 15, name: 'Hand Made Dhurrie Rug', description: 'Price: 7200', image: '/handmade_dhurri_ruggs.jpg', category: 'Floor Coverings' },
        { id: 16, name: 'Multi Color handloom carpet', description: 'Price: 5000', image:'/multi_color_handloom_carpet.jpg', category: 'Floor Coverings' },
        { id: 17, name: 'Kilim Dhurries', description: 'Price: 6800', image: '/kilim_durries.jpg', category: 'Floor Coverings' },
        { id: 18, name: 'Multi Boxes Dhurrie', description: 'Price: 9000', image: '/multi_boxes_dhurries.jpg', category: 'Floor Coverings' },
        { id: 19, name: 'Hand Made Dhurrie Rug', description: 'Price: 7200', image: '/handmade_dhurri_ruggs.jpg', category: 'Floor Coverings' },
        { id: 20, name: 'Multi Color handloom carpet', description: 'Price: 5000', image:'/multi_color_handloom_carpet.jpg', category: 'Floor Coverings' },
        { id: 21, name: 'Small Stool', description: 'Price: 400', image: '/small_stool.jpg', category: 'Furniture' },
        { id: 22, name: 'Zhula', description: 'Price: 1799', image: '/hangin_zhula.jpg', category: 'Furniture' },
        { id: 23, name: 'Bamboo Cane Baby Table', description: 'Price: 2300', image: '/bamboo_cane_baby.jpeg', category: 'Furniture' },
        { id: 24, name: 'Black Wood Chair', description: 'Price: 1000', image: '/chair.jpg', category: 'Furniture' },
        { id: 25, name: 'Saree Handcrafted Womens', description: 'Price: 2708', image: '/yellow_saree.jpg', category: 'Women Accessories' },
        { id: 26, name: 'Zhula', description: 'Price: 1799', image: '/hangin_zhula.jpg', category: 'Furniture' },
        { id: 27, name: 'Bamboo Cane Baby Table', description: 'Price: 2300', image: '/bamboo_cane_baby.jpeg', category: 'Furniture' },
        { id: 28, name: 'Black Wood Chair', description: 'Price: 1000', image: '/chair.jpg', category: 'Furniture' },
      ],
      isMobile: false,
      selectedCategory: '',
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
    filteredProducts() {
      const searchQuery = this.$route.query.search;
      if (!searchQuery) {
        return this.groupedProducts;
      } else {
        const query = searchQuery.toLowerCase().trim();
        const filtered = {};
        for (const category in this.groupedProducts) {
          filtered[category] = this.groupedProducts[category].filter(product =>
            product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
          );
        }
        return filtered;
      }
    },
  },
  methods: {
    redirectToContact() {
      this.$router.push('/contact');
    },
    scrollLeft(category) {
      const productList = document.querySelector(`.product-list[data-category="${category}"]`);
      productList.scrollBy({
        left: -productList.offsetWidth,
        behavior: 'smooth',
      });
    },
    scrollRight(category) {
      const productList = document.querySelector(`.product-list[data-category="${category}"]`);
      productList.scrollBy({
        left: productList.offsetWidth,
        behavior: 'smooth',
      });
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    categoryToId(category) {
      return category.replace(/\s+/g, '-').toLowerCase();
    },
    scrollToCategory() {
      if (this.selectedCategory) {
        const categoryId = this.categoryToId(this.selectedCategory);
        const categoryElement = document.getElementById(categoryId);
        if (categoryElement) {
          categoryElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
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

.category-dropdown {
  text-align: center;
  margin-bottom: 1rem;
}

.category-dropdown select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #007185;
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
  padding: 0rem;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 13rem;
  box-sizing: border-box;
  text-align: center;
  flex: 0 0 auto;
}

.product-item img {
  width: 13rem;
  height: 13rem;
  margin-bottom: 0rem;
}

.product-item img:hover {
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
  margin-left: 0rem;
}

@media (max-width: 768px) {
  .product-item {
    min-width: 13rem;
    align-items: center;
    align-self: center;
  }
}

@media (max-width: 480px) {
  .product-item {
    width: 14rem;
    padding: 0rem;
    align-self: center;
  }
  .product-item img {
    width: 14rem;
    height: 14rem;
  }
}
</style>
