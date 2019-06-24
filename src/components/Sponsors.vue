<template>
  <section id="sponsors" class="sponsors-section" data-aos="fade-up" data-aos-delay="100">
    <div class="outer-box">
      <div class="box">
        <h2>Sponsors</h2>
      </div>
    </div>
      <img src="@/assets/superheroes/Male-1.png" alt>
      <div class="speaker-dialog" @click="mailto" title="ageofmobilear@gmail.com">
        <img src="@/assets/chat.png" alt>
        <p>¡¡Convertirte en Sponsor!!</p>
      </div>
    <div class="sponsors">
      <div class="sponsor-lg">
        <a href="https://www.frba.utn.edu.ar/">
        <img
          src="@/assets/sponsors/UTNBA.png"
          alt
        >
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Sponsors extends Vue {
  mailto(){
    window.location.href='mailto:ageofmobilear@gmail.com';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/foldCorner.scss";

.sponsors-section {
  display: flex;
  flex-direction: row;
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
    cursor: pointer;

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
      text-transform: uppercase;
      text-decoration: underline;
    }
  }

  .became-sponsor {
    width: 100%;
    margin: 2em;
    text-align: center;
  }

  .sponsors {
    width: 100%;

    .sponsor-lg {
      margin: auto;
      text-align: center;

      img {
        height: 100%;
        margin: auto;
      }
    }
  }
}
</style>
