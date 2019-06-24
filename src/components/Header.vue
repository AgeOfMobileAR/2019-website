<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/logo.png" alt="AoM">
      </div>
      <div class="info-container">
        <ul>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/coc">Código de Conducta</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
        </ul>
        <div class="info">
          <p>31 AGOSTO 2019</p>
          <Countdown/>
          <p>UTN.BA - Av. Medrano 951, CABA</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Countdown from "./CountDown.vue";

@Component({
  components: {
    Countdown
  }
})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  width: 100%;
  background-color: transparent;
  // background-image: url("~/assets/header_bg.jpg");

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 5%;

    .logo {
      width: 30%;

      img {
        width: 100%;
      }
    }

    .info-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      width: 70%;

      ul {
        .nav-link {
          padding: 10px;
          background-color: gold;
          border: 2px solid black;
          border-radius: 5px;
          font-size: 1em;
          margin: 0 5px;
          text-transform: uppercase;
          color: black;
          text-decoration: none;

          &:hover {
            color: black;
          }
        }
      }

      .info {
        width: 100%;
        // border: 5px solid white;
        border-radius: 25px;
        background-color: rgba(0, 0, 0, 0.3);
        margin: 1em 0;
        color: white;
        text-align: center;

        p {
          margin: 0.5em 0;
          font-size: 2em;
        }
      }
    }
  }
}
</style>
