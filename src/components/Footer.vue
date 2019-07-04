<template>
  <footer>
    <p>© Age of Mobile - All rights reserved</p>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  width: 100vw;
  background-color: black;
  color: white;
  margin: -8px;
  //margin-top: 8px;
  text-align: center;
  padding: 5px;
  
  p {
    margin: 0;
  }
}
</style>
