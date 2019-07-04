<template>
  <div>
    <img v-if="heroType == 'male'" src="@/assets/Male.png" />
    <img v-if="heroType == 'female'" src="@/assets/female.png" />
    <div class="arrow"></div>
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
  width: 100vw;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: flex-start;
  color: black;
  font-family: "Bangers", cursive;

  img {
    height: 100%;
  }

  .arrow {
    height: 100%;
    width: 1em;
    background-color: gold;
    clip-path: polygon(100% 35%, 0 50%, 100% 65%);
  }
  p {
    font-size: 2em;
    padding: 1em;
    background-color: gold;
    border-radius: 1em;
    margin-left: -1px;
    box-shadow: 0.2em 0.2em black;
  }
}
</style>
