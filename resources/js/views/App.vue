<template>
  <div>
    <!-- nav -->
    <nav class="navbar navbar-expand-lg navbar-light border-bottom shadow-sm p-3">
      <a class="navbar-brand" href="/"><img src="/images/logo.png" alt="saletransit" class="img-responsive img-fluid"></a>
      <button class="navbar-toggler border-0" aria-expanded="false" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <!-- !logged -->
        <ul class="navbar-nav mr-md-3" v-if="!isLoggedIn" ref="dropdown">
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link text-dark" data-toggle="collapse" data-target=".navbar-collapse">Ingresar</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="btn btn-outline-primary" data-toggle="collapse" data-target=".navbar-collapse">Registrate</router-link>
          </li>
        </ul>

        <!-- logged -->
        <ul class="navbar-nav mr-md-3" v-if="isLoggedIn" ref="dropdown">
          <li class="nav-item"><router-link :to="{ name: 'board' }" class="nav-link text-dark">Hola, {{name}}</router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'board' }" class="nav-link text-dark">Panel</router-link></li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ventas
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'sales.new' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Nueva Venta</router-link>
              <router-link :to="{ name: 'sales' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Ventas</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Inventario
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'stock' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Stock</router-link>
              <router-link :to="{ name: 'movements' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Movimientos</router-link>
              <div class="dropdown-divider"></div>
              <router-link :to="{ name: 'items' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Items</router-link>
              <router-link :to="{ name: 'item.new' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Nuevo Item</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Herramientas
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'categories' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Categorias</router-link>
              <router-link :to="{ name: 'stores' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Tiendas</router-link>
              <router-link :to="{ name: 'suppliers' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Proveedores</router-link>
              <router-link :to="{ name: 'taxes' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Impuestos</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <font-awesome-icon icon="user-cog" />
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'profile' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Mi Perfil</router-link>
              <router-link :to="{ name: 'logout' }" class="dropdown-item text-dark" data-toggle="collapse" data-target=".navbar-collapse">Salir</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- end nav -->

    <main>
      <!-- content -->
      <router-view></router-view>

      <footer class="pt-4 pt-md-5 border-top">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md">
              <small class="d-block mb-3 text-muted">SaleTransit &copy; 2020</small>
            </div>
            <div class="col-6 col-md">
              <h5>Recursos</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="/register">Registrate Gratis</a></li>
                <li><router-link :to="{ name: 'prices' }" class="text-muted">Precios</router-link></li>
                <!-- <li><a class="text-muted" href="#">Privacidad</a></li>
                <li><a class="text-muted" href="#">Políticas de Cookies</a></li> -->
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Nosotros</h5>
              <ul class="list-unstyled text-small">
                <li><router-link :to="{ name: 'about' }" class="text-muted">Quienes somos</router-link></li>
                <li><a class="text-muted" href="#">Contactanos</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </main>
  </div>
</template>

<script type="text/javascript">
export default {
  data(){
      return {
          expandMenu : false,
          isLoggedIn : null,
          name : null,
          id: null,
      }
  },
  mounted(){
      this.isLoggedIn = localStorage.getItem('jwt')
      this.name = localStorage.getItem('user')
      this.id = localStorage.getItem('user_id')
  }
}
</script>
