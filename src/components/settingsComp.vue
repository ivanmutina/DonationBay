<template>
  <h1>Hello {{ sett.firstName }}</h1>
</template>

<script>
export default {
  props: ["sett"],
  name: "settingsComp",
};
</script>

<style scoped></style>
