<template>
  <section
    data-aos="fade-up"
    data-aos-delay="100"
    :style="{'background-image': `url(${require('@/assets/content_blue.png')})`}"
  >
    <div class="agenda-container">
      <HeroTitle :heroTitle="'Agenda'" />
      <div class="container">
        <ul>
          <li
            v-for="session in sessions"
            :key="session.Id"
            v-bind:class="{ common: session.Tipo != 'Session' }"
          >
            <h4>{{session.Hora}}</h4>
            <div>
              <h4>{{session.Title}}</h4>
              <p class="name">{{session.Speakers}}</p>
              <p :id="`desc-${session.Id}`" hidden>{{session.Description}}</p>
            </div>
            <span v-if="session.Tipo == 'Session' && session.Description" @click="toggleDescription(session.Id)">+</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeroTitle from "@/components/HeroTitle.vue";
import sessions_json from "@/assets/sessions/sessions.json";

@Component({
  components: {
    HeroTitle
  }
})
export default class Agenda extends Vue {
  sessions: any[] = [];

  mounted() {
    this.sessions = sessions_json;
  }

  toggleDescription(sessionId: string) {
    const sessionDescription = <HTMLParagraphElement>(
      document.getElementById(`desc-${sessionId}`)
    );

    sessionDescription.hidden = !sessionDescription.hidden;
  }
}
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

  .agenda-container {
    width: auto;
    height: auto;
    overflow: hidden;
    overflow-y: scroll;
    padding-right: 20px;

    .container {
      color: white;
      align-items: center;
      font-size: 1.5em;
      text-align: justify;

      ul {
        margin: 0;
        padding: 0;

        li {
          margin: 0;
          padding: 10px;
          list-style-type: none;
          display: grid;
          grid-template-columns: 70px auto 50px;
          justify-items: center;
          align-items: center;
          text-align: center;

          &.common {
            background-color: rgb(224, 106, 55);
            transition: transform 0.25s ease-out;
            clip-path: polygon(2% 0, 100% 0, 99% 100%, 0 94%);
            grid-template-columns: 70px auto;
          }

          h4 {
            @media (max-width: 800px) {
              font-size: 1.15rem;
            }
          }

          p {
            font-size: 0.875rem;

            &.name {
              font-size: 1.15rem;

              @media (max-width: 800px) {
              font-size: 1rem;
            }
            }
          }

          span {
            text-align: right;
            font-size: 2rem;
            cursor: pointer;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
