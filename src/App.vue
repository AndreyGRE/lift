<template>
  <lift :arr_floors="array_floors"></lift>

  <div class="line l_1"></div>
  <move_btn class="level_1" :likes="1" @addFloor="addFloorOnArray"></move_btn>

  <div class="line l_2"></div>
  <move_btn class="level_2" :likes="2" @addFloor="addFloorOnArray"></move_btn>

  <div class="line l_3"></div>
  <move_btn class="level_3" :likes="3" @addFloor="addFloorOnArray"></move_btn>

  <div class="line l_4"></div>
  <move_btn class="level_4" :likes="4" @addFloor="addFloorOnArray"></move_btn>

  <div class="line l_5"></div>
  <move_btn class="level_5" :likes="5" @addFloor="addFloorOnArray"></move_btn>

  <div class="line l_6"></div>

  <div class="vertical_line"></div>
</template>

<script>
import Lift from "./components/lift.vue";
import move_btn from "./components/move_btn.vue";

export default {
  name: "App",
  data() {
    return {
      array_floors: [],
    };
  },
  methods: {
    addFloorOnArray(likes) {
      this.array_floors.push(likes);
    },
  },
  components: {
    Lift,
    move_btn,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.line {
  position: absolute;
  width: 1440px;
  height: 0px;
  left: 0px;
  border: 1px solid #000000;
}

.l_1 {
  top: 10px;
}
.l_2 {
  top: 160px;
}
.l_3 {
  top: 310px;
}
.l_4 {
  top: 460px;
}
.l_5 {
  top: 610px;
}
.l_6 {
  top: 760px;
}

.vertical_line {
  position: absolute;
  width: 760px;
  height: 0px;
  left: -10px;
  top: 380px;

  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(-90deg);
}

.level_1 {
  top: 50px;
}
.level_2 {
  top: 200px;
}
.level_3 {
  top: 350px;
}
.level_4 {
  top: 500px;
}
.level_5 {
  top: 650px;
}
</style>
