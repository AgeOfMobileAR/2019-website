<template>
  <section
    id="speakers"
    class="speakers-section"
    data-aos="fade-up"
    data-aos-delay="100"
    :style="{'background-image': `url(${require('@/assets/content_blue.png')})`}"
  >
    <div class="container">
      <HeroTitle :heroTitle="'Oradores'" />
      <div class="speaker-container">
        <Member
          data-aos="fade-up"
          data-aos-delay="100"
          v-for="speaker in speakers"
          :key="speaker.Id"
          :member="speaker"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeroTitle from "@/components/HeroTitle.vue";
import Member from "@/components/Member.vue";
import speakers_json from "@/assets/speakers/speakers.json";

@Component({
  components: {
    HeroTitle,
    Member
  }
})
export default class Speakers extends Vue {
  speakers: any[] = [];

  mounted() {
    this.speakers = speakers_json;
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

    .speaker-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
}
</style>
