<template>
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
            <td><a type="submit" @click.prevent="deleteUpload()"> &#x274C; </a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import { getDocs, updateDoc, deleteDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
const userMail = user.email;

export default {
  data() {
    return {
      uploadCards: [],
    };
  },
  methods: {
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
    deleteUpload() {},
  },
  created: function () {
    this.showUploads();
  },
};
</script>
