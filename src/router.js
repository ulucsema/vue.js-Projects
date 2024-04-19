import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ValidationList from './components/ValidationList.vue'; 
import ProductList from './components/ProductList.vue';
import MyBasket from './components/MyBasket.vue';

const routes = [
  {
    path: '/',
    name: 'ValidationList',
    component: ValidationList
  },
  {
    path: '/product-list', 
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/', 
    name: 'App',
    component: App
  },
  {
    path :'/my-basket',
    name: 'MyBasket',
    component: MyBasket
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
