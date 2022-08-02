<template>
  <div class="container">
    <div class="row align-items-center mt-5">
      <div class="col">
        <img class="w-100 h-75 hover-shadow" src="@/assets/donate2.jpg" alt="" />
      </div>
      <div class="col border">
        <h1 display-1>Donation Bay</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est doloribus illum quae tempore consectetur temporibus molestias assumenda quaerat sapiente fugit ducimus aspernatur perferendis, deleniti quidem
          molestiae, cum dicta iste.
        </h3>
      </div>
    </div>
    <div class="row align-items-center mt-5">
      <!-- -->
      <div class="col border"><card-comp v-for="card in cards" :key="card" :info="card" /></div>
      <div class="col border"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import cardComp from "@/components/cardComp.vue";

let cards = [];

cards = ["https://picsum.photos/id/1/600", "https://picsum.photos/id/2/600", "https://picsum.photos/id/3/600"];

export default {
  name: "Home",
  data: () => {
    return {
      cards: cards,
    };
  },
  components: {
    cardComp,
  },
};
</script>

<style scoped></style>
