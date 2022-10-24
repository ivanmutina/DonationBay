<template>
  <div class="container-fluid">
    <div class="row align-items-center mt-2">
      <!-- -->
      <div class="col-lg-6">
        <img class="img-fluid hover-shadow" src="@/assets/settings.png" alt="" />
      </div>

      <div class="col-lg-6">
        <!-- -->
        <form class="row g-3 col-md-12">
          <h1>
            Hello
            <span style="color: blue">Ivan</span>
          </h1>
          <div class="col-12 form-text">If you want to change your profile information please fill out the form below &#128274;</div>
          <div class="col-md-6">
            <label for="name" class="form-label">First Name</label>
            <input v-model="updateFirstName" type="text" class="form-control" id="name" placeholder="" />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input v-model="updateLastName" type="text" class="form-control" id="lastname" placeholder="" />
          </div>

          <div class="col-md-6">
            <label for="inputCountry" class="form-label">Country</label>
            <input v-model="updateCountry" type="text" class="form-control" id="inputcountry" placeholder="" />
          </div>
          <div class="col-md-4">
            <label for="inputCity" class="form-label">City</label>
            <input v-model="updateCity" type="text" class="form-control" id="inputcity" placeholder="" />
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input v-model="updateZip" type="text" class="form-control" id="inputzip" placeholder="" />
          </div>

          <div class="col-12 mt-4">
            <button type="button" @click.prevent="updateProfile" class="btn btn-primary shadow">Confirm changes</button>
          </div>
        </form>
        <!-- -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="mt-2">Your uploads</h1>
        <table class="table table-striped table-bordered mt-4">
          <tbody class="table-group-divider">
            <tr>
              <th>Title</th>

              <th>Cause</th>
              <th>Pickup location</th>
            </tr>
            <tr>
              <td>f</td>

              <td>d</td>
              <td>
                <div>
                  <button type="button" @click.prevent="deleteProfile" class="btn btn-danger shadow">Delete profile</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth, signOut, deleteUser } from "firebase/auth";
import router from "@/router";

const auth = getAuth();
const user = auth.currentUser;
const docRef = doc(db, "users", user.uid);

const postRef = doc(db, "posts", "test");

/* dohvacam informacije o korisniku

let ime = getDoc(doc(db, "users", user.uid)).then((docSnap) => {
  console.log(docSnap.data().firstName);
});

*/

export default {
  name: "settings",
  data() {
    return {
      updateFirstName: "",
      updateLastName: "",
      updateCountry: "",
      updateCity: "",
      updateZip: "",
    };
  },
  methods: {
    updateProfile() {
      const updateData = {
        firstName: this.updateFirstName,
        lastName: this.updateLastName,
        country: this.updateCountry,
        city: this.updateCity,
        zipcode: this.updateZip,
      };

      if (this.updateFirstName != "" && this.updateLastName != "" && this.updateCountry != "" && this.updateCity != "" && this.updateZip != "") {
        updateDoc(docRef, updateData)
          .then((docRef) => {
            console.log("Values has been updated");
            this.updateFirstName = "";
            this.updateLastName = "";
            this.updateCountry = "";
            this.updateCity = "";
            this.updateZip = "";
          })
          .catch((error) => {});
      } else {
        alert("Please insert all your profile information!");
      }
    },

    printProfile() {},

    deleteProfile() {
      deleteUser(user)
        .then(() => {
          console.log("User has been deleted!");
          router.replace({ name: "login" });
        })
        .catch((error) => {});
    },

    /*
    deleteOffer(doc) {
      if (confirm("Are you sure?")) {
        deleteDoc(postRef)
          .then(() => {
            console.log("Entire Document has been deleted successfully.");
          })
          .catch((error) => {
            console.log("Error!");
          });
      } else {
      }
    },*/
  },
  computed: {},
};
</script>

<style scoped></style>
