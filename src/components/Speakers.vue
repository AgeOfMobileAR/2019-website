<template>
  <section id="speakers" class="speakers-section" data-aos="fade-up" data-aos-delay="100">
    <div class="outer-box">
      <div class="box">
        <h2>Oradores</h2>
      </div>
    </div>
    <img src="@/assets/superheroes/Female-3.png" alt>
    <div class="speaker-dialog">
      <img src="@/assets/chat.png" alt>
      <p>La convocatoria para oradores se abrirá en breve.</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Speakers extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/foldCorner.scss";

.speakers-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  position: relative;
  margin: 15px auto;
  overflow: hidden;
  @include folded-corner(white, 2em, 60deg);

  .speaker-dialog {
    position: relative;
    width: 60vw;
    height: 8em;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    p {
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      width: 100%;
      margin: 2em 0;
      font-size: 1.5em;
    }
  }
}
</style>
