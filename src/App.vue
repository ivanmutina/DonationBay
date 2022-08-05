<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid mt-1">
        <a class="navbar-brand ms-3" href="/">
          <img src="@/assets/donation_bay_logo_transparent2.png" alt="" height="40" class="d-inline-block align-text-top" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="d-flex ms-5" role="search">
            <input class="form-control fas" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <ul class="navbar-nav ms-md-auto me-5">
            <li class="nav-item">
              <a class="nav-link" href="/home"><b>Test</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login"><b>Login</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup"><b>Sign up</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
