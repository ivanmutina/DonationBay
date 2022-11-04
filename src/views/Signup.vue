<template>
  <div class="container-fluid">
    <div class="row align-items-center mt-2">
      <div class="col-lg-6">
        <!-- -->
        <form class="row g-3 col-md-12">
          <h1>Sign up! &#128274;</h1>
          <div class="col-md-6">
            <label for="name" class="form-label">First Name</label>
            <input v-model="firstName" type="text" class="form-control" id="name" required />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input v-model="lastName" type="text" class="form-control" id="lastName" required />
          </div>
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">Email</label>
            <input v-model="username" type="email" class="form-control" id="inputEmail" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="Should be atleast 6 characters" />
          </div>

          <div class="col-12 form-text mt-3">You will be automatically transferred if registration is successful.</div>

          <div class="col-12">
            <button type="button" @click.prevent="signupClick" class="btn btn-primary shadow mt-2">Create account</button>
          </div>
        </form>

        <!-- -->
      </div>

      <div class="col-lg-6">
        <img class="img-fluid hover-shadow" src="@/assets/signup.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth();

export default {
  name: "signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    };
  },
  methods: {
    // kada korisnik stisne button
    signupClick() {
      if (this.firstName != "" && this.lastName != "") {
        createUserWithEmailAndPassword(auth, this.username, this.password)
          .then((userCredential) => {
            // Signed in
            const userProfileData = {
              username: this.username,
              firstName: this.firstName,
              lastName: this.lastName,
              password: this.password,
            };

            this.$router.push({ name: "dashboard" });
            console.log("Successful registration!");

            // kreiram novi collection sa podacima profila
            const userProfile = setDoc(doc(db, "users", userCredential.user.uid), userProfileData);
          })
          .catch(() => {
            this.$alert("Registration failed. Please try again!");
          });
      } else {
        this.$alert("Please fill in the required information");
      }
    },
  },
};
</script>
