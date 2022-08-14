<template>
  <div class="container-fluid">
    <div class="row align-items-center mt-2">
      <div class="col-lg-6">
        <!-- -->
        <form class="row g-3 col-md-12">
          <h1>Sign up!</h1>
          <div class="col-md-6">
            <label for="name" class="form-label">First Name</label>
            <input v-model="firstName" type="text" class="form-control" id="name" />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input v-model="lastName" type="text" class="form-control" id="lastName" />
          </div>
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">Email</label>
            <input v-model="username" type="email" class="form-control" id="inputEmail" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="Should be atleast 6 characters" />
          </div>

          <div class="col-md-6">
            <label for="inputCountry" class="form-label">Country</label>
            <input v-model="country" type="text" class="form-control" id="inputCountry" />
          </div>
          <div class="col-md-4">
            <label for="inputCountry" class="form-label">City</label>
            <input v-model="city" type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input v-model="zipCode" type="text" class="form-control" id="inputZip" />
          </div>

          <div class="col-12 form-text">You'll be automatically transferred to dashboard if you registered successfully.</div>

          <div class="col-12">
            <button type="button" @click.prevent="signupClick" class="btn btn-primary shadow">Create account</button>
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
import { initializeApp, db } from "@/firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import store from "@/store.js";

const auth = getAuth();

export default {
  name: "signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      country: "",
      city: "",
      zipCode: "",
    };
  },
  methods: {
    // kada korisnik stisne button
    signupClick() {
      createUserWithEmailAndPassword(auth, this.username, this.password)
        .then((userCredential) => {
          // Signed in
          const userProfileData = {
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            country: this.country,
            city: this.city,
            zipcode: this.zipCode,
          };

          this.$router.push({ name: "dashboard" });
          console.log("Uspjesna reg");
          const user = userCredential.user;

          // kreiram novi collection sa podacima profila
          const userProfile = setDoc(doc(db, "users", userCredential.user.uid), userProfileData);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },
};
</script>
