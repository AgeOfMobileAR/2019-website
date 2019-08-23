<template>
  <div class="team-container">
    <Member
      data-aos="fade-up"
      data-aos-delay="100"
      v-for="organizer in organizers"
      :key="organizer.Id"
      :member="organizer"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Member from "@/components/Member.vue";
import HeroTitle from "@/components/HeroTitle.vue";
import organizers_json from "@/assets/organizers/organizers.json";

@Component({
  components: {
    HeroTitle,
    Member
  }
})
export default class Team extends Vue {
  organizers: any[] = [];

  mounted() {
    this.organizers = organizers_json;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>