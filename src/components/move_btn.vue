<template>
   <button v-on:click="addFloor()" class="btn" id="le_1">{{likes}}</button>
</template>

<script>
export default {
    name: "move_btn",
    props:["likes"],
    data() {
        return {

        }
    },
    methods: {
        addFloor() {
            this.$emit("addFloor", this.likes);
        }
    }
}
</script>

<style scoped>
.btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    position: absolute;
    width: 69px;
    height: 70px;
    left: 380px;

    background: #b1c6e6;
    border-radius: 100%;
}

</style>