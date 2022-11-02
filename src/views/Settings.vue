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
          <h1>Settings</h1>
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
          <div></div>
          <div class="col-12 form-text mt-2">Beware, you can't regain access once it's deleted&#10071;</div>
          <div class="col-12 mt-3">
            <button type="button" @click.prevent="deleteProfile" class="btn btn-danger shadow">Delete account</button>
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
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { db, deleteObject, storage, ref } from "@/firebase.js";
import { doc, getDoc, getDocs, updateDoc, deleteDoc, collection, setDoc, query, where } from "firebase/firestore";
import { getAuth, signOut, deleteUser, getIdToken } from "firebase/auth";
import router from "@/router";

const auth = getAuth();
const user = auth.currentUser;
const docRef = doc(db, "users", user.uid);

// collection ref
const colUsersRef = collection(db, "users");
const colPostsRef = collection(db, "posts");

// get users collection data
getDocs(colUsersRef)
  .then((snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users);
  })
  .catch((error) => {});

// get posts collection data
getDocs(colPostsRef)
  .then((snapshot) => {
    let posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });
    console.log(posts);
  })
  .catch((error) => {});

// queries
const q = query(colUsersRef, where("username", "==", "test2@gmail.com"));

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
          .catch(() => {});
      } else {
        alert("Please insert all your profile information!");
      }
    },

    deleteProfile() {
      alert("Are you sure");

      const userMail = user.email;
      const queryPosts = query(colPostsRef, where("username", "==", userMail));

      deleteUser(user)
        .then(() => {
          // User deleted.
          signOut(auth).then(() => {
            router.replace({ name: "login" });
          });
        })
        .catch((error) => {});
    },
  },
  computed: {},
};
</script>

<style scoped></style>
