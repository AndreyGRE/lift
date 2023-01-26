<template>
  <img
    src="../assets/квадрат.jpg"
    :class="classes.join(' ')"
    id="KV"
    @transitionend="endAnimation()"
  />
</template>

<script>
export default {
  name: "Lift",
  props: ["arr_floors"],
  data() {
    return {
      classes: ["lift", "move", "position_1"],
      isBizy: false,
    };
  },
  watch: {
    arr_floors: {
      handler() {
        if (!this.isBizy) {
          this.moving_lift();
        }
      },
      deep: true,
    },
  },
  methods: {
    checkArray() {
      if (this.arr_floors.length !== 0) this.moving_lift();
    },
    endAnimation() {
      this.classes.push("blik");
      setTimeout(() => {
        this.classes.splice(
          this.classes.findIndex((item) => {
            item === "blik";
          })
        );
        this.isBizy = false;
        this.checkArray();
      }, 3000);
    },
    moving_lift() {
      console.log(this.arr_floors);
      this.isBizy = true;
      let old_floor = this.classes.find((item) => /^position/i.test(item)).split("_")[1];
      
      if (this.arr_floors.length !== 0) {
        // eslint-disable-next-line
        let current_floor = this.arr_floors.shift();
        if (current_floor === old_floor) return;
        this.classes.splice(
          this.classes.findIndex((item) => {
            /^position/i.test(item);
          })
        );
        switch (current_floor) {
          case 1:
            this.classes.push("position_1");
            break;
          case 2:
            this.classes.push("position_2");
            break;
          case 3:
            this.classes.push("position_3");
            break;
          case 4:
            this.classes.push("position_4");
            break;
          case 5:
            this.classes.push("position_5");
            break;
        }
      }
    },
  },
};
</script>
   
<style scoped>
.blik {
  animation: flicker 1s infinite; /* Параметры анимации */
}
@keyframes flicker {
  from {
    opacity: 1; /* Непрозрачный текст */
  }
  to {
    opacity: 0; /* Прозрачный текст */
  }
}
.position_1 {
  top: 10px;
}
.position_2 {
  top: 160px;
}
.position_3 {
  top: 310px;
}
.position_4 {
  top: 460px;
}
.position_5 {
  top: 610px;
}
.lift {
  position: absolute;
  width: 100px;
  height: 150px;
  left: 180px;
}
.move {
  transition-duration: 3s;
}
</style>