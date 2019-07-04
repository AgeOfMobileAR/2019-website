<template>
  <section id="speakers" class="speakers-section" data-aos="fade-up" data-aos-delay="100">
    <HeroTitle :heroTitle="'Oradores'" :heroType="'female'" />
    <div class="container">
      <p>La convocatoria para oradores se abrirá en breve.</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeroTitle from "@/components/HeroTitle.vue";

@Component({
  components: {
    HeroTitle
  }
})
export default class Speakers extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/foldCorner.scss";
section {
  width: 100%;
  box-sizing: border-box;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1em;

      p {
        display: inline-block;
        text-align: center;
        margin: 2em 0;
        font-size: 1.5em;
        text-transform: uppercase;
        background-color: #092B35;
        color: white;
        padding: 1em;
      }
  }
}
</style>
