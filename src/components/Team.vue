<template>
  <div class="team-container">
    <div class="team-member" data-aos="fade-up" data-aos-delay="100">
      <a>
        <img src="@/assets/organizers/teban.jpg" alt="Teban" />
      </a>
      <blockquote>
        <p class="team-member-name">Esteban Yañez (AKA Teban)</p>
        <p class="team-member-role">
          <a href="https://twitter.com/Teban3010" class="p-2">
            <span class="mdi mdi-twitter-box"></span>
          </a>
          <a href="https://www.linkedin.com/in/eyanez89/" class="p-2">
            <span class="mdi mdi-linkedin-box"></span>
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
          <a href="https://twitter.com/na_iberra" class="p-2">
            <span class="mdi mdi-twitter-box"></span>
          </a>
          <a href="https://www.linkedin.com/in/niberra/" class="p-2">
            <span class="mdi mdi-linkedin-box"></span>
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
          <a href="https://twitter.com/sebaleoperez" class="p-2">
            <span class="mdi mdi-twitter-box"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-leonardo-p%C3%A9rez-6881659/"
            class="p-2"
          >
            <span class="mdi mdi-linkedin-box"></span>
          </a>
        </p>
      </blockquote>
    </div>
  </div>
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
.team-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 400px) {
    display: block;
  }

  .team-member {
    width: 300px;
    height: auto;
    display: inline-block;
    background-color: #e8e0c5;
    margin: 10px;

    @media (max-width: 400px) {
      margin: 10px 0;
    }
    a {
      //margin: 0;
      display: block;

      img {
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
        width: 100%;
      }
    }

    blockquote {
      width: 100%;
      margin: 0;
      text-align: right;

      p {
        margin: 0;
        padding: 5px;
        display: inline;

        a {
          float: right;
          margin: auto 5px;
        }
      }

      .team-member-name {
        color: black;
        text-transform: uppercase;
        font-weight: bolder;
      }

      .team-member-role {
        display: block;
        font-size: 2em;

        a {
          &:first-child {
            color: #38a1f3;
          }
          &:nth-child(2) {
            color: #0077b5;
          }
        }
      }
    }
  }
}
</style>