<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="mt-2">Uploads &#x1F4D1;</h1>
      <div class="col-12 form-text">Your offers will be shown down below if you made any.</div>
      <table class="table table-striped table-bordered mt-4">
        <tbody class="table-group-divider">
          <tr>
            <th class="col-3">Title</th>
            <th class="col-3">Price</th>
            <th class="col-3">Cause</th>
            <th class="col-2">ID</th>
          </tr>
          <tr v-for="card in Cards" v-bind:key="card.id">
            <td>{{ card.title }}</td>
            <td>{{ card.price }}</td>
            <td>{{ card.cause }}</td>
            <td>{{ card.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import { getDocs, updateDoc, doc, deleteDoc, collection, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
const userMail = user.email;
const userUid = auth.currentUser.uid;

const colPostsRef = collection(db, "posts");
// queries
const queryPosts = query(colPostsRef, where("email", "==", userMail));

export default {
  data() {
    return {
      Cards: [],
    };
  },
  methods: {
    showUploads() {
      getDocs(collection(db, "posts"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const dat = doc.data();
            if (dat.email == userMail) {
              this.Cards.push({
                title: dat.title,
                price: dat.price,
                cause: dat.cause,
                id: dat.idd,
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
};
</script>
