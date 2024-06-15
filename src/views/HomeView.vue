<template>
  <div class="home">
    <FeaturedProducts />
    <ProductsView />
    <AppAbout />
    <ContactsView />
  </div>
</template>

<script>
import FeaturedProducts from '@/components/FeaturedProducts.vue';
import AppAbout from '@/components/AppAbout.vue';
import ContactsView from '@/views/ContactsView.vue';
import ProductsView from './ProductsView.vue';

export default {
  components: {
    FeaturedProducts,
    ProductsView,
    AppAbout,
    ContactsView,
  },
};
</script>

<style scoped>
.home {
  padding: 0; 
}

.about {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .home {
    padding: 0;
  }
  
  .about {
    padding: 1rem;
  }
}
</style>