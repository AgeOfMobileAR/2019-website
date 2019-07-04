<template>
  <section id="sponsors" class="sponsors-section" data-aos="fade-up" data-aos-delay="100">
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
  width: 100%;
  box-sizing: border-box;

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
      background-color: #071f28;
      color: white;
      padding: 1em;

      &:hover {
        background-color: #0b3547;
      }
    }
  }

  .became-sponsor {
    width: 100%;
    margin: 2em;
    text-align: center;
  }

  .sponsors {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

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
</style>
