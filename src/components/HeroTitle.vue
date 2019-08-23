<template>
  <div>
    <p>{{heroTitle}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    heroTitle: {
      default: "",
      type: String
    },
    heroType: {
      default: "male",
      type: String
    }
  }
})
export default class HeroTitle extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  display: inline-block;
  width: max-content;
  max-width: 95%;

  padding: 0.5em;
  background-color: rgb(224, 106, 55);
  margin: 0 5px;
  text-transform: uppercase;
  color: white;
  text-shadow: 2px 2px black;
  text-decoration: none;
  transition: transform 0.25s ease-out;
  clip-path: polygon(4% 0, 100% 0, 99% 100%, 0 94%);

  p {
    display: inline-block;
    font-family: "Bangers", cursive;
    font-size: 2em;
    padding: 0 1em;
    margin: 0;
  }
}
</style>
