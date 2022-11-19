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
                      <div class="form-text mb-3 mt-2">Please refresh the page and log in again for confirmation</div>

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
        <uploadList />
      </div>
    </div>

    <div class="row col-lg">
      <div class="col-2"></div>
      <div class="col-8">
        <!-- -->
        <form class="row g-3 col-md-12 mt-2 delete">
          <div class="col-12 form-text">Please copy and paste ID of an offer you want to delete &#x2B07;</div>
          <div class="col-4"></div>
          <div class="col-4">
            <input v-model="text" type="text" class="form-control" name="id" />
          </div>
          <div class="col-4"></div>
        </form>
        <div class="col-12 mt-3 mb-5">
          <button @click="deleteOffer()" class="btn btn-danger shadow">Delete</button>
        </div>
        <!-- -->
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import { doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { getAuth, signOut, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
import uploadList from "@/components/uploadList.vue";

const auth = getAuth();
const user = auth.currentUser;
const docRef = doc(db, "users", user.uid);

export default {
  name: "settings",
  data: () => {
    return {
      updateFirstName: "",
      updateLastName: "",
      username: "",
      password: "",
      text: "",
    };
  },
  components: {
    uploadList,
  },
  methods: {
    updateProfile() {
      const updateData = {
        firstName: this.updateFirstName,
        lastName: this.updateLastName,
      };
      if (this.updateFirstName != "" && this.updateLastName != "") {
        updateDoc(docRef, updateData)
          .then((docRef) => {
            this.$alert("Your profile information has been updated!");
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
                router.go({ name: "home" });
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
    async deleteOffer() {
      const postsRef = doc(db, "posts", this.text);
      const docSnap = await getDoc(postsRef);

      if (docSnap.exists()) {
        deleteDoc(doc(db, "posts", this.text)).then(() => {
          this.$alert("Your offer has been deleted. Please refresh the page!");
        });
      } else {
        this.$alert("Please input correct ID");
      }
    },
  },
};
</script>

<style scoped></style>
