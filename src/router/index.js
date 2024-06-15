import Home from '@/views/HomeView.vue';
import Products from '@/views/ProductsView.vue';
import Contact from '@/views/ContactsView.vue';
import About from '@/components/AppAbout.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
