<template>
  <header>
    <div class="container">
      <h1>Handmade Crafts</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
      <!-- Search Bar -->
      <div class="search-bar">
        <input type="text" v-model="searchQuery" @keyup.enter="performSearch" placeholder="Search products..." />
        <button @click="performSearch">Search</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    performSearch() {
      if (this.searchQuery.trim() !== '') {
        this.$router.push('/products?search=' + this.searchQuery.trim());
        this.searchQuery = '';
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}

h1 {
  margin: 0;
}

nav {
  flex-grow: 1rem;
  margin-left: 1rem;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
}

nav li {
  margin-left: 1rem;
  white-space: nowrap;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-bar button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #007185;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #005f68;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  nav {
    margin-left: 0;
    width: 100%;
  }

  nav ul {
    justify-content: flex-start;
    flex-wrap: nowrap;
    justify-content: center;
  }

  nav li {
    margin-left: 0.7rem;
    margin-top:1rem;
  }

  .search-bar {
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }

  .search-bar input {
    width: 70%;
  }

  .search-bar button {
    width: 30%;
  }
}
</style>
