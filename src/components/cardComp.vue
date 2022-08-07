<template>
  <div class="col-xs-12 col-sm-4">
    <div class="card">
      <a class="img-card" href="#">
        <img :src="info" />
      </a>
      <div class="card-content">
        <h4 class="card-title">
          <a href="#"> Bootstrap 3 Carousel FadeIn Out Effect </a>
        </h4>
        <p>Tutorial to make a carousel bootstrap by adding more wonderful effect fadein ...</p>
        <p><b>Price:</b></p>
        <p><b>Cause:</b></p>
        <p><b>Pickup location:</b></p>
      </div>
      <div class="card-read-more">
        <a href="#" class="btn btn-link btn-block"> Donate! </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "cardComp",
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
  height: 200px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: block;
  overflow: hidden;
}
.img-card img {
  width: 100%;
  height: 200px;
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
