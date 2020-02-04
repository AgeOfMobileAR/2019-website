<template>
  <header>
    <nav :class="open ? 'open' : ''">
      <div :class="open ? 'nav-icon open' : 'nav-icon'" @click="changeIcon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul :class="open ? 'open' : ''">
        <router-link class="nav-link" to="/" v-on:click.native="changeIcon">Home</router-link>
        <router-link class="nav-link" to="/about" v-on:click.native="changeIcon">El evento</router-link>
        <router-link class="nav-link" to="/agenda" v-on:click.native="changeIcon">Agenda</router-link>
        <router-link class="nav-link" to="/speakers" v-on:click.native="changeIcon">Speakers</router-link>
        <router-link class="nav-link" to="/sponsors" v-on:click.native="changeIcon">Sponsors</router-link>
        <router-link class="nav-link" to="/tickets" v-on:click.native="changeIcon">Entradas</router-link>
        <router-link class="nav-link" to="/coc" v-on:click.native="changeIcon">Código de Conducta</router-link>
      </ul>
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
export default class Header extends Vue {
  open: boolean = false;

  changeIcon() {
    this.open = !this.open;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import "hamburgers";

header {
  width: 100%;
  box-sizing: border-box;

  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    font-family: "Bangers", sans-serif;
    text-shadow: 2px 2px black;

    @media (max-width: 800px) {
      &.open {
        background-color: rgba(224, 106, 55, 0.9);
        width: 100vw;
        height: 100vh;
      }
    }

    .nav-icon {
      width: 30px;
      height: 35px;
      position: absolute;
      top: 2vh;
      left: 2vh;
      margin: 0;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: none;

      @media (max-width: 800px) {
        display: inline-block;
      }

      span {
        display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        background: #fff;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;

        &:nth-child(1) {
          top: 0px;
        }

        &:nth-child(2),
        &:nth-child(3) {
          top: 10px;
        }

        &:nth-child(4) {
          top: 20px;
        }
      }

      &.open {
        span {
          &:nth-child(1) {
            top: 10px;
            width: 0%;
            left: 50%;
          }

          &:nth-child(2) {
            transform: rotate(45deg);
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }

          &:nth-child(4) {
            top: 10px;
            width: 0%;
            left: 50%;
          }
        }
      }
    }

    ul {
      margin: 0;
      display: flex;
      justify-content: center;

      @media (max-width: 800px) {
        display: none;
        margin-top: 100px;

        &.open {
          display: block;
        }
      }

      .nav-link {
        padding: 0.5em;
        background-color: rgba(224, 106, 55, 0.9);
        font-size: 1.5em;
        margin: 0 5px;
        text-transform: uppercase;
        color: white;
        text-decoration: none;
        transition: transform 0.25s ease-out;
        clip-path: polygon(4% 0, 100% 0, 99% 100%, 0 94%);

        &:hover {
          transform: scale(1.05);
        }

        @media (max-width: 800px) {
          background-color: transparent;
          display: block;
          font-size: 2em;
        }
      }
    }
  }
}
</style>
