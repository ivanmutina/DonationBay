<template>
  <div class="container row border gap-5 mt-5 align-items-center justify-content-center">
    <section class="wrapper">
      <div class="container-fostrap">
        <div class="content">
          <div class="container">
            <div class="row">
              <card-comp class="col-5 mt-2 mb-3" v-for="card in cards" :key="card" :info="card" />
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

let cards = [];

// cards = ["https://picsum.photos/id/1/400", "https://picsum.photos/id/2/400", "https://picsum.photos/id/3/400", "https://picsum.photos/id/4/400"];

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
</style>
