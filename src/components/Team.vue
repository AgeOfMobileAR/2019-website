<template>
  <section id="team" class="team-section" data-aos="fade-up" data-aos-delay="100">
    <HeroTitle :heroTitle="'Equipo'" :heroType="'female'" />
    <div class="container">
      <div class="team-member" data-aos="fade-up" data-aos-delay="100">
        <a>
          <img src="@/assets/organizers/teban.jpg" alt="Teban" />
        </a>
        <blockquote>
          <p class="team-member-name">Esteban Yañez (AKA Teban)</p>
          <p class="team-member-role">
            Organizador
            <a href="https://twitter.com/Teban3010" class="p-2">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/eyanez89/" class="p-2">
              <i class="fab fa-linkedin"></i>
            </a>
          </p>
        </blockquote>
      </div>
      <div class="team-member" data-aos="fade-up" data-aos-delay="100">
        <a>
          <img src="@/assets/organizers/nanu.jpg" alt="Nanu" />
        </a>
        <blockquote>
          <p class="team-member-name">Nahir Iberra (AKA Nanu)</p>
          <p class="team-member-role">
            Organizador
            <a href="https://twitter.com/na_iberra" class="p-2">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/niberra/" class="p-2">
              <i class="fab fa-linkedin"></i>
            </a>
          </p>
        </blockquote>
      </div>
      <div class="team-member" data-aos="fade-up" data-aos-delay="100">
        <a>
          <img src="@/assets/organizers/seba.jpg" alt="Seba" />
        </a>
        <blockquote>
          <p class="team-member-name">Sebastián Perez (AKA Seba)</p>
          <p class="team-member-role">
            Organizador
            <a href="https://twitter.com/sebaleoperez" class="p-2">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sebasti%C3%A1n-leonardo-p%C3%A9rez-6881659/"
              class="p-2"
            >
              <span class="icon-linkedin"></span>
            </a>
          </p>
        </blockquote>
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
export default class Team extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  width: 100%;
  box-sizing: border-box;

  .container {
    align-items: center;
    margin: 15px auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: auto;
    padding: 20px;
    padding-left: calc(150px * 0.15);

    @media (max-width: 600px) {
      flex-direction: column;
    }

    .team-member {
      position: relative;
      clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0% 100%);
      flex-shrink: 0;
      width: 300px;
      height: 300px;
      margin-left: calc(-300px * 0.15);
      display: inline-block;

      @media (max-width: 600px) {
        clip-path: polygon(
          20% 0,
          100% 0%,
          100% 100%,
          20% 100%,
          20% 80%,
          0 80%,
          20% 60%
        );
      }

      a {
        //margin: 0;
        display: block;

        img {
          width: 100%;
        }
      }

      blockquote {
        position: absolute;
        bottom: 10%;
        left: 15%;
        width: 100%;
        margin: 0;
        clip-path: polygon(
          25% 25%,
          20% 0,
          45% 25%,
          100% 25%,
          100% 100%,
          0 100%,
          0 25%
        );
        padding-top: 10%;
        background-color: gold;

        p {
          margin: 0;
          background-color: white;
          width: 100%;
          padding: 5px;
          border: 2px solid gold;

          a {
            float: right;
            margin: auto 5px;
          }
        }

        .team-member-name {
          width: 75%;
          background-color: gold;
          color: black;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>