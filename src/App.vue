<template>
  <div id="app">
    <SimplestHuePicker v-model="color" />
  </div>
</template>

<script>
import SimplestHuePicker from "./components/SimplestHuePicker.vue";

export default {
  name: "app",
  components: {
    SimplestHuePicker
  },
  data() {
    return {
      color: {
        hue: 0
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
