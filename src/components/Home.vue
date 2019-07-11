<template>
  <section>
    <div class="logo">
      <img src="@/assets/logo.png" alt="AoM" />
      <p>Age of Mobile</p>
    </div>
    <div class="info">
      <Countdown />
      <p>31 AGOSTO 2019</p>
      <p class="address" @click="seeAdress">UTN.BA - Av. Medrano 951, CABA</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Countdown from "./CountDown.vue";

@Component({
  components: {
    Countdown
  }
})
export default class Header extends Vue {
  seeAdress() {
    window.open("https://goo.gl/maps/V7SMZGrn7oj6fhM17");
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
  width: 100vw;
  height: 100vh;
  padding: 5%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  box-sizing: border-box;

  .logo {
    text-align: center;

    img {
      max-height: 35vh;
    }

    p {
      color: white;
      text-align: center;
      font-family: "Bangers", cursive;
      text-shadow: 2px 2px black;
      font-size: 5em;
      margin: 0;

      @media (max-width: 800px) {
        font-size: 4em;
      }
    }
  }

  .info {
    width: 100%;
    margin: 1em 0;
    color: white;
    text-align: center;
    font-family: "Bangers", cursive;
    text-shadow: 2px 2px black;

    p {
      margin: 0.5em 0;
      font-size: 3em;

      &.address {
        cursor: pointer;
      }

      @media (max-width: 800px) {
        font-size: 2em;
      }
    }
  }
}
</style>
