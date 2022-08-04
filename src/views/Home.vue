<template>
  <div class="row">
    <div class="col-8"><card-comp v-for="card in cards" :key="card" :info="card" /></div>
    <div class="col-4"></div>
  </div>
</template>

<script>
import cardComp from "@/components/cardComp.vue";

let cards = [];

cards = ["https://picsum.photos/id/1/600", "https://picsum.photos/id/2/600", "https://picsum.photos/id/3/600", "https://picsum.photos/id/4/600"];

export default {
  name: "home",
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
