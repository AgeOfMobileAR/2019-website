<template>
  <div :style="{'background-image': `url(${require('@/assets/title.png')})`}">
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
  color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-size: 100% 100%;
  width: max-content;

  p {
    display: inline-block;
    font-family: "Indie Flower", cursive;
    font-size: 2em;
    padding: 1em;
    margin: 0;
  }
}
</style>
