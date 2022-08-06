<template>
  <div class="container border row">
    <div class="col-6 mt-5"><card-comp v-for="card in cards" :key="card" :info="card" /></div>
  </div>
</template>

<script>
import cardComp from "@/components/cardComp.vue";

let cards = [];

cards = ["https://picsum.photos/id/1/600", "https://picsum.photos/id/2/600", "https://picsum.photos/id/3/600", "https://picsum.photos/id/4/600"];

export default {
  name: "dashboard",
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
