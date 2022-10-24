<template>
  <div class="container-fluid">
    <div class="row align-items-center mt-2">
      <!-- -->
      <div class="col-lg-6">
        <img class="img-fluid hover-shadow" src="@/assets/login.svg" alt="" />
      </div>

      <div class="col-lg-6">
        <form class="row g-3 col-md-12">
          <!-- -->
          <h1 class="m-auto">Hey again &#128273;</h1>
          <div class="col-3"></div>
          <div class="col">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            <label for="exampleInputPassword1" class="form-label mt-3">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="col-3"></div>

          <div class="col-12 mt-4">
            <button type="button " @click.prevent="loginClick()" class="btn btn-primary shadow">Login</button>
          </div>
        </form>
        <!-- -->
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    loginClick() {
      signInWithEmailAndPassword(auth, this.username, this.password)
        .then((result) => {
          // Signed in
          console.log("Uspjesna prijava");
          this.$router.replace({ name: "dashboard" });
        })
        .catch(() => {
          alert("Login failed. Please try again!");
        });
    },
  },
};
</script>
