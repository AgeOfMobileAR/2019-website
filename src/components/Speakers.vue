<template>
  <section
    id="speakers"
    class="speakers-section"
    data-aos="fade-up"
    data-aos-delay="100"
    :style="{'background-image': `url(${require('@/assets/content_blue.png')})`}"
  >
    <div>
      <HeroTitle :heroTitle="'Oradores'" />
      <div class="container" @click="navigate">
        <p>¿Querés ser orador?</p>
      </div>
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
export default class Speakers extends Vue {
  navigate() {
    window.location.href = "https://sessionize.com/age-of-mobile-v2019/";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw;
  padding: 7.5%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  box-sizing: border-box;
  background-size: 100% 100%;
  overflow: hidden;
  max-height: 90vh;

  div {
    width: auto;
    height: auto;
    overflow: hidden;
    overflow-y: scroll;

    .container {
      display: flex;
      color: white;
      align-items: center;
      font-size: 1.5em;
      text-align: center;

      p {
        display: inline-block;
        text-align: center;
        margin: 2em 0;
        font-size: 1.5em;
        text-transform: uppercase;
        padding: 1em;
        background-color: rgba(224, 106, 55, 0.9);
        font-family: "Bangers", cursive;
        text-shadow: 2px 2px black;
        clip-path: polygon(4% 0, 100% 0, 99% 100%, 0 94%);
        cursor: pointer;
      }
    }
  }
}
</style>
