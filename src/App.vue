<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
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
  font-family: 'Gudea', sans-serif;
  box-sizing: border-box;
  margin: 0px;
  background-color: #10C3D7;

  #app {
    padding: 0px;
  }
}
</style>
