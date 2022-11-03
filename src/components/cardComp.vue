<template>
  <div class="col-xs-12 col-sm-4">
    <div class="card">
      <div class="img-card">
        <img :src="info.url" />
      </div>
      <div class="card-content">
        <h4 class="card-title">
          <a href="#" data-bs-toggle="modal" data-bs-target="#donateModal">{{ info.title }}</a>
        </h4>
        <p>
          <small class="text-muted">{{ postedFromNow }}</small>
        </p>
        <p>{{ info.description }}</p>
        <p><b>Price:</b> {{ info.price }}</p>
        <p><b>Cause:</b> {{ info.cause }}</p>
        <p><b>Pickup location:</b> {{ info.loc }}</p>
        <p><b>Contact:</b> {{ info.con }}</p>
      </div>
      <div class="card-read-more">
        <a href="#" class="btn btn-link btn-block" data-bs-toggle="modal" data-bs-target="#donateModal"> Donate! </a>
      </div>

      <!-- Modal -->
      <div class="modal fade modal-sm" id="donateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Thank you! &#128420;</h5>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md">
                    Thank you for deciding to do a good deed. &#x1F60D; Please contact the offerer.
                    <p></p>
                  </div>
                  <div class="col-12 form-text">The offer will be removed by the offerer after the agreement.</div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["info"],
  name: "cardComp",
  computed: {
    postedFromNow() {
      return moment(this.info.time).fromNow();
    },
  },
};
</script>

<style scoped>
.card {
  display: block;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.25s;
}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.img-card {
  width: 100%;
  height: 300px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: block;
  overflow: hidden;
}
.img-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.25s ease;
}
.card-content {
  padding: 15px;
  text-align: left;
}
.card-title {
  margin-top: 0px;
  font-weight: 700;
  font-size: 1.65em;
}
.card-title a {
  color: #000;
  text-decoration: none !important;
}
.card-read-more {
  border-top: 1px solid #d4d4d4;
}
.card-read-more a {
  text-decoration: none !important;
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: #078fcd;
}
</style>
