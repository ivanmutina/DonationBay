<template>
  <div class="container row border gap-5 mb-5 align-items-center justify-content-center">
    <card-comp class="col-5 mt-5 mb-5" v-for="card in cards" :key="card" :info="card" />
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
