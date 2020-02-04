<template>
  <section id="sponsors" class="sponsors-section" data-aos="fade-up" data-aos-delay="100" :style="{'background-image': `url(${require('@/assets/content_blue.png')})`}">
    <div class="container">
      <HeroTitle :heroTitle="'Sponsors'" />
      <!-- <div class="speaker-dialog" @click="mailto" title="ageofmobilear@gmail.com">
        <p>¡¡Quiero ser Sponsor!!</p>
      </div> -->
      <div class="sponsors">
        <div class="sponsor-container-lg">
          <div class="sponsor-lg">
            <a href="https://sceu.frba.utn.edu.ar/" target="_blank">
              <img src="@/assets/sponsors/UTNBA.png" alt />
            </a>
          </div>
          <div class="sponsor-lg">
            <a href="https://www.belatrixsf.com/" target="_blank">
              <img src="@/assets/sponsors/belatrix.png" alt />
            </a>
          </div>
          <div class="sponsor-lg">
            <a href="https://solstice.com" target="_blank">
              <img src="@/assets/sponsors/Solstice.png" alt />
            </a>
          </div>
          <div class="sponsor-lg">
            <a href="https://www.linkedin.com/company/mercadolibre/" target="_blank">
              <img src="@/assets/sponsors/MercadoLibre.png" alt />
            </a>
          </div>
        </div>
        <div class="sponsor-container-md">
        </div>
        <div class="sponsor-container-sm">
          <div class="sponsor-sm">
            <a href="https://www.educacionit.com/" target="_blank">
              <img src="@/assets/sponsors/educacionit.jpg" alt />
            </a>
          </div>
        </div>
        <div class="sponsor-container-xs">
          <div class="sponsor-xs">
            <a href="https://www.meetup.com/Android-Devs-Buenos-Aires/" target="_blank">
              <img src="@/assets/sponsors/AndroidDevsBsAs.png" alt />
            </a>
          </div>
          <div class="sponsor-xs">
            <a href="https://www.meetup.com/SwiftBA/" target="_blank">
              <img src="@/assets/sponsors/swiftBA.svg" alt />
            </a>
          </div>
          <div class="sponsor-xs">
            <a href="https://www.meetup.com/vuenos-aires/" target="_blank">
              <img src="@/assets/sponsors/vuenosaires.png" alt />
            </a>
          </div>
          <div class="sponsor-xs">
            <a href="https://www.meetup.com/NG-BAIRES/" target="_blank">
              <img src="@/assets/sponsors/ngbaires.png" alt />
            </a>
          </div>
          <div class="sponsor-xs">
            <a href="https://www.meetup.com/React-en-Buenos-Aires/" target="_blank">
              <img src="@/assets/sponsors/reactBA.jpg" alt />
            </a>
          </div>
          <div class="sponsor-xs">
            <a href="http://www.net-baires.com.ar/" target="_blank">
              <img src="@/assets/sponsors/netbaires.png" alt />
            </a>
          </div>
          <div class="sponsor-xs">
            <a href="https://www.womenwhocode.com/buenosaires" target="_blank">
              <img src="@/assets/sponsors/wwcodeba.png" alt />
            </a>
          </div>
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
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw;

  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-size: 100% 100%;
  max-height: 90vh;

  .container {
    width: auto;
    height: auto;
    overflow: hidden;
    overflow-y: scroll;
    padding-right: 20px;

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
        font-family: "Bangers", sans-serif;
        text-shadow: 2px 2px black;
        clip-path: polygon(4% 0, 100% 0, 99% 100%, 0 94%);

        &:hover {
          background-color: #0b3547;
        }
      }
    }

    .sponsors {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      .sponsor-container-lg {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin: 10px;

        .sponsor-lg {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 136px;
          max-width: 360px;
          backface-visibility: hidden;
          transform: translateZ(0);
          transition: transform 0.25s ease-out;
          padding: 1em;
          background-color: white;
          clip-path: polygon(5% 8%, 95% 0, 100% 91%, 0% 100%);

          @media (max-width: 400px) {
            max-width: 280px;
          }

          &:hover {
            transform: scale(1.05);
          }

          a {
            display: contents;

            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }

      .sponsor-container-md {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin: 10px;

        .sponsor-md {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 117px;
          max-width: 310px;
          backface-visibility: hidden;
          transform: translateZ(0);
          transition: transform 0.25s ease-out;
          padding: 1em;
          background-color: white;
          clip-path: polygon(5% 8%, 95% 0, 100% 91%, 0% 100%);

          @media (max-width: 400px) {
            max-width: 230px;
          }

          &:hover {
            transform: scale(1.05);
          }

          a {
            display: contents;

            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }

      .sponsor-container-sm {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin: 10px;

        .sponsor-sm {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 98px;
          max-width: 260px;
          backface-visibility: hidden;
          transform: translateZ(0);
          transition: transform 0.25s ease-out;
          padding: 1em;
          background-color: white;
          clip-path: polygon(5% 8%, 95% 0, 100% 91%, 0% 100%);

          @media (max-width: 400px) {
            max-width: 180px;
          }

          &:hover {
            transform: scale(1.05);
          }

          a {
            display: contents;

            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }

      .sponsor-container-xs {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin: 10px;

        .sponsor-xs {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 79px;
          max-width: 210px;
          backface-visibility: hidden;
          transform: translateZ(0);
          transition: transform 0.25s ease-out;
          padding: 1em;
          background-color: white;
          clip-path: polygon(5% 8%, 95% 0, 100% 91%, 0% 100%);

          @media (max-width: 400px) {
            max-width: 130px;
          }

          &:hover {
            transform: scale(1.05);
          }

          a {
            display: contents;

            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }
    }
  }
} 
</style>
