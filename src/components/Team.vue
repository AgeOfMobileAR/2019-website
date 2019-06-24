<template>
  <section id="team" class="team-section" data-aos="fade-up" data-aos-delay="100">
    <div class="outer-box">
      <div class="box">
        <h2>Equipo</h2>
      </div>
    </div>
    <div class="team-member" data-aos="fade-up" data-aos-delay="100">
      <figure>
        <img src="@/assets/organizers/teban.jpg" alt="Teban">
      </figure>
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
      <figure>
        <img src="@/assets/organizers/nanu.jpg" alt="Nanu">
      </figure>
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
      <figure>
        <img src="@/assets/organizers/seba.jpg" alt="Seba">
      </figure>
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
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Team extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/foldCorner.scss";

.team-section {
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

  .team-member {
    position: relative;
    width: 30%;
    margin: auto;

    figure {
      img {
        width: 90%;
        //border-radius: 50%;
      }
    }

    blockquote {
      position: absolute;
      bottom: 10%;
      left: 15%;
      width: 100%;
      margin: 0;

      p {
        margin: 0;
        background-color: white;
        width: 60%;
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
</style>
