<template>
  <header :style="{'background-image': `url(${require('@/assets/background.jpg')})`}">
    <nav>
      <div class="info-container">
        <ul>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/#about">Acerca de</router-link>
          <router-link class="nav-link" to="/#agenda">Agenda</router-link>
          <router-link class="nav-link" to="/#speakers">Speakers</router-link>
          <router-link class="nav-link" to="/#sponsors">Sponsors</router-link>
          <router-link class="nav-link" to="/#team">Equipo</router-link>
          <router-link class="nav-link" to="/coc">Código de Conducta</router-link>
        </ul>
      </div>
    </nav>
    <div class="logo">
      <img src="@/assets/logo.png" alt="AoM" />
    </div>
    <div class="info">
      <Countdown />
      <p>31 AGOSTO 2019</p>
      <p>UTN.BA - Av. Medrano 951, CABA</p>
    </div>
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  box-sizing: border-box;
  padding: 1em;
  
  .logo {
    text-align: center;

    img {
      width: 40%;

      @media (max-width: 600px) {
          width: 100%;
      }
    }
  }

  .info {
    width: 100%;
    margin: 1em 0;
    color: white;
    text-align: center;

    p {
      margin: 0.5em 0;
      font-size: 2em;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;

    .info-container {
      ul {
        .nav-link {
          padding: 10px;
          // background-color: gold;
          // border: 2px solid black;
          // border-radius: 5px;
          font-size: 1em;
          margin: 0 5px;
          text-transform: uppercase;
          color: white;
          text-decoration: none;

          &:hover {
            color: black;
          }
        }
      }
    }
  }
}
</style>
