<template>
  <section
    id="about-us"
    data-aos="fade-up"
    data-aos-delay="100"
    :style="{'background-image': `url(${require('@/assets/content_blue.png')})`}"
  >
    <div class="about-container">
      <HeroTitle :heroTitle="'El evento'" />
      <div class="container">
        <div>
          <p>
            Age of Mobile es un evento gratuito dedicado a las personas
            con interés en el desarrollo de aplicaciones móviles en cualquiera
            de sus tecnologías: Android, iOS, Swift, Xamarin, Flutter y más!
          </p>
          <p>Es un punto de encuentro para compartir vivencias, conocimientos y consejos sobre el uso de las diversas herramientas que existen para cada una de las instancias relacionadas al ciclo de desarrollo de una app.</p>
          <p>En esta primera edición, buscamos crear vínculos con las comunidades y los profesionales de Buenos Aires dedicados a tecnologías móviles, y brindarles a las empresas sponsors un nuevo lugar para darse a conocer, atraer talento y contar sus casos de éxito.</p>
          <p>Los esperamos en AOM!</p>
        </div>
      </div>
      <HeroTitle :heroTitle="'Organizadores'" />
      <Team />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeroTitle from "@/components/HeroTitle.vue";
import Team from "@/components/Team.vue";

@Component({
  components: {
    HeroTitle,
    Team
  }
})
export default class AboutUs extends Vue {}
</script>

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

  .about-container {
    width: auto;
    height: auto;
    overflow: hidden;
    overflow-y: scroll;

    .container {
      display: flex;
      margin-left: 10%;
      margin-right: 10%;
      color: white;
      align-items: center;
      font-size: 1.5em;
      text-align: justify;

      @media (max-width: 600px) {
        flex-direction: column;
        font-size: 1em;
      }

      div {
        @media (max-width: 600px) {
          order: 2;
        }
      }
      img {
        max-height: 300px;
        margin: 20px;
      }
    }
  }
}
</style>
