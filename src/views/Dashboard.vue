<template>
  <div class="container row gap-5 align-items-center justify-content-center">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <p>Upload image of your stuff you wish to give as a donation.</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Start giving away!</button>
        <!-- Modal -->
        <div class="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Upload</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container-fluid border">
                  <div class="row border">
                    <div class="col-md-3 border"></div>
                    <div class="col-md border">
                      <form @submit.prevent="postNewImage" class="border mt-3" id="test">
                        <input v-model="newImageUrl" type="text" class="form-control ml-2 mb-3" placeholder="Enter the image URL" id="imageUrl" />
                        <croppa :width="350" :height="350" placeholder="Choose the image" v-model="imageReference"></croppa>
                        <br />
                        <label for="imageDescription" class="mt-2 mb-2">Description</label>
                        <input v-model="newImageDescription" type="text" class="form-control ml-2" placeholder="Enter the image description" id="imageDescription" />
                        <button type="submit" class="btn btn-primary mt-3">
                          Upload
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                          </svg>
                        </button>
                      </form>
                    </div>
                    <div class="col-md-3 border"></div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <!-- GRANICA -->
        <!--
        <form class="row border g-3 col-md-12" @submit.prevent="postNewImage">
          
          
          <div class="col-3"></div>
          <div class="col form-group">
             <input v-model="newImageUrl" type="text" class="form-control ml-2" placeholder="Enter the image URL" id="imageUrl" /> 
            <croppa :width="288" :height="290" placeholder="Choose the image" v-model="imageReference"></croppa>
            <div class="form-group">
              <label for="imageDescription" class="mt-2 mb-2">Description</label>
              <input v-model="newImageDescription" type="text" class="form-control ml-2" placeholder="Enter the image description" id="imageDescription" />
            </div>
          </div>
          <div class="col-3"></div>

          <div class="col-12 mt-4">
            <button type="submit" class="btn btn-primary">
              Upload
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
              </svg>
            </button>
          </div>
        </form> -->
        <!-- -->
      </div>

      <div class="col-lg-6">
        <img class="img-fluid hover-shadow" src="@/assets/upload.png" alt="" />
      </div>
      <p>
        Or scroll down and find something for yourself!
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
        </svg>
      </p>

      <hr />
    </div>

    <section class="wrapper">
      <div class="container-fostrap">
        <div class="content">
          <div class="container">
            <div class="row">
              <card-comp class="col-5 mb-3" v-for="card in cards" :key="card.id" :info="card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <card-comp class="col-5 mt-5 mb-5" v-for="card in cards" :key="card" :info="card" /> -->
</template>

<script>
import cardComp from "@/components/cardComp.vue";
import { initializeApp, db, getStorage, ref, uploadBytes, getDownloadURL } from "@/firebase.js";
import { doc, collection, addDoc, getDocs, orderBy, query, limit } from "firebase/firestore";
import store from "@/store.js";

let cards = [];

export default {
  name: "dashboard",
  data: () => {
    return {
      cards: [],
      store,
      newImageUrl: "",
      newImageDescription: "",
      imageReference: null,
    };
  },
  components: {
    cardComp,
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("Firebase dohvat... ");

      // referenciram se na collection
      const docRef = collection(db, "posts");

      getDocs(query(docRef, orderBy("posted_at", "desc"), limit(12))).then((query) => {
        this.cards = []; // isprazni kartice
        query.forEach((doc) => {
          // da ne pozivamo data tri puta jer su ostali podaci u data, ne id
          const data = doc.data();

          this.cards.push({
            id: doc.id,
            time: data.posted_at,
            description: data.desc,
            url: data.url,
          });
        });
      });
    },
    // poziva se kada kliknemo upload
    postNewImage() {
      console.log("Upload button clicked");

      // pretvaranje bytova u pravu sliku
      this.imageReference.generateBlob((blobData) => {
        console.log(blobData);

        // putanja + ime korisnika + "/" + ime slike
        let imageName = "posts/" + store.currentUser + "/" + Date.now() + ".png";

        const storage = getStorage();
        const storageRef = ref(storage, imageName);

        // 'file' comes from the Blob
        uploadBytes(storageRef, blobData)
          .then((result) => {
            console.log(result);
            // uspjesno spremanje i dobijanje URL-a slike
            getDownloadURL(storageRef).then((url) => {
              console.log("Javni url: ", url);

              const imageDescription = this.newImageDescription;

              // Add a new document with a generated id.
              const docRef = addDoc(collection(db, "posts"), {
                url: url,
                desc: imageDescription,
                email: store.currentUser,
                posted_at: Date.now(),
              })
                .then(() => {
                  console.log("Spremljeno", doc);
                  this.newImageDescription = "";
                  this.imageReference.remove();

                  // dohvacam da se kartica odmah pokaze pri postanju
                  this.getPosts();
                })
                .catch(() => {
                  console.log("Neuspjesan upload");
                });
            });
          })
          .catch(() => {
            console.log("Error");
          });
      });
    },
  },
};
</script>

<style scoped>
html,
body {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.wrapper {
  display: table;
  height: 100%;
  width: 100%;
}

.container-fostrap {
  display: table-cell;
  padding: 1em;
  text-align: center;
  vertical-align: middle;
}
.fostrap-logo {
  width: 100px;
  margin-bottom: 15px;
}
h1.heading {
  color: #fff;
  font-size: 1.15em;
  font-weight: 900;
  margin: 0 0 0.5em;
  color: #505050;
}
@media (min-width: 450px) {
  h1.heading {
    font-size: 3.55em;
  }
}
@media (min-width: 760px) {
  h1.heading {
    font-size: 3.05em;
  }
}
@media (min-width: 900px) {
  h1.heading {
    font-size: 3.25em;
    margin: 0 0 0.3em;
  }
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
</style>
