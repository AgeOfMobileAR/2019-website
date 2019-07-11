<template>
  <div>
    <!-- <AboutUs/>
    <Agenda/>
    <Speakers/>
    <Sponsors/>
    <Team/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AboutUs from "@/components/AboutUs.vue"; // @ is an alias to /src
import Speakers from "@/components/Speakers.vue";
import Sponsors from "@/components/Sponsors.vue";
import Team from "@/components/Team.vue";

@Component({
  components: {
    AboutUs,
    Speakers,
    Sponsors,
    Team
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
section {
  position: relative;

  .outer-box {
    position: absolute;
    top: -1px;
    left: 0;
    z-index: 1;
    background: #000;
    width: 265px;
    padding: 0.25em;
    -webkit-clip-path: polygon(0 0, 82% 0, 96% 91%, 0% 100%);
    clip-path: polygon(0 0, 82% 0, 96% 91%, 0% 100%);

    .box {
      margin-right: 2em;
      width: 245px;
      background: gold;
      padding: 0.5em;
      -webkit-clip-path: polygon(0 0, 82% 0, 96% 91%, 0% 100%);
      clip-path: polygon(0 0, 82% 0, 96% 91%, 0% 100%);

      h2 {
        font-size: 1.5em;
        color: black;
        margin: 0;
      }
    }
  }
}
</style>
