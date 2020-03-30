<template>
  <div>
    <!-- nav -->
    <nav class="navbar navbar-expand-lg navbar-light border-bottom shadow-sm p-3 mb-3">
      <!-- <a class="navbar-brand" href="/"><img src="/static/images/logo.png" alt="guia de recetas"></a> -->
      <router-link :to="{name: 'home'}" class="navbar-brand">holded</router-link>
      <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <!-- !logged -->
        <ul class="navbar-nav mr-md-3" v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link :to="{name: 'home'}" class="nav-link text-dark">holded</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link text-dark">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="btn btn-outline-primary">Register</router-link>
          </li>
        </ul>

        <!-- logged -->
        <ul class="navbar-nav mr-md-3"v-if="isLoggedIn">
          <li class="nav-item"><router-link :to="{ name: 'board' }" class="nav-link text-dark">Hi, {{name}}</router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'board' }" class="nav-link text-dark">Board</router-link></li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sales
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'sales.new' }" class="dropdown-item text-dark">New Sale</router-link>
              <router-link :to="{ name: 'sales' }" class="dropdown-item text-dark">Sales</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Items
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'items' }" class="dropdown-item text-dark">Items</router-link>
              <router-link :to="{ name: 'item.new' }" class="dropdown-item text-dark">New Item</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stock
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'stock' }" class="dropdown-item text-dark">Stock</router-link>
              <router-link :to="{ name: 'movements' }" class="dropdown-item text-dark">Movements</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tools
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'categories' }" class="dropdown-item text-dark">Categories</router-link>
              <router-link :to="{ name: 'stores' }" class="dropdown-item text-dark">Stores</router-link>
              <router-link :to="{ name: 'suppliers' }" class="dropdown-item text-dark">Suppliers</router-link>
              <router-link :to="{ name: 'taxes' }" class="dropdown-item text-dark">Taxes</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <font-awesome-icon icon="user-cog" />
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'logout' }" class="dropdown-item text-dark">Logout</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- end nav -->

    <main class="container">
      <!-- content -->
        <router-view></router-view>

      <!-- footer -->
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
          <div class="row">
            <div class="col-12 col-md">
              <img class="mb-2" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24">
              <small class="d-block mb-3 text-muted">&copy; 2017-2019</small>
            </div>
            <div class="col-6 col-md">
              <h5>Features</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Cool stuff</a></li>
                <li><a class="text-muted" href="#">Random feature</a></li>
                <li><a class="text-muted" href="#">Team feature</a></li>
                <li><a class="text-muted" href="#">Stuff for developers</a></li>
                <li><a class="text-muted" href="#">Another one</a></li>
                <li><a class="text-muted" href="#">Last time</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Resource</a></li>
                <li><a class="text-muted" href="#">Resource name</a></li>
                <li><a class="text-muted" href="#">Another resource</a></li>
                <li><a class="text-muted" href="#">Final resource</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Team</a></li>
                <li><a class="text-muted" href="#">Locations</a></li>
                <li><a class="text-muted" href="#">Privacy</a></li>
                <li><a class="text-muted" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>
      <!-- end footer -->
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
