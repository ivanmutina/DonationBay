<template border>
  <div class="row align-items-center mt-5">
    <div class="col">
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <img src="https://picsum.photos/600" alt="" />
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae consectetur placeat quisquam adipisci similique, quia tenetur doloremque sequi minima officiis sapiente ullam voluptatibus eius illo cum
            dolores et autem.
            <a href="#" class="btn btn-primary mt-2">Doniraj!</a>
          </li>
        </ul>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center">
        <div class="card-header">Featured</div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae consectetur placeat quisquam adipisci similique, quia tenetur doloremque sequi minima officiis sapiente ullam voluptatibus eius illo cum
            dolores et autem.
            <a href="#" class="btn btn-primary mt-2">Doniraj!</a>
          </li>
        </ul>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped></style>
