<template>
  <section>
    <div class="logo">
      <img src="@/assets/logo.png" alt="AoM" />
      <p>Age of Mobile</p>
    </div>
    <div class="info">
      <!-- <Countdown /> -->
      <p>31 AGOSTO 2019</p>
      <p class="address" @click="seeAdress">UTN.BA - Av. Medrano 951, CABA</p>
      <p>
        Seguinos en nuestras redes
        <a
          class="social"
          href="https://twitter.com/AgeOfMobileAR"
          target="blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          class="social"
          href="https://www.facebook.com/Ageofmobilear-278337906374913/"
          target="blank"
          ><i class="fab fa-facebook-square"></i
        ></a>
        <a
          class="social"
          href="https://www.youtube.com/channel/UC_J0gWUoPNmjMySkpabe9YA"
          target="blank"
          ><i class="fab fa-youtube"></i
        ></a>
      </p>
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
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  .logo {
    text-align: center;

    img {
      max-height: 35vh;
    }

    p {
      color: white;
      text-align: center;
      font-family: "Bangers", sans-serif;
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
    font-family: "Bangers", sans-serif;
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

  .social {
    color: white;
    text-decoration: none;
    padding: 10px;

    &:hover,
    &:active {
      color: white;
    }
  }
}
</style>
