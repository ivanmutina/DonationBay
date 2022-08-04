<template>
  <div class="card text-center">
    <div class="card-header">Naslov</div>
    <div class="card-body">
      <img class="card-img-top" :src="info" alt="" />
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae consectetur placeat quisquam adipisci similique, quia tenetur doloremque sequi minima officiis sapiente ullam voluptatibus eius illo cum dolores et
        autem.
        <a href="#" class="btn btn-primary mt-2">Doniraj!</a>
      </li>
    </ul>
    <div class="card-footer text-muted">2 days ago</div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "cardComp",
};
</script>
