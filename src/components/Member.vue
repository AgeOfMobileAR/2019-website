<template>
  <div class="member" data-aos="fade-up" data-aos-delay="100" v-if="member">
    <div class="member-photo" :id="'member-' + member.Id" @click="toggleInfo(member.Id)">
      <a>
        <img :src="member['Profile Picture']" alt="Nanu" />
      </a>
      <blockquote>
        <p class="member-name">{{member.FirstName}} {{member.LastName}}</p>
        <p class="member-tag-line">{{member.TagLine}}</p>
      </blockquote>
    </div>
    <div class="member-info" :id="'member-info-' + member.Id" hidden>
      <p class="member-name">{{member.FirstName}} {{member.LastName}}</p>
      <span @click="toggleInfo(member.Id)">X</span>
      <p class="member-bio">{{member.Bio}}</p>
      <ul>
        <li v-if="member.Twitter">
          <a :href="member.Twitter" target="_blank">Twitter</a>
        </li>
        <li v-if="member.LinkedIn">
          <a :href="member.LinkedIn" target="_blank">LinkedIn</a>
        </li>
        <li v-if="member.Blog">
          <a :href="member.Blog" target="_blank">Blog</a>
        </li>
      </ul>
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
export default class Member extends Vue {
  @Prop({default: null}) member: any;

  toggleInfo(memberId: string) {
    const member = <HTMLDivElement>(
      document.getElementById(`member-${memberId}`)
    );
    const memberInfo = <HTMLDivElement>(
      document.getElementById(`member-info-${memberId}`)
    );

    member.hidden = !member.hidden;
    memberInfo.hidden = !memberInfo.hidden;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.member {
  position: relative;
  width: 20%;
  height: auto;
  background-color: rgb(224, 106, 55);
  margin: 10px;
  color: white;

  @media (max-width: 400px) {
    margin: 10px 0;
    width: 90%;
  }

  .member-name {
    display: block;
    text-transform: uppercase;
    font-weight: bolder;
    text-shadow: 2px 2px black;
  }

  .member-photo {
    cursor: pointer;

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
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-content: space-around;
      justify-content: space-around;

      p {
        margin: 0;
        padding: 0;
      }

      .member-tag-line {
        font-size: 14px;
      }
    }
  }

  .member-info {
    background-color: rgb(224, 106, 55);
    height: max-content;
    padding: 5px 10px;
    position: relative;

    span {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-weight: bolder;
      font-size: 1em;
      padding: 5px;
    }

    .member-bio {
      font-size: 14px;
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        margin: 0;
        padding: 0;
        list-style: none;

        a {
          color: white;
          text-decoration: none;
          font-family: "Gudea", sans-serif;
        }
      }
    }
  }
}
</style>
