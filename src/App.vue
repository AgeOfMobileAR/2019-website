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
  background-color: #1b151e;

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
    overflow: hidden;

    section {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-evenly;
      padding: 5.5% 7.5%;
      box-sizing: border-box;
      overflow: hidden;

      @media (max-width: 400px) {
        padding: 15% 7.5%;
      }
    }
  }
}
</style>
