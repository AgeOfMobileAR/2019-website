import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/AboutUs.vue";
// import Agenda from "./components/Agenda.vue";
import Speakers from "./components/Speakers.vue";
import Sponsors from "./components/Sponsors.vue";
import Coc from "./views/Coc.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    // {
    //   path: "/agenda",
    //   name: "agenda",
    //   component: Agenda
    // },
    {
      path: "/speakers",
      name: "speakers",
      component: Speakers
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: Sponsors
    },
    {
      path: "/coc",
      name: "coc",
      component: Coc
    },
    {
      path: "/tickets",
      name: "tickets",
      beforeEnter() {
        window.open(
          "https://www.eventbrite.com.ar/e/age-of-mobile-ar-v2019-tickets-68087799441"
        );
        location.href = "/";
      }
    }
  ]
});
