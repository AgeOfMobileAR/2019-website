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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
  
  p {
    margin: 0;
  }
}
</style>
