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
            Hello <span v-for="cardz in profileCards" v-bind:key="cardz.id" style="color: #0d6efd"> {{ cardz.name }}</span>
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

          <div class="col-12 mt-4">
            <button type="button" @click.prevent="updateProfile" class="btn btn-primary shadow">Confirm changes</button>
          </div>
          <div></div>
          <div class="col-12 form-text mt-2">Beware, you can't regain access once it's deleted&#10071;</div>
          <div class="col-12 mt-3">
            <button type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" class="btn btn-danger shadow">Delete account</button>
          </div>
        </form>

        <!-- Modal -->
        <div class="modal fade modal-lg" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-body">
                <div class="container-fluid">
                  <form class="row g-3 col-md-12">
                    <!-- -->
                    <div class="col-3"></div>
                    <div class="col">
                      <div class="form-text mb-3 mt-2">Please log in again for confirmation</div>

                      <label for="inputEmail" class="form-label">Email address</label>
                      <input v-model="username" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />

                      <label for="inputPass" class="form-label mt-3">Password</label>
                      <input v-model="password" type="password" class="form-control" id="inputPass" />
                    </div>
                    <div class="col-3"></div>

                    <div class="col-12 mt-4">
                      <button type="button" data-bs-dismiss="modal" @click.prevent="loginAndDelete()" class="btn btn-danger shadow mb-3">Delete account</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- -->
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <h1 class="mt-2">Your uploads &#x1F4D1;</h1>
        <table class="table table-striped table-bordered mt-4">
          <tbody class="table-group-divider">
            <tr>
              <th class="col-3">Title</th>
              <th class="col-3">Price</th>
              <th class="col-3">Cause</th>
              <th class="col-2">Delete?</th>
            </tr>
            <tr v-for="card in uploadCards" v-bind:key="card.id">
              <td>{{ card.title }}</td>
              <td class="mt-2">{{ card.price }}</td>
              <td class="mt-2">{{ card.cause }}</td>
              <td><a type="submit" @click.prevent=""> &#x274C; </a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { db, deleteObject, storage, ref } from "@/firebase.js";
import { doc, getDoc, getDocs, updateDoc, deleteDoc, collection, query, where } from "firebase/firestore";
import { getAuth, signOut, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
import store from "@/store.js";

const auth = getAuth();
const user = auth.currentUser;

const docRef = doc(db, "users", user.uid);

// collection ref
const colUsersRef = collection(db, "users");
const colPostsRef = collection(db, "posts");

// queries
const q = query(colUsersRef, where("username", "==", "test2@gmail.com"));
const userMail = user.email;
const queryPosts = query(colPostsRef, where("username", "==", userMail));

export default {
  name: "settings",
  data: () => {
    return {
      profileCards: [],
      updateFirstName: "",
      updateLastName: "",
      username: "",
      password: "",
      uploadCards: [],
      store,
    };
  },
  methods: {
    showFirstName() {
      getDocs(collection(db, "users"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const dat = doc.data();
            if (dat.username == userMail) {
              this.profileCards.push({
                name: dat.firstName,
                id: dat.it,
              });
            }
          });
        })
        .catch(() => {
          console.log("Error");
        });
    },

    updateProfile() {
      const updateData = {
        firstName: this.updateFirstName,
        lastName: this.updateLastName,
      };
      if (this.updateFirstName != "" && this.updateLastName != "") {
        updateDoc(docRef, updateData)
          .then((docRef) => {
            console.log("Values has been updated");
            this.updateFirstName = "";
            this.updateLastName = "";
          })
          .catch(() => {});
      } else {
        this.$alert("Please insert all your profile information!");
      }
    },

    loginAndDelete() {
      signInWithEmailAndPassword(auth, this.username, this.password)
        .then((result) => {
          // Signed in
          deleteUser(user)
            .then(() => {
              // User deleted.
              signOut(auth).then(() => {
                router.replace({ name: "home" });
              });
            })
            .catch(() => {
              console.log("Error");
            });
        })
        .catch(() => {
          this.$alert("Confirmation failed!");
        });
    },

    showUploads() {
      getDocs(collection(db, "posts"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const dat = doc.data();
            if (dat.email == userMail) {
              this.uploadCards.push({
                title: dat.title,
                price: dat.price,
                cause: dat.cause,
                id: dat.it,
              });
            }
          });
        })
        .catch(() => {
          console.log("Error");
        });
    },
  },
  created: function () {
    this.showUploads();
  },
  created: function () {
    this.showFirstName();
  },
};
</script>

<style scoped></style>
