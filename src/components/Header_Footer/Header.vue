<template>
  <div class="sticky-top">
    <nav id="nav" class="navbar navbar-expand-sm navbar-light bg-dark">
      <div class="container">
        <router-link class="navbar-brand text-white font-weight-bold" to="/">afrimusic-spot</router-link>
        <button
          class="navbar-toggler bg-light d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0 font-weight-bold">
            <li class="nav-item">
              <router-link class="nav-link text-light" to="premium">
                Premium
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Help</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Download</a>
            </li>
            <li class="nav-item">
              <div class="nav-link text-white">|</div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Sign up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
};
</script>
