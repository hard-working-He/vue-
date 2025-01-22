<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <form @submit.prevent="addUser">
      <input v-model="newUser.name" placeholder="Enter name" />
      <button type="submit">Add User</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      newUser: { name: '' }
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('http://localhost:3000/api/users')
       .then(response => {
          this.users = response.data;
        })
       .catch(error => {
          console.error('Error fetching users111:', error);
        });
    },
    addUser() {
      axios.post('http://localhost:3000/api/users', this.newUser)
       .then(response => {
          this.users.push(response.data);
          this.newUser.name = '';
        })
       .catch(error => {
          console.error('Error adding user:', error);
        });
    }
  }
};
</script>