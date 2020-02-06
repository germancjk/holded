<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
          <router-link :to="{name: 'home'}" class="navbar-brand">holded</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto"></ul>
            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
              <!-- Authentication Links -->
              <router-link :to="{ name: 'login' }" class="nav-link" v-if="!isLoggedIn">Login</router-link>
              <router-link :to="{ name: 'register' }" class="nav-link" v-if="!isLoggedIn">Register</router-link>
              <!-- Menu Links -->
              <li class="nav-link" v-if="isLoggedIn"> Hi, {{name}}</li>
              <router-link :to="{ name: 'board' }" class="nav-link" v-if="isLoggedIn">Board</router-link>
              <router-link :to="{ name: 'items' }" class="nav-link" v-if="isLoggedIn">Items</router-link>
              <router-link :to="{ name: 'stock' }" class="nav-link" v-if="isLoggedIn">Stock</router-link>
              <router-link :to="{ name: 'item.new' }" class="nav-link" v-if="isLoggedIn">New</router-link>
              <li class="nav-item dropdown" v-if="isLoggedIn">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tools
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link :to="{ name: 'categories' }" class="dropdown-item" v-if="isLoggedIn">Categories</router-link>
                  <router-link :to="{ name: 'stores' }" class="dropdown-item" v-if="isLoggedIn">Stores</router-link>
                  <router-link :to="{ name: 'taxes' }" class="dropdown-item" v-if="isLoggedIn">Taxes</router-link>
                  <router-link :to="{ name: 'suppliers' }" class="dropdown-item" v-if="isLoggedIn">Suppliers</router-link>
                </div>
              </li>
              <router-link :to="{ name: 'logout' }" class="nav-link" v-if="isLoggedIn">Logout</router-link>
            </ul>
          </div>
        </div>
    </nav>
    <main class="py-4">
        <router-view></router-view>
    </main>
  </div>
</template>

<script type="text/javascript">
export default {
  data(){
      return {
          isLoggedIn : null,
          name : null
      }
  },
  mounted(){
      this.isLoggedIn = localStorage.getItem('jwt')
      this.name = localStorage.getItem('user')
  }
}
</script>
