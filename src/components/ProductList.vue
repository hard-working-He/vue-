<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - ${{ product.price }}
                <p>{{ product.description }}</p>
            </li>
        </ul>
        <form @submit.prevent="addProduct">
            <input v-model="newProduct.name" placeholder="Enter product name" />
            <input v-model="newProduct.price" type="number" placeholder="Enter product price" />
            <textarea v-model="newProduct.description" placeholder="Enter product description"></textarea>
            <button type="submit">Add Product</button>
        </form>
        <button @click="getProductDetail">Get Product Detail</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductList',
    data() {
        return {
            products: [],
            newProduct: { name: '', price: null, description: '' },
            productDetail: null
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            axios.get('/api/new/products')
              .then(response => {
                    this.products = response.data.data;
                })
              .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        addProduct() {
            axios.post('/api/new/products', this.newProduct)
              .then(response => {
                    this.products.push(response.data.data);
                    this.newProduct = { name: '', price: null, description: '' };
                })
              .catch(error => {
                    console.error('Error adding product:', error);
                });
        },
        getProductDetail() {
            const randomId = Math.floor(Math.random() * 10) + 100;
            axios.get(`/api/new/products/${randomId}`)
              .then(response => {
                    this.productDetail = response.data.data;
                    console.log('Product detail:', this.productDetail);
                })
              .catch(error => {
                    console.error('Error getting product detail:', error);
                });
        }
    }
};
</script>