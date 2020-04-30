<template>
    <div class="container mb-5 mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
              <h1 class="display-4 text-center">Precios</h1>
              <p class="lead pb-5 text-center">
                Escoge uno de nuestros planes. <br>
                <strong>En estos momentos nuestros planes son 100% gratuitos!</strong>  <br>
                Aprovecha la oportunidad de registrarte sin costo!
              </p>

              <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Gratis</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mes</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>1 usuario</li>
                      <li>50 productos/variantes</li>
                      <li>Control de stock</li>
                      <li>Gestión de ventas</li>
                      <li>Actualizaciones y mejoras</li>
                    </ul>
                    <router-link :to="{ name: 'register' }" class="btn btn-lg btn-block btn-outline-primary">Registrate gratis!</router-link>
                  </div>
                </div>
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Pro</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">$4<sup>.99</sup> <small class="text-muted">/ mes</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>5 usuarios</li>
                      <li>Productos/variantes <strong>ilimitados</strong></li>
                      <li>Control de stock</li>
                      <li>Gestión de ventas</li>
                      <li>Actualizaciones y mejoras constantes</li>
                      <li>Soporte</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-primary" disabled>Comienza ahora</button>
                    <small>Deshabilitado por COVID</small>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        //
      }
    },
    methods : {
      //
    },
  }
</script>
