<template>
  <div id="app" style="background-image: url(https://www.ppt-backgrounds.net/thumbs/comic-book-clip-art-background-backgrounds.jpg);">
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
  background-color: #4b799f;
  font-family: helvetica;
  margin: 0px;

  #app {
    padding: 8px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
  }
}
</style>
