<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="mt-4 mt-md-4 mt-lg-0">Uploads &#x1F4D1;</h1>
      <div class="col-12 form-text">Your offers will be shown down below if you made any.</div>
      <table class="table table-striped table-bordered mt-4">
        <tbody class="table-group-divider">
          <tr>
            <th class="col-3">Title</th>
            <th class="col-3">Price</th>
            <th class="col-3">Cause</th>
            <th class="col-3">ID</th>
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
import { getDocs, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
const userMail = user.email;

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
                id: dat.post_id,
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
