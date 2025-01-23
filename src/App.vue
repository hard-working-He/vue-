<template>
  <div id="app">
    <UserList />
    <ProductList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import ProductList from './components/ProductList.vue';
export default {
  name: 'App',
  components: {
    UserList,ProductList
  }
};
</script>