<template>
  <div class="container-fluid align-items-center justify-content-center">
    <div class="row align-items-center mt-2">
      <div class="col-lg-6">
        <form class="row g-3 col-md-12" @submit.prevent="postNewImage">
          <!-- -->
          <p>Upload image of your stuff you wish to give as a donation.</p>
          <div class="col-3"></div>
          <div class="col form-group">
            <label for="imageUrl" class="mb-2">Image URL</label>
            <input v-model="newImageUrl" type="text" class="form-control ml-2" placeholder="Enter the image URL" id="imageUrl" />
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
        </form>
        <!-- -->
      </div>

      <div class="col-lg-6">
        <img class="img-fluid hover-shadow" src="@/assets/upload.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      newImageUrl: "",
      newImageDescription: "",
    };
  },
  methods: {
    postNewImage() {
      console.log("Radi");

      const imageUrl = "";
      const imageDescription = "";
    },
  },
};
</script>
