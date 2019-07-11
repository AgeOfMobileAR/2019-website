<template>
  <section id="sponsors" class="sponsors-section" data-aos="fade-up" data-aos-delay="100" :style="{'background-image': `url(${require('@/assets/content_blue.png')})`}">
    <div>
      <HeroTitle :heroTitle="'Sponsors'" />
      <div class="speaker-dialog" @click="mailto" title="ageofmobilear@gmail.com">
        <p>¡¡Quiero ser Sponsor!!</p>
      </div>
      <div class="sponsors">
        <div class="sponsor-lg">
          <a href="https://www.frba.utn.edu.ar/" target="_blank">
            <img src="@/assets/sponsors/UTNBA.png" alt />
          </a>
        </div>
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
export default class Sponsors extends Vue {
  mailto() {
    window.location.href = "mailto:ageofmobilear@gmail.com";
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

    .speaker-dialog {
      position: relative;
      cursor: pointer;
      text-align: center;

      p {
        display: inline-block;
        text-align: center;
        margin: 0 0 2em 0;
        font-size: 1.5em;
        text-transform: uppercase;
        color: white;
        padding: 1em;
        background-color: rgba(224, 106, 55, 0.9);
        font-family: "Bangers", cursive;
        text-shadow: 2px 2px black;
        clip-path: polygon(4% 0, 100% 0, 99% 100%, 0 94%);

        &:hover {
          background-color: #0b3547;
        }
      }
    }

    .sponsors {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      .sponsor-lg {
        height: 136px;
        max-width: 360px;
        background-color: white;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: transform 0.25s ease-out;
        padding: 1em;

        &:hover {
          transform: scale(1.05);
        }

        img {
          max-width: 100%;
        }
      }
    }
  }
} 
</style>
