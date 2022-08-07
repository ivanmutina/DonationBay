<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid mt-1">
        <router-link v-if="!store.currentUser" class="navbar-brand ms-3" to="/">
          <img src="@/assets/donation_bay_logo_transparent2.png" alt="" height="40" class="d-inline-block align-text-top" />
        </router-link>
        <router-link v-if="store.currentUser" class="navbar-brand ms-3" to="/dashboard">
          <img src="@/assets/donation_bay_logo_transparent2.png" alt="" height="40" class="d-inline-block align-text-top" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="d-flex ms-5" role="search">
            <input class="form-control fas" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <ul class="navbar-nav ms-md-auto me-5">
            <li v-if="!store.currentUser" class="nav-item">
              <router-link class="nav-link" to="/login"><b>Login</b></router-link>
            </li>
            <li v-if="!store.currentUser" class="nav-item">
              <router-link class="nav-link" to="/signup"><b>Sign Up</b></router-link>
            </li>
            <li v-if="store.currentUser" class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><b> Profile </b></a>
              <ul class="dropdown-menu" style="right: 0; left: auto">
                <li>
                  <a class="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/upload">Upload</router-link>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" @click.prevent="logoutClick()" href="#">Sign Out </a>
                </li>
              </ul>
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

<script>
import store from "@/store";
import { initializeApp } from "@/firebase.js";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";

const auth = getAuth();

// promjene stanja korisnika
onAuthStateChanged(auth, (user) => {
  // sadrzi trenutnu rutu / provjerava stanje
  const currentRoute = router.currentRoute;

  if (user) {
    // user is signed in
    console.log("***", user.email + " is signed in.");
    store.currentUser = user.email;
    const uid = user.uid;

    if (currentRoute.meta.needsUser) {
      router.replace({ name: "home" });
    } else {
      router.replace({ name: "dashboard" });
    }
  } else {
    // user is not signed in
    console.log("*** No user");
    store.currentUser = null;
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logoutClick() {
      signOut(auth).then(() => {
        this.$router.replace({ name: "login" });
      });
    },
  },
};
</script>

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
