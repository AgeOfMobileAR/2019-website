<template>
  <div id="app" :style="{'background-image': `url(${require('@/assets/background.jpg')})`}">
    <Header /> 
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>


<style lang="scss">
body {
  font-family: "Gudea", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #1B151E;

  #app {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    box-sizing: border-box;
  }
}
</style>
